import React from "react"



const ContactForm = () => {
  return (

    <form className="mb-6">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">Your Name</label>
        <input className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" placeholder="Your name" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">Your Email</label>
        <input className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email address" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="subject">Subject</label>
        <input className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="subject" placeholder="If we need to call you" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="textarea">Message</label>
        <textarea className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" rows="6" name="textarea"></textarea>
      </div>
      <div className="mb-4">
        <button type="submit" className="btn btn-primary">Send message</button>
      </div>
    </form>
  )
}

export default ContactForm
