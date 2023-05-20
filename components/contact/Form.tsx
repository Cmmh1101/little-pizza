import React from 'react'

type Props = {}

const Form = (props: Props) => {
    return (
        <form name="contact" method="POST" className='text-black p-3' >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="yourname" className='text-white'>
              Your Name:
            </label> <br />
            <input className='w-full mx-auto px-3' type="text" name="name" id="yourname" placeholder='Full name' />
          </p>
          <p>
            <label htmlFor="youremail" className='text-white'>
              Your Email:
            </label> <br />
            <input type="email" name="email" id="youremail" className='w-full mx-auto px-3' placeholder='Email' />
          </p>
          <p>
            <label htmlFor="yourmessage">
              Message:
            </label> <br />
            <textarea className='w-full mx-auto px-3' name="message" id="yourmessage" placeholder='Message'></textarea>
          </p>
            <button type="submit" className='text-white border px-3 rounded-md'>Send</button>
        </form>
      )
}

export default Form