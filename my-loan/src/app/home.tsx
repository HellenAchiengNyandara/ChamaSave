'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Loan Management System</title>
        <meta name="description" content="Manage your savings and loans effectively" />
      </Head>

      <nav className="bg-white shadow-md py-4 px-6">
        {/* Desktop Nav */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-xl font-bold text-blue-600">Loan System</span>
            
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/aboutPage" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
            </div>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/SignIn" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
            <Link href="/New" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Register
            </Link>
          </div>

          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/aboutPage" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <div className="pt-2 border-t border-gray-200 space-y-4">
              <Link href="/SignIn" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link href="/New" className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-center" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to the <br />
            <span className="text-blue-600">Loan Management System</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A simple and effective way to manage your savings and loans. Join us today to
            access our financial services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/New" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300">
              Get Started
            </Link>
            <Link href="/about" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium border border-blue-600 hover:bg-blue-50 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </main>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            We offer a range of services to help you manage your finances.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Savings Account */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform-gpu">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Savings Account</h2>
            <p className="text-gray-700 mb-4">
              Secure your future with our savings accounts. Open a savings account with us and start building your financial future.
            </p>
            <Link href="/savings" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Start Saving
            </Link>
          </div>

          {/* Loans */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform-gpu">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Loans</h2>
            <p className="text-gray-700 mb-4">
              Get access to quick loans based on your savings. Members can apply for loans up to 45% of their savings.
            </p>
            <Link href="/loans" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Apply for a Loan
            </Link>
          </div>

          {/* Financial Planning */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform-gpu">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Financial Planning</h2>
            <p className="text-gray-700 mb-4">
              Plan your financial journey with our tools. We provide tools and resources to help you plan your financial journey.
            </p>
            <Link href="/dashboard" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Explore Tools
            </Link>
          </div>
        </div>

        <div className="text-center mt-16 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">How It Works</h1>
          <p className="text-lg text-gray-600 mb-6">Simple steps to start using our services</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {/* Step 1 */}
          <div className="bg-blue-50 p-6 text-center rounded-lg">
            <div className="w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Register</h2>
            <p className="text-gray-700">Create an account with a one-time registration fee of Ksh 100.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-50 p-6 text-center rounded-lg">
            <div className="w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Save</h2>
            <p className="text-gray-700">Make regular weekly deposits to build your savings.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-blue-50 p-6 text-center rounded-lg">
            <div className="w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Apply for Loans</h2>
            <p className="text-gray-700">Once you have savings, apply for loans up to 45% of your total savings.</p>
          </div>
        </div>

        <footer className="border-t border-gray-200 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Management System</h3>
              <p className="text-gray-600">Helping you manage your finances since 2025</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">About Us</h4>
                <ul className="space-y-2">
                  <li><Link href="/aboutPage" className="text-gray-600 hover:text-blue-600">Our Story</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/savings" className="text-gray-600 hover:text-blue-600">Savings</Link></li>
                  <li><Link href="/loans" className="text-gray-600 hover:text-blue-600">Loans</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact</h4>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2025 Loan Management System. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}