import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'

const ErrorText = ({children})=>{
  return (
    <div className="text-accent-700 text-warning">{children}</div>
  )
}

const ContactForm = () => {


const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

  return (
    <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
      subject: ''
    }}
    onSubmit={() => { console.log("submit!"); }}
    validator={() => ({})}
  >
  {({ isSubmitting }) => (
    <Form className="mb-6" name="contact-form" data-netlify={true}>
      <legend className="text-4">Enquiry Form</legend>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">Your Name</label>
        <Field className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="name" />
        <ErrorMessage component={ErrorText} name="name" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">Your Email</label>
        <Field className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="email" />
        <ErrorMessage component={ErrorText} name="email" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="subject">Subject</label>
        <Field className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="subject" />
        <ErrorMessage component={ErrorText} name="subject" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="textarea">Message</label>
        <Field className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" component="textarea" name="textarea" />
        <ErrorMessage component={ErrorText} name="textarea" />
      </div>
      <div className="mb-4">
        <button type="submit" disabled={isSubmitting} className="btn btn-primary">Send message</button>
      </div>
    </Form>
  )}
  </Formik>
  )
}

export default ContactForm
