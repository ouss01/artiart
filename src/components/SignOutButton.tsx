import React from 'react';

export const SignOutButton: React.FC<{ onSignOut: () => void }> = ({ onSignOut }) => (
  <button
    onClick={onSignOut}
    className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors font-semibold"
  >
    Sign Out
  </button>
); 