import React, { useState } from 'react';

export const ContactUs: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-amber-700 mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">Have a question or need help? Fill out the form below and our team will get back to you soon.</p>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold py-8">Thank you for reaching out! We will reply soon.</div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" rows={4} required />
            <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors font-semibold">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}; 