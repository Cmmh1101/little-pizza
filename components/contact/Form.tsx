import React from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Form() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Netlify needs "form-name"
    if (!fd.get('form-name')) fd.set('form-name', 'contact');

    // honeypot guard
    if ((fd.get('bot-field') as string)?.length) {
      setStatus('success'); // silently ignore bots
      form.reset();
      return;
    }

    // URL-encode form body
    const body = new URLSearchParams(
      Array.from(fd.entries()) as [string, string][]
    ).toString();

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setError(err?.message || 'Submission failed');
    }
  }

  return (
    <form name="contact" onSubmit={onSubmit} className="text-black md:pl-0 md:pr-3 text-start">
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot (hidden) */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <p>
        <label htmlFor="yourname" aria-required className="text-white text-start">Your Name:</label><br />
        <input className="w-full mx-auto px-3" type="text" name="name" id="yourname" placeholder="Full name" required />
      </p>

      <p>
        <label htmlFor="youremail" aria-required className="text-white text-start">Your Email:</label><br />
        <input className="w-full mx-auto px-3" type="email" name="email" id="youremail" placeholder="Email" required />
      </p>

      <p>
        <label
          htmlFor="yourmessage"
          className="text-white"
          aria-required
        >Message:</label><br />
        <textarea className="w-full mx-auto px-3" name="message" id="yourmessage" placeholder="Message" rows={2} required />
      </p>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center rounded-full text-white border disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send'}
      </button>

      {/* Inline feedback (accessible) */}
      <div role="status" aria-live="polite" className="min-h-[1.5rem]">
        {status === 'submitting' && <span>Submitting your message…</span>}
        {status === 'success' && <span className="text-green-300">Thanks! We got your message.</span>}
        {status === 'error' && <span className="text-red-300">Oops—{error}. Please try again.</span>}
      </div>
    </form>
  );
}