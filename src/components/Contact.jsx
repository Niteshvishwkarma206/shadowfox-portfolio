import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, AlertCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'ready-to-send' | null

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
        return '';
      case 'subject':
        if (!value.trim()) return 'Subject is required.';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters long.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    return isValid;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyMessage = () => {
    const fullText = `From: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) {
      return;
    }

    setSubmissionStatus('ready-to-send');

    // Genuine mailto trigger without spoofing an HTTP backend
    const subjectEncoded = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Nitesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${profileData.links.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>04 // Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in touch for internships & software roles.
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project idea, an internship opportunity, or wish to discuss software engineering? Reach out directly via the validated form or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0c111c] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Direct Communication
                </h3>
                <p className="text-xs text-slate-400">
                  Feel free to send an email directly or connect on GitHub.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-[#101625] border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Official Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-medium text-slate-200 select-all font-mono">
                    {profileData.links.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] text-emerald-400 block font-mono">
                    ✓ Email address copied to clipboard!
                  </span>
                )}
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-xl bg-[#101625] border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  GitHub Profile
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-medium text-slate-200 font-mono">
                    Niteshvishwkarma206
                  </span>
                  <a
                    href={profileData.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                    title="Open GitHub"
                    aria-label="Open GitHub Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{profileData.links.location} • Sagar Institute of Science and Technology</span>
              </div>
            </div>

            {/* Note on Transparency */}
            <div className="p-4 rounded-xl bg-[#090e18] border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-300 block mb-1">Honest Communication:</strong>
              This static portfolio generates a direct, pre-formatted email link via your mail client or lets you copy your drafted message instantly with zero data retention or fake backend simulation.
            </div>
          </div>

          {/* Validated Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c111c] border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Send a Direct Message</h3>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] text-sm text-white placeholder-slate-500 border transition-colors focus:outline-none focus:ring-1 ${
                        touched.name && errors.name
                          ? 'border-red-500/80 focus:ring-red-500'
                          : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] text-sm text-white placeholder-slate-500 border transition-colors focus:outline-none focus:ring-1 ${
                        touched.email && errors.email
                          ? 'border-red-500/80 focus:ring-red-500'
                          : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Internship opportunity / Project collaboration"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] text-sm text-white placeholder-slate-500 border transition-colors focus:outline-none focus:ring-1 ${
                      touched.subject && errors.subject
                        ? 'border-red-500/80 focus:ring-red-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-400">
                      {formData.message.length} chars (min 10)
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Hello Nitesh, we came across your portfolio and would like to discuss..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] text-sm text-white placeholder-slate-500 border transition-colors focus:outline-none focus:ring-1 resize-y ${
                      touched.message && errors.message
                        ? 'border-red-500/80 focus:ring-red-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit and Helper Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-900/20 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    disabled={!formData.name || !formData.email || !formData.message}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {copiedPayload ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedPayload ? 'Copied Message!' : 'Copy Drafted Message'}</span>
                  </button>
                </div>

                {submissionStatus === 'ready-to-send' && (
                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 mt-3 space-y-1 animate-in fade-in">
                    <div className="font-semibold text-white flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      Opening your default email application...
                    </div>
                    <p className="text-slate-300">
                      If your mail application does not open automatically, you can use the "Copy Drafted Message" button above and email directly to <span className="font-mono text-blue-300">{profileData.links.email}</span>.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
