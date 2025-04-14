import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Login = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Create Your Account</h1>
      
      <form className="space-y-4">

          
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
    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Login
            </Button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Don&apos;t  have an account?{' '}
        <a href="/New" className="text-blue-600 hover:underline">
          Sign UP 
        </a>
      </p>
    </div>
  );
};

export default Login;