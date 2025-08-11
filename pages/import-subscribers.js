import CSVUpload from '../components/CSVUpload'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ImportSubscribers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Import Subscribers
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload your CSV file to import subscribers into your database. 
              All imported subscribers will have an &quot;active&quot; status.
            </p>
          </div>
          
          <CSVUpload />
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 