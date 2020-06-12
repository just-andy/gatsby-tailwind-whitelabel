import React from "react"
import { Formik, useField, Form } from 'formik'
import * as Yup from "yup";


const CustomInputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">
        {label}
        <input className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="text-accent-700 text-warning">{meta.error}</div>
      ) : null}
    </div>
  );
};

const CustomTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">
        {label}
        <textarea rows="8" className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="text-accent-700 text-warning">{meta.error}</div>
      ) : null}
    </div>
  );
};

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
    validationSchema={Yup.object({
      name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(15, "Must be 15 characters")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      subject: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(15, "Must be 15 characters")
        .required("Required"),
      message: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(15, "Must be 15 characters")
        .required("Required")
    })}
    onSubmit={
      (values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values })
        })
        .then(() => {
          actions.resetForm()
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false))
      }
    }
  >

     <Form name="contact" method="post" action="/success" data-netlify={true} data-netlify-honeypot="bot-field">
     <CustomInputField name="name" type="text" label="Name" />
     <CustomInputField name="email" type="email" label="Email" />
     <CustomInputField name="subject" type="text" label="Subject" />
     <CustomTextarea name="message" type="textarea" label="Message" />
     <button type="submit" className="btn btn-primary">
       Submit
     </button>
     <CustomInputField name="form-name" value="contact" type="hidden" />
   </Form>
  
  </Formik>
  )
}

export default ContactForm
