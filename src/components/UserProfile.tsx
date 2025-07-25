import React, { useRef, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export const UserProfile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [productImages, setProductImages] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const profileInputRef = useRef<HTMLInputElement>(null);
  const productInputRef = useRef<HTMLInputElement>(null);

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfileImage(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleProductImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (ev) => setProductImages(prev => [...prev, ev.target?.result as string]);
        reader.readAsDataURL(file);
      });
    }
  };

  const removeProductImage = (idx: number) => {
    setProductImages(images => images.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-amber-700 mb-6">My Profile</h2>
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 mb-4">
            <img
              src={profileImage || 'https://ui-avatars.com/api/?name=User&background=F59E42&color=fff'}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <button
              className="absolute bottom-0 right-0 bg-amber-600 text-white p-2 rounded-full shadow hover:bg-amber-700 transition-colors"
              onClick={() => profileInputRef.current?.click()}
              title="Change profile picture"
            >
              <Plus className="w-5 h-5" />
            </button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={profileInputRef}
              onChange={handleProfileImageChange}
            />
          </div>
          <input
            type="text"
            className="text-xl font-semibold text-center border-b border-gray-200 focus:outline-none focus:border-amber-500 mb-2"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea
            className="w-full mt-2 border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Tell us about yourself..."
            value={bio}
            onChange={e => setBio(e.target.value)}
            rows={3}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">My Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {productImages.map((img, idx) => (
              <div key={idx} className="relative group">
                <img src={img} alt={`Product ${idx + 1}`} className="w-full h-28 object-cover rounded-lg border" />
                <button
                  className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeProductImage(idx)}
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              className="flex flex-col items-center justify-center border-2 border-dashed border-amber-400 rounded-lg h-28 text-amber-600 hover:bg-amber-50 transition-colors"
              onClick={() => productInputRef.current?.click()}
              type="button"
            >
              <Plus className="w-6 h-6 mb-1" />
              <span className="text-xs">Add Product</span>
            </button>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              ref={productInputRef}
              onChange={handleProductImagesChange}
            />
          </div>
        </div>
        <button className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors font-semibold mt-6">Save Changes</button>
      </div>
    </div>
  );
}; 