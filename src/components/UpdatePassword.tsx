import React from 'react';

export const UpdatePassword: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-amber-700 mb-6">Update Password</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Current Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">New Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Confirm New Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors font-semibold">Update Password</button>
        </form>
        <div className="flex justify-center mt-4 text-sm">
          <button className="text-amber-600 hover:underline" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}; 