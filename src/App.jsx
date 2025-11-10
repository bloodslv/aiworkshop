import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './components/Payment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-green-500 text-white py-16">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <img src={viteLogo} className="w-12 h-12" alt="Vite logo" />
            <img src={reactLogo} className="w-12 h-12" alt="React logo" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PayFlow Demo</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Experience seamless payment processing with modern React components and beautiful UI design
          </p>
        </div>
      </header>

      {/* Modern Payment Solutions Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Modern Payment Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Built with React and Vite for lightning-fast performance. Secure, responsive, and user-friendly payment forms that adapt to any device.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Processing</h3>
              <p className="text-gray-600">
                End-to-end encryption ensures your payment data is always protected and secure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Powered by Vite and React for instant load times and smooth interactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile Ready</h3>
              <p className="text-gray-600">
                Fully responsive design that works perfectly on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Interactive Demo</h2>
          <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Click Counter: {count}
            </button>
            <p className="text-gray-600 text-sm mt-4">
              Fast, interactive, and easy to build! React state management
            </p>
          </div>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Try Our Payment Form</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience our beautifully designed payment form with real-time validation, secure input handling, and smooth animations.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <Payment />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PayFlow Demo</h3>
              <p className="text-gray-400">
                A modern payment form built with React, Vite, and Tailwind CSS. Showcasing best practices in UI/UX.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Technologies</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• React 19</li>
                <li>• Vite</li>
                <li>• Tailwind CSS</li>
                <li>• Modern JavaScript</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Learn More</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• <a href="https://react.dev" className="hover:text-white">React Docs</a></li>
                <li>• <a href="https://vite.dev" className="hover:text-white">Vite Docs</a></li>
                <li>• <a href="https://tailwindcss.com" className="hover:text-white">Tailwind CSS</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>Built with ❤️ using modern web technologies</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
