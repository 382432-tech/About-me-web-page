import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Database, ArrowRight, RefreshCw } from 'lucide-react';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onSubmissionSuccess?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  onNavigate,
  onSubmissionSuccess 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'Class Project Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
    details?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill in your name, email, and message.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: 'success',
          text: 'Message successfully saved to persistent JSON storage!',
          details: `Stored ID: ${data.submission.id} in /data/submissions.json`,
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          category: 'Class Project Inquiry',
          message: '',
        });
        if (onSubmissionSuccess) {
          onSubmissionSuccess();
        }
      } else {
        setStatusMessage({
          type: 'error',
          text: data.error || 'Failed to save message to server.',
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: 'Could not connect to the backend server. Please check that server.ts is running.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Page 5 • Contact & Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Use the assignment contact form below. Submissions are processed by the server-side API and saved directly to the project's persistent JSON database file.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-5 shadow-xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-sm font-bold text-white">Send a Message to Subhan</span>
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                JSON Storage Connected
              </span>
            </div>

            {/* Status Alert Banner */}
            {statusMessage && (
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  statusMessage.type === 'success'
                    ? 'bg-blue-950/40 border-blue-500/40 text-blue-200'
                    : 'bg-red-950/40 border-red-500/40 text-red-200'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1 text-xs">
                  <p className="font-semibold text-sm">{statusMessage.text}</p>
                  {statusMessage.details && (
                    <p className="font-mono text-[11px] opacity-80">{statusMessage.details}</p>
                  )}
                  {statusMessage.type === 'success' && (
                    <button
                      type="button"
                      onClick={() => onNavigate('admin')}
                      className="inline-flex items-center gap-1 mt-2 text-blue-300 hover:text-white font-semibold underline"
                    >
                      <span>View in Admin Dashboard</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Field: Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-300">
                Full Name <span className="text-blue-400">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. John Doe / Instructor"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors"
              />
            </div>

            {/* Field: Email */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-300">
                Email Address <span className="text-blue-400">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. name@school.edu"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors"
              />
            </div>

            {/* Field: Category Dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="contact-category" className="block text-xs font-semibold text-neutral-300">
                Inquiry Category
              </label>
              <select
                id="contact-category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors"
              >
                <option value="Class Project Inquiry">Class Project Inquiry</option>
                <option value="Teacher / Grading Review">Teacher / Grading Review</option>
                <option value="Student Collaboration">Student Collaboration</option>
                <option value="General Feedback">General Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Field: Subject Line */}
            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-neutral-300">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief summary of your message"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors"
              />
            </div>

            {/* Field: Message Textarea */}
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-300">
                Message <span className="text-blue-400">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your note or question here..."
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Saving to JSON File...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Info: How Persistent JSON Storage Works for High School Class */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Database className="w-4 h-4 text-blue-400" />
              <span>Backend Architecture</span>
            </div>

            <div className="space-y-3 text-xs text-neutral-400 leading-relaxed">
              <p>
                When you click <strong className="text-neutral-200">Submit Message</strong>, the browser issues a standard HTTP <code className="text-blue-400">POST</code> request to the Node.js Express server.
              </p>
              <p>
                The server receives the data, formats a unique entry with timestamp, and writes it directly to <code className="text-blue-300">data/submissions.json</code> using Node's File System (<code className="text-blue-300">fs</code>) library.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-[11px] text-neutral-400 space-y-1">
              <div className="text-blue-400 font-semibold">// Storage Target:</div>
              <div>File: /data/submissions.json</div>
              <div>Format: UTF-8 Formatted JSON Array</div>
              <div>Mode: Server Persistent Write</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
            <h4 className="text-sm font-bold text-white">Admin Quick Link</h4>
            <p className="text-xs text-neutral-400">
              Submitted messages can be reviewed, marked as read, or deleted in the teacher & student Admin Dashboard.
            </p>
            <button
              onClick={() => onNavigate('admin')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Open Admin Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
