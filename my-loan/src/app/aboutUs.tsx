'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us | Loan Management System</title>
        <meta name="description" content="Learn about our mission to provide accessible financial services" />
      </Head>

      <nav className="bg-white shadow-md py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-xl font-bold text-blue-600">Loan System</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/aboutUs" className="text-blue-600 font-medium">About Us</Link>
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

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              className="block text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="pt-2 border-t border-gray-200 space-y-4">
              <Link
                href="/SignIn"
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/New"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn more about our mission and vision
            </p>
          </div>

          <div className=" text-center max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">OUR STORY</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-8">A Better Way to Save and Access Loans</h3>
            
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">How We Help</h4>
                <p className="text-lg text-gray-700 mb-4">
                  Our technology simplifies the loan application process while maintaining the highest security standards.
                  Get approved quickly with our automated systems.
                </p>
                <p className="text-lg text-gray-700">
                  We offer competitive interest rates and flexible repayment options tailored to your needs.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Community</h4>
                <p className="text-lg text-gray-700 mb-4">
                  We&apos;re proud to serve thousands of customers who trust us with their financial needs.
                  Our customer satisfaction rate speaks for itself.
                </p>
                <p className="text-lg text-gray-700">
                  Join our growing community and experience financial services that truly put you first.
                </p>
              </div>
            </div>

            {/* Full-width CTA section */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Ready to get started?</h4>
              <Link 
                href="/New" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-lg font-medium"
              >
                Join Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Loan System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;