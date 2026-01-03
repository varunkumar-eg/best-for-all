
import React, { useState } from 'react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto">
      <div className="md:w-1/3 bg-blue-600 p-8 md:p-12 text-white flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="text-blue-100 mb-8">
            Reach out to our experts for consultation and guidance.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-2 rounded-lg">📞</div>
              <span>+91 6289733426</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-2 rounded-lg">✉️</div>
              <span>info@egintech.in</span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 p-2 rounded-lg">📍</div>
              <span>Lokmath Bhawan, Ramdashpeth,<br/>Nagpur, Maharashtra.</span>
            </div>
          </div>
        </div>
        <div className="mt-12 text-blue-200 text-sm">
          <p className="font-semibold italic">"Excellent Growth Through Technology"</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="md:w-2/3 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="john@example.com"
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help?</label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
            placeholder="Tell us about your requirements..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`mt-8 w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
            status === 'success' 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98]'
          }`}
        >
          {status === 'idle' && 'Send Message'}
          {status === 'sending' && 'Sending...'}
          {status === 'success' && 'Message Sent!'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
