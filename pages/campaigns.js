import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const campaigns = [
  {
    id: '24k-list',
    name: '24K List Campaign',
    description: 'High-value prospect campaign for premium services',
    filename: '24k-list.html'
  },
  {
    id: 'seamless-ai',
    name: 'Seamless AI Campaign',
    description: 'AI-powered healthcare solutions promotion',
    filename: 'seamless-ai.html'
  },
  {
    id: 'franchisor',
    name: 'Franchisor Campaign',
    description: 'Franchise opportunity and partnership campaign',
    filename: 'franchisor.html'
  },
  {
    id: 'campaing1',
    name: 'General Campaign 1',
    description: 'General marketing campaign for healthcare services',
    filename: 'campaing1.html'
  }
];

export default function Campaigns() {
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [emailList, setEmailList] = useState('');
  const [subject, setSubject] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleCampaignSelect = (campaignId) => {
    setSelectedCampaign(campaignId);
    const campaign = campaigns.find(c => c.id === campaignId);
    if (campaign) {
      setSubject(`${campaign.name} - Reef Health`);
    }
  };

  const handleSendCampaign = async (e) => {
    e.preventDefault();
    
    if (!selectedCampaign || !emailList.trim() || !subject.trim()) {
      setMessage('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const emails = emailList.split('\n').map(email => email.trim()).filter(email => email);
      
      const response = await fetch('/api/send-campaign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaignId: selectedCampaign,
          emails: emails,
          subject: subject
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Campaign sent successfully! ${data.sentCount} emails sent.`);
        setEmailList('');
        setSubject('');
        setSelectedCampaign('');
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Error sending campaign. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Campaign Management - Reef Health</title>
        <meta name="description" content="Manage and send email campaigns" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Campaign Management
            </h1>
            
            <form onSubmit={handleSendCampaign} className="space-y-6">
              {/* Campaign Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Campaign *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {campaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedCampaign === campaign.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleCampaignSelect(campaign.id)}
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {campaign.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {campaign.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter email subject"
                  required
                />
              </div>

              {/* Email List */}
              <div>
                <label htmlFor="emailList" className="block text-sm font-medium text-gray-700 mb-2">
                  Email List (one email per line) *
                </label>
                <textarea
                  id="emailList"
                  value={emailList}
                  onChange={(e) => setEmailList(e.target.value)}
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter email addresses, one per line&#10;example@email.com&#10;another@email.com"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter one email address per line. Invalid emails will be skipped.
                </p>
              </div>

              {/* Message Display */}
              {message && (
                <div className={`p-4 rounded-md ${
                  message.includes('Error') || message.includes('Please fill')
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-green-50 text-green-700 border border-green-200'
                }`}>
                  {message}
                </div>
              )}

              {/* Send Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-3 rounded-md text-white font-medium transition-colors ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isLoading ? 'Sending...' : 'Send Campaign'}
                </button>
              </div>
            </form>

            {/* Campaign Preview */}
            {selectedCampaign && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Campaign Preview
                </h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Campaign:</strong> {campaigns.find(c => c.id === selectedCampaign)?.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Template:</strong> {campaigns.find(c => c.id === selectedCampaign)?.filename}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Subject:</strong> {subject || 'Not set'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 