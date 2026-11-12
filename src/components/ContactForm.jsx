import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from './Icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please enter your name and email address.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 lg:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="bg-surface-light rounded-card px-6 sm:px-10 lg:px-[38px] py-16 lg:py-[100px] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[40px] items-start">
            {/* Left Column: Headline, Direct Contacts & Brand Logo */}
            <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-[40px] items-start">
              {/* Title */}
              <h2 className="font-inter-tight font-medium text-[36px] sm:text-[42px] lg:text-[48px] text-black tracking-[-1.92px] leading-[1.05]">
                Have a Brand to Promote or an Event to Plan?
              </h2>

              {/* Contact Information List */}
              <div className="flex flex-col gap-5 items-start w-full">
                {/* Email Item */}
                <a
                  href="mailto:circle.advt@gmail.com"
                  className="flex items-center gap-3 group text-neutral-800 hover:text-black transition"
                >
                  <div className="w-[34px] h-[32px] bg-input-bg rounded flex items-center justify-center shrink-0 text-black">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <span className="font-inter-tight font-medium text-[11px] sm:text-[12px] text-black tracking-[2px] uppercase">
                    circle.advt@gmail.com
                  </span>
                </a>

                {/* Phone Item */}
                <a
                  href="tel:+919074443624"
                  className="flex items-center gap-3 group text-neutral-800 hover:text-black transition"
                >
                  <div className="w-[34px] h-[32px] bg-input-bg rounded-[5px] flex items-center justify-center shrink-0 text-black">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <span className="font-inter-tight font-medium text-[11px] sm:text-[12px] text-black tracking-[2px]">
                    +91 9074443624
                  </span>
                </a>

                {/* Address Item */}
                <div className="flex items-start gap-3">
                  <div className="w-[34px] h-[32px] bg-input-bg rounded flex items-center justify-center shrink-0 text-black mt-0.5">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <span className="font-inter-tight font-medium text-[11px] sm:text-[12px] text-black tracking-[2px] leading-relaxed max-w-[280px]">
                    2nd Floor, A M Complex, Mananchira, Kozhikode, Kerala 673001
                  </span>
                </div>
              </div>

              {/* Brand Logo Accent */}
              <div className="hidden lg:block pt-4">
                <img
                  src="/logotrans.png"
                  alt="CIRCLE Advertisers Logo"
                  className="w-[140px] sm:w-[160px] h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7 w-full">
              {submitted ? (
                <div className="bg-white rounded-card p-10 text-center flex flex-col items-center gap-4 border border-neutral-200">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-inter-tight font-medium text-2xl text-black">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="font-inter text-body-text max-w-md">
                    We have received your requirements. Dinesh KT and the CIRCLE
                    team will review your project and get back to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', budget: '', details: '' });
                    }}
                    className="mt-4 bg-black text-white px-6 py-3 rounded-button font-inter-tight font-medium text-sm hover:bg-neutral-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-[30px] w-full">
                  <div className="flex flex-col gap-3 w-full">
                    {/* First Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-[64px] bg-input-bg rounded-input px-5 font-inter text-[15px] text-black placeholder-input-text focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-[64px] bg-input-bg rounded-input px-5 font-inter text-[15px] text-black placeholder-input-text focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>

                    {/* Project Budget (Optional) */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Project budget (optional)"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full h-[64px] bg-input-bg rounded-input px-5 font-inter text-[15px] text-black placeholder-input-text focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Project Details Textarea */}
                    <div className="relative w-full">
                      <textarea
                        rows={4}
                        placeholder="Tell us about your project"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full min-h-[140px] bg-input-bg rounded-input p-5 font-inter text-[15px] text-black placeholder-input-text focus:outline-none focus:ring-2 focus:ring-black resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button (Exact 64px Height with Arrow) */}
                  <button
                    type="submit"
                    className="w-full h-[64px] bg-black hover:bg-neutral-800 text-white font-inter-tight font-medium text-[16px] rounded-button flex items-center justify-center gap-3 transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRightIcon className="w-[18px] h-[12px] text-white" />
                  </button>

                  {/* Privacy Statement */}
                  <p className="font-inter font-normal text-[12px] text-input-text text-left">
                    We’ll use your details only to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}