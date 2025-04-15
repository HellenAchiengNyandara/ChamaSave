'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Head>
          <title>Loan Management System</title>
          <meta name="description" content="Manage your savings and loans effectively" />
        </Head>

        <nav className="bg-white shadow-md py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="text-xl font-bold text-blue-600">Loan System</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/aboutUs" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
            </div>

            {/* Auth Links */}
            <div className="hidden md:flex space-x-6">
              <Link href="/SignIn" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
              <Link href="/New" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
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
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
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
      </div>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              Learn more about our mission and vision
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">OUR STORY</h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">A Better Way to Save and Access Loans</h3>
            <p className="text-gray-700 mb-6">
              We started with a simple mission: to provide accessible financial services to our community.
            </p>
            <p className="text-gray-700">
              Our platform was created to help individuals and small businesses manage their savings and access loans easily. 
              We believe in financial inclusion and empowering our members to achieve their financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* ... (keep all your existing footer code) ... */}
    </div>
 

  );
};

export default AboutUs;
