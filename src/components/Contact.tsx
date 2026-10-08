import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subjectType, setSubjectType] = useState('Full-Time Backend Opportunity');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      onShowToast(`Copied ${text} to clipboard!`);
    });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectType} - from ${senderName || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hello Mohamed,\n\n${message || 'I came across your backend developer portfolio and would like to connect regarding an opportunity.'}\n\nSender Contact:\nName: ${senderName || 'Not provided'}\nEmail: ${senderEmail || 'Not provided'}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Direct Contact</div>
          <h2 className="section-title">Let’s Build Something Reliable</h2>
          <p className="section-desc">
            Open to full-time backend software engineering opportunities, architectural discussions, and technical collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Details */}
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              Direct Channels
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Feel free to reach out directly via email or phone. I actively respond to technical inquiries and recruiter correspondence.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Email */}
              <div className="contact-item">
                <div className="contact-item-left">
                  <div className="contact-icon-box">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="contact-item-label">Email Address</span>
                    <div className="contact-item-val">{personalInfo.email}</div>
                  </div>
                </div>

                <button
                  className="btn-copy-chip"
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  title="Copy email to clipboard"
                  id="copy-email-btn"
                >
                  {copiedEmail ? <Check size={13} color="var(--emerald)" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-item-left">
                  <div className="contact-icon-box">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="contact-item-label">Phone / WhatsApp</span>
                    <div className="contact-item-val">{personalInfo.phone}</div>
                  </div>
                </div>

                <button
                  className="btn-copy-chip"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  title="Copy phone to clipboard"
                  id="copy-phone-btn"
                >
                  {copiedPhone ? <Check size={13} color="var(--emerald)" /> : <Copy size={13} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-item-left">
                  <div className="contact-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="contact-item-label">Location</span>
                    <div className="contact-item-val">{personalInfo.location}</div>
                  </div>
                </div>
                <span className="badge badge-accent">UTC+2</span>
              </div>
            </div>

            {/* Social / Profiles */}
            <div className="contact-socials-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1 }}
                id="contact-github-link"
              >
                <Github size={16} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1 }}
                id="contact-linkedin-link"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Message Composer Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Compose Direct Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '24px' }}>
              Draft a note and launch your preferred email client with pre-filled details.
            </p>

            <form onSubmit={handleSendEmail}>
              <div className="form-group">
                <label className="form-label" htmlFor="inquiry-type">
                  Inquiry Topic
                </label>
                <select
                  id="inquiry-type"
                  className="form-select"
                  value={subjectType}
                  onChange={(e) => setSubjectType(e.target.value)}
                >
                  <option value="Full-Time Backend Opportunity">Full-Time Backend Engineering Opportunity</option>
                  <option value="Contract / Backend Architecture">Contract / Backend Architecture Project</option>
                  <option value="Technical Collaboration">Technical Collaboration / Discussion</option>
                  <option value="General Question">General Inquiry</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="sender-name">
                    Your Name
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Alex (Engineering Manager)"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="sender-email">
                    Your Email
                  </label>
                  <input
                    id="sender-email"
                    type="email"
                    className="form-input"
                    placeholder="e.g. recruiter@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message-body">
                  Message Details
                </label>
                <textarea
                  id="message-body"
                  className="form-textarea"
                  placeholder="Outline the role, tech stack, or engineering project requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
                id="submit-contact-form"
              >
                <Send size={15} />
                <span>Send via Email Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
