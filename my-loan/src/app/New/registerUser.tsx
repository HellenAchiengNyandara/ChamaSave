import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const RegisterUser = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Create Your Account</h1>
      
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">
              First Name
            </label>
            <Input 
              id="firstName" 
              type="text" 
              placeholder="John" 
              className="w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">
              Last Name
            </label>
            <Input 
              id="lastName" 
              type="text" 
              placeholder="Doe" 
              className="w-full"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+254 700 000000"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full"
            required
            minLength={8}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="w-full"
            required
          />
        </div>
        <label>Pay a one-time registration fee of 100 to Enjoy!</label>
        <Button type="submit" className="w-1/2 bg-green-600 hover:bg-blue-700">
          Pay
        </Button>
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 text-blue-600 rounded"
            required
          />
          
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            I agree to the Terms and Conditions
          </label>
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Register
        </Button>
        

      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="/SignIn" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterUser;