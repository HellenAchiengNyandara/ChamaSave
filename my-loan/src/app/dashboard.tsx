import Link from 'next/link';

const Dashboard = () => {
  // Static user data for UI demonstration
  const user = {
    name: "Hellena Akumu",
    email: "hellena@example.com"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Loan System</h1>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            <Link href="/loans" className="text-gray-700 hover:text-blue-600">Loans</Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {user.name}</span>
            <button className="text-gray-700 hover:text-blue-600">Logout</button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <p className="text-lg text-gray-600 mb-8">Welcome back, {user.name}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Savings Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Savings</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">Ksh 0</p>
            <Link href="/deposit" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Make a Deposit
            </Link>
          </div>

          {/* Loan Eligibility Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Loan Eligibility</h3>
            <p className="text-3xl font-bold text-blue-600 mb-1">Ksh 0</p>
            <p className="text-gray-500 mb-4">45% of your savings</p>
            <Link href="/apply-loan" className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              Apply for Loan
            </Link>
          </div>

          {/* Weekly Deposit Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Weekly Deposit</h3>
            <p className="text-gray-500 mb-4">No deposits yet</p>
            <Link href="/deposit" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Make Deposit
            </Link>
          </div>

          {/* Quick Links Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link href="/deposits" className="block w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition">
                View Deposits
              </Link>
              <Link href="/loans" className="block w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition">
                View Loans
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
            <Link href="/activity" className="text-blue-600 hover:underline">View All</Link>
          </div>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="text-gray-500">No recent activity</p>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="flex justify-around py-3">
          <Link href="/dashboard" className="flex flex-col items-center text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/deposits" className="flex flex-col items-center text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Deposits</span>
          </Link>
          <Link href="/loans" className="flex flex-col items-center text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Loans</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;