import React from 'react';

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

const Form = () => {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (res.ok) {
      window.location.href = '/success'; // or show a toast
    } else {
      alert('Submission failed. Please try again.');
    }
  }

  return (
    <form name="contact" onSubmit={onSubmit} className="text-black md:pl-0 md:pr-3">
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <p>
        <label htmlFor="yourname" className="text-white">Your Name:</label><br />
        <input className="w-full mx-auto px-3" type="text" name="name" id="yourname" placeholder="Full name" required />
      </p>

      <p>
        <label htmlFor="youremail" className="text-white">Your Email:</label><br />
        <input className="w-full mx-auto px-3" type="email" name="email" id="youremail" placeholder="Email" required />
      </p>

      <p>
        <label htmlFor="yourmessage" className="text-white">Message:</label><br />
        <textarea className="w-full mx-auto px-3" name="message" id="yourmessage" placeholder="Message" rows={5} required />
      </p>

      <button type="submit" className="text-white border px-3 rounded-md mb-4">Send</button>
    </form>
  );
};

export default Form;