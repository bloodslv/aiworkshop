import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './components/Payment'

function App() {
  const [count, setCount] = useState(0)
  const [showPayment, setShowPayment] = useState(false)

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => setShowPayment(false)}
            className="mb-6 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            ← Back to Home
          </button>
          <Payment />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex space-x-8">
            <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
              <img src={viteLogo} className="logo w-24 h-24" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
              <img src={reactLogo} className="logo react w-24 h-24" alt="React logo" />
            </a>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Vite + React + Tailwind
          </h1>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-md w-full">
            <button 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
            
            <button 
              onClick={() => setShowPayment(true)}
              className="w-full mt-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              🔐 Open Payment Form
            </button>
            
            <p className="mt-6 text-gray-600 dark:text-gray-300 text-center">
              Edit <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">src/App.jsx</code> and save to test HMR
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">⚡ Fast Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Lightning fast HMR with Vite</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🎨 Tailwind CSS</h3>
              <p className="text-gray-600 dark:text-gray-300">Utility-first CSS framework</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">⚛️ React 19</h3>
              <p className="text-gray-600 dark:text-gray-300">Latest React features</p>
            </div>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
