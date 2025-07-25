import React from 'react';

export const ForgotPassword: React.FC<{ onSignIn: () => void }> = ({ onSignIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-amber-700 mb-6">Forgot Password</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="you@email.com" />
          </div>
          <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors font-semibold">Send Reset Link</button>
        </form>
        <div className="flex justify-center mt-4 text-sm">
          <button className="text-amber-600 hover:underline" onClick={onSignIn}>Back to Sign In</button>
        </div>
      </div>
    </div>
  );
}; 