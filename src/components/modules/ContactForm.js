import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const FieldWrapper = styled.div`
  ${tw`mb-4`}
`
const Label = styled.label`
  ${tw`block text-sm font-bold mb-2`}
`
const Input = styled.input`
  ${tw`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
`

const Textarea = styled.textarea`
  ${tw`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
`

const Button = styled.button`
  ${tw`bg-primary hover:bg-primary-dark text-white p-4 rounded`}
`

const ContactForm = () => {
  return (
    <form className="mb-6">
      <FieldWrapper>
        <Label for="name">Your Name</Label>
        <Input type="text" name="name" placeholder="Your Name" />
      </FieldWrapper>
      <FieldWrapper>
        <Label for="email">Your Email</Label>
        <Input type="email" name="email" placeholder="Your Name" />
      </FieldWrapper>
      <FieldWrapper>
        <Label for="subject">Subject</Label>
        <Input type="text" name="subject" placeholder="Your Name" />
      </FieldWrapper>
      <FieldWrapper>
        <Label for="textarea">Message</Label>
        <Textarea rows="10" name="textarea" />
      </FieldWrapper>
      <FieldWrapper>
        <Button>Send message</Button>
      </FieldWrapper>
    </form>
  )
}

export default ContactForm
