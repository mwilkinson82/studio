'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppLogo } from '@/components/core/AppLogo'; // Assuming you want your app logo

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // TODO: Replace with actual authentication logic (e.g., Firebase, NextAuth)
    console.log('Login attempt with:', { email, password });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example: Hardcoded login for demonstration
    if (email === 'user@example.com' && password === 'password') {
      // On successful login, redirect to the hub or intended page
      // You'll need to set up session/token management here
      router.push('/hub'); 
    } else {
      setError('Invalid email or password. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-neutral-800 shadow-2xl rounded-xl p-8 sm:p-10">
          <div className="flex flex-col items-center mb-8">
            <AppLogo className="h-16 w-16 text-sky-600 mb-4" /> 
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Welcome Back</h1>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">Sign in to access your A|P Advisory Platform.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="appearance-none block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm disabled:opacity-50 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="appearance-none block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm disabled:opacity-50 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50"
                />
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 transition-colors"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Don't have an account?{' '}
              {/* TODO: Link to a registration page or contact method */}
              <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
