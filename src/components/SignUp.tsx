import React from 'react';

export const SignUp: React.FC<{ onSignIn: () => void }> = ({ onSignIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-amber-700 mb-6">Sign Up</h2>
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded mb-3 hover:bg-red-600 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 5.1 28.1 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 19.5-7.6 21-17.5.1-.7.1-1.3.1-2 0-1.3-.1-2.6-.3-3.5z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 5.1 28.1 3 24 3c-6.6 0-12 5.4-12 12 0 2.1.5 4.1 1.3 5.7z"/><path fill="#FBBC05" d="M24 45c5.8 0 10.7-2.1 14.3-5.7l-6.6-5.4C29.7 35.1 27 36 24 36c-5.8 0-10.7-3.9-12.3-9.1l-7 5.4C7.5 41.9 15.1 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.2 5.5-7.7 5.5-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c2.1 0 4 .8 5.5 2.1l6.4-6.4C33.5 5.1 28.1 3 24 3c-6.6 0-12 5.4-12 12s5.4 12 12 12c2.7 0 5.2-.9 7.2-2.5l6.4 6.4C33.5 42.9 28.1 45 24 45z"/></g></svg>
          Sign up with Google
        </button>
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded mb-3 hover:bg-blue-700 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M21.805 10.023h-9.82v3.953h5.625c-.242 1.242-1.484 3.648-5.625 3.648-3.375 0-6.125-2.789-6.125-6.188s2.75-6.188 6.125-6.188c1.922 0 3.211.82 3.953 1.523l2.703-2.625C17.07 2.57 15.211 1.5 12.984 1.5 7.523 1.5 3 6.023 3 11.484s4.523 9.984 9.984 9.984c5.742 0 9.516-4.031 9.516-9.719 0-.656-.07-1.148-.195-1.727z"/></svg>
          Sign up with Microsoft
        </button>
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-2 text-gray-400 text-xs">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors font-semibold">Sign Up</button>
        </form>
        <div className="flex justify-center mt-4 text-sm">
          <button className="text-amber-600 hover:underline" onClick={onSignIn}>Already have an account? Sign in</button>
        </div>
      </div>
    </div>
  );
}; 