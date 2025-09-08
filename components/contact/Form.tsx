import React from 'react'

type Props = {}

const Form = (props: Props) => {
    return (
        <form name="contact" method="POST" className='text-black md:pl-0 md:pr-3' data-netlify="true" netlify-honeypot="bot-field" action="/success"
      acceptCharset="UTF-8">
        {/* Required for Netlify to map the submission to this form */}
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot (hidden anti-spam field) */}
        <p hidden>
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>
          <p>
            <label htmlFor="yourname" className='text-white'>
              Your Name:
            </label> <br />
          <input
            className='w-full mx-auto px-3' type="text"
            name="name"
            id="yourname"
            placeholder='Full name' />
          </p>
          <p>
            <label htmlFor="youremail" className='text-white'>
              Your Email:
            </label> <br />
          <input
            type="email"
            name="email"
            id="youremail"
            className='w-full mx-auto px-3' placeholder='Email' />
          </p>
          <p>
            <label htmlFor="yourmessage" className='text-white'>
              Message:
            </label> <br />
            <textarea className='w-full mx-auto px-3' name="message" id="yourmessage" placeholder='Message'></textarea>
          </p>
            <button type="submit" className='text-white border px-3 rounded-md mb-4'>Send</button>
        </form>
      )
}

export default Form