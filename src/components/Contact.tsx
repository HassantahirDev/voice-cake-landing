'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10 py-8">
      <h3 className="text-[22px] font-bold heading-font">{t('contact.title')}</h3>
      <form onSubmit={handleSubmit} className="mt-4 max-w-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-medium">{t('contact.form.full_name')}</span>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required 
              placeholder="John Doe"
              className="form-input w-full rounded-lg text-white border border-[#316862] bg-[#183431] h-14 placeholder:text-[#90cbc4] focus:outline-0 focus:ring-2 focus:ring-[#09ae9b]" 
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-medium">{t('contact.form.email')}</span>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="your@email.com"
              className="form-input w-full rounded-lg text-white border border-[#316862] bg-[#183431] h-14 placeholder:text-[#90cbc4] focus:outline-0 focus:ring-2 focus:ring-[#09ae9b]" 
            />
          </label>
        </div>
        <label className="flex flex-col gap-2">
                      <span className="font-medium">{t('contact.form.phone')}</span>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="form-input w-full rounded-lg text-white border border-[#316862] bg-[#183431] h-14 placeholder:text-[#90cbc4] focus:outline-0 focus:ring-2 focus:ring-[#09ae9b]" 
          />
        </label>
        <label className="flex flex-col gap-2">
                      <span className="font-medium">{t('contact.form.message')}</span>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required 
            placeholder="Tell us how we can help you..."
            rows={4}
            className="form-input w-full rounded-lg text-white border border-[#316862] bg-[#183431] placeholder:text-[#90cbc4] focus:outline-0 focus:ring-2 focus:ring-[#09ae9b] resize-none"
          />
        </label>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="btn-base btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : t('contact.form.send_message')}
        </button>
        {submitMessage && (
          <div className="mt-4 p-4 rounded-lg text-sm bg-[#09ae9b]/20 border border-[#09ae9b] text-[#09ae9b]">
            {submitMessage}
          </div>
        )}
      </form>
    </section>
  );
}
