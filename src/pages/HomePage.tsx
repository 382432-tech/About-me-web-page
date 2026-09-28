import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  Image as ImageIcon, 
  Heart, 
  Plane, 
  Stethoscope,
  UploadCloud,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink,
  Instagram,
  Github,
  Linkedin,
  FileCode,
  BookOpen
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Contact Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: 'Comment',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<{ id: string; submittedAt: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ahmadshirza1i1@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Front-end Validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill out all required fields before submitting.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setFormStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          reason: formData.reason,
          message: formData.message.trim()
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Submission failed' }));
        throw new Error(errorData.error || `Server returned error status ${response.status}`);
      }

      const result = await response.json();
      setFormStatus('success');
      setStatusMessage('Thank you! Your message has been sent to Ahmad Shirzai and logged successfully.');
      setSubmittedData({
        id: result.id || 'N/A',
        submittedAt: result.submittedAt || new Date().toISOString()
      });

      // Clear the form after a successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        reason: 'Comment',
        message: ''
      });
    } catch (err: unknown) {
      console.error('Contact form submission error:', err);
      setFormStatus('error');
      setStatusMessage(err instanceof Error ? err.message : 'Failed to connect to the server. Please check your connection and try again.');
    }
  };

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 pb-8 overflow-hidden">
        {/* Ambient glow behind hero */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-9 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Phase 1: Home Page & Student Profile
            </div>

            {/* Student's full name as the H1 */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Ahmad Shirzai
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 font-medium">
                High School Student & Aspiring Medical Doctor (M.D.)
              </p>
            </div>

            {/* Biography Section - Exactly 3 <p> tags */}
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-2 mb-3">
                <span className="font-semibold text-neutral-300">Student Biography</span>
                <span className="text-blue-400">Personal & Academic Profile</span>
              </div>
              
              {/* Paragraph 1 */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Welcome to my high school web development portfolio. My name is Ahmad Shirzai, and I am a dedicated student pursuing a comprehensive curriculum in scientific studies, digital communications, and programming. This website serves as an interactive demonstration of my academic projects, critical thinking, and technical abilities across multiple modules.
              </p>
              
              {/* Paragraph 2 */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Outside of academics, I have a deep passion for competitive volleyball, rigorous physical fitness, and discovering global perspectives through international travel. My ultimate lifelong ambition is to enter the medical field and become a practicing Medical Doctor, combining diagnostic precision with empathetic bedside care to improve patient lives.
              </p>
              
              {/* Paragraph 3 */}
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Please navigate through the project phases below to view my multimedia gallery, personal hobbies, travel journal, and long-term 5-year pathway toward medical school admission.
              </p>
            </div>

            {/* Navigation Buttons to other phases */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onNavigate('media')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95 cursor-pointer"
              >
                <span>Phase 2: Media Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('hobbies')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-medium text-sm transition-all cursor-pointer"
              >
                <span>Phase 3: Hobbies</span>
              </button>

              <button
                onClick={() => onNavigate('traveling')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-medium text-sm transition-all cursor-pointer"
              >
                <span>Phase 4: Traveling</span>
              </button>

              <button
                onClick={() => onNavigate('future')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-medium text-sm transition-all cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-teal-400" />
                <span>Phase 7: Future Doctor</span>
              </button>
            </div>

            {/* Course Information Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                Student: <span className="text-neutral-200 font-semibold">Ahmad Shirzai</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                School: <span className="text-neutral-200">High School Coursework</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                Course: <span className="text-neutral-200">Web Development</span>
              </span>
            </div>
          </div>

          {/* Above-the-fold Media Column: Extra Compact Profile Image */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center space-y-2.5">
            {/* Primary Profile Photo (Extra Small / Petite Size) */}
            <div className="w-[120px] sm:w-[135px] p-1.5 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-lg space-y-1.5">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/90 flex items-center justify-center group">
                <img 
                  src="/images/profile.png" 
                  alt="Ahmad Shirzai's Profile Portrait" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('.png')) {
                      target.src = '/images/profile.jpg';
                    } else if (target.src.endsWith('.jpg')) {
                      target.src = '/images/profile-480.jpg';
                    } else {
                      target.style.display = 'none';
                      const fallbackEl = document.getElementById('profile-placeholder-box');
                      if (fallbackEl) fallbackEl.style.display = 'flex';
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
                
                <div 
                  id="profile-placeholder-box" 
                  className="hidden absolute inset-0 flex-col items-center justify-center p-2 text-center bg-neutral-900"
                >
                  <UploadCloud className="w-5 h-5 text-blue-400 mb-1 animate-pulse" />
                  <span className="text-[10px] font-bold text-white">
                    Ahmad
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between pointer-events-none">
                  <span className="px-1.5 py-0.5 rounded-full bg-blue-600/90 backdrop-blur-md text-[8px] font-semibold text-white">
                    Ahmad
                  </span>
                  <span className="text-[8px] font-mono text-neutral-300 bg-neutral-950/80 px-1 rounded border border-neutral-800">
                    Portrait
                  </span>
                </div>
              </div>

              <div className="py-0.5 px-1 rounded-md bg-neutral-900/60 border border-neutral-800/80 text-center">
                <span className="text-[9px] font-mono text-neutral-400">
                  <code className="text-blue-400 font-semibold">profile.png</code>
                </span>
              </div>
            </div>

            {/* Media Item #2: Compact Coursework & Workspace */}
            <div className="w-[120px] sm:w-[135px] p-1.5 rounded-xl bg-neutral-950 border border-neutral-800 shadow-md">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800/80 group">
                <img 
                  src="/images/project-notebook.jpg" 
                  alt="Ahmad Shirzai's Study Workspace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onError={(e) => { e.currentTarget.src = '/images/project-process.jpg'; }}
                />
              </div>
              <p className="text-[9px] text-neutral-400 font-mono pt-1 text-center truncate">
                Media #2: Workspace
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section: Social Media & Direct Email Links */}
      <section id="contact-info" className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800/90 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="space-y-6">
          <div className="border-b border-neutral-800/80 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Connect With Ahmad Shirzai
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Reach out for academic collaborations, mentorship, or questions about my web development portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-blue-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Direct Email</h3>
                <p className="text-xs text-neutral-400 mt-1 font-mono break-all">
                  ahmadshirza1i1@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 mt-2 border-t border-neutral-800">
                <a 
                  href="mailto:ahmadshirza1i1@gmail.com" 
                  className="flex-1 py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium text-center transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Send Email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="py-1.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors inline-flex items-center gap-1 cursor-pointer"
                  title="Copy email address"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Link: Instagram */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-rose-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3">
                  <Instagram className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Instagram & Reels</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Volleyball matches, athletic training reels, and student highlights.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-neutral-800">
                <a 
                  href="https://www.instagram.com/reel/DblxbWghsYm/?utm_source=ig_web_button_share_sheet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium text-center transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>View Instagram Reel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Link: Student Portfolio & Code */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                  <FileCode className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Coursework & Code</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  High school web development modules, HTML/CSS/JS applications, and server APIs.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-neutral-800">
                <button 
                  onClick={() => onNavigate('media')}
                  className="w-full py-1.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium text-center transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Media Assets</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form Section */}
      <section id="contact-form" className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl relative">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
              Message Ahmad Directly
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Send a Message
            </h2>
            <p className="text-sm text-neutral-400 max-w-lg mx-auto">
              Have feedback, a partnership proposal, or a question? Fill in the details below to submit a message to Ahmad Shirzai.
            </p>
          </div>

          {/* Submission Alerts */}
          {formStatus === 'success' && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm space-y-1.5">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Message Received Successfully!</span>
              </div>
              <p className="text-xs text-emerald-400/90">{statusMessage}</p>
              {submittedData && (
                <div className="text-[11px] font-mono text-emerald-400/80 pt-1 border-t border-emerald-500/20 flex flex-wrap gap-x-4">
                  <span>Record ID: <strong>{submittedData.id}</strong></span>
                  <span>Timestamp: {new Date(submittedData.submittedAt).toLocaleString()}</span>
                </div>
              )}
            </div>
          )}

          {formStatus === 'error' && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-rose-200">Unable to send message</p>
                <p className="text-xs text-rose-400/90">{statusMessage}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="space-y-1.5">
                <label htmlFor="firstName" className="block text-xs font-mono text-neutral-300">
                  First Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="e.g. Jamie"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-1.5">
                <label htmlFor="lastName" className="block text-xs font-mono text-neutral-300">
                  Last Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="e.g. Smith"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-mono text-neutral-300">
                  Email Address <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Reason for Contact */}
              <div className="space-y-1.5">
                <label htmlFor="reason" className="block text-xs font-mono text-neutral-300">
                  Reason for Contact <span className="text-blue-400">*</span>
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                >
                  <option value="Comment">Comment</option>
                  <option value="Question">Question</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Opportunity">Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Message Body */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-mono text-neutral-300">
                Message <span className="text-blue-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-neutral-400 font-mono">
                Stored in server App Storage (<code className="text-blue-400">contactReceived.json</code>)
              </p>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 active:scale-95 cursor-pointer"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Course Website Architecture Cards */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-800/80 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Site Navigation & Structure
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Project Pages & Modules
            </h2>
          </div>
          <p className="text-xs text-neutral-400">
            Click any section below to test client-side navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Media */}
          <div 
            onClick={() => onNavigate('media')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 2: Media
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Interactive multimedia showcase for photos, design graphics, and coursework video presentations.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-xs font-mono text-blue-400">
              <span>View Phase 2</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Hobbies */}
          <div 
            onClick={() => onNavigate('hobbies')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 3: Hobbies
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Personal interests, creative hobbies, volleyball training, and extracurricular activities.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-xs font-mono text-rose-400">
              <span>View Phase 3</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Traveling */}
          <div 
            onClick={() => onNavigate('traveling')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 4: Traveling
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Places visited, bucket list destinations, cultural experiences, and travel photo journals.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-xs font-mono text-emerald-400">
              <span>View Phase 4</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Future */}
          <div 
            onClick={() => onNavigate('future')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 7: Future (Doctor)
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Long-term aspiration of becoming a medical doctor, university pre-med pathway, clinical hospital training, and healthcare vision.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-xs font-mono text-teal-400">
              <span>Explore Doctor Vision</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
