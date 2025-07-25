import React from 'react';

export const VerifyEmail: React.FC<{ onSignIn: () => void }> = ({ onSignIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-amber-700 mb-4">Verify Your Email</h2>
        <p className="mb-6 text-gray-700">We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.</p>
        <button className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors font-semibold mb-4">Resend Verification Email</button>
        <div className="text-sm">
          <button className="text-amber-600 hover:underline" onClick={onSignIn}>Back to Sign In</button>
        </div>
      </div>
    </div>
  );
}; 