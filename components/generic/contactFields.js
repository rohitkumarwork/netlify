import styled from 'styled-components'
import fetch from 'isomorphic-unfetch';
import React, { useState, useEffect } from 'react';

const Wrap = styled.div`
  width: 100%;
  position: relative;
  min-height: 230px;
`;

const InputBox = styled.input`
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding: 7px 12px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
`;
const TextBox = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding: 7px 12px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    height: 150px;

`;

const Submit = styled.button`
    border-radius: 0px;
    background-color: #424B5A;
    width: 100%;
    color: white;
    padding: 10px;
    font-size: 12px;
`;

const Error = styled.p`
  color: red;
  font-size: 15px;
  margin-left: 4px;
`;

const SubmittedWrap = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
  text-align: center;
  height: fit-content;
  h3 {
    font-size: 29px;
    margin-bottom: 10px;
  }
`;


const ContactFields = () => {
  const [data, setData] = useState(null)
  const [errors, setErrors] = useState({})
  const [submitted, setsubmitted] = useState(false)

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: ''
  })

  const updateFormData = e => {
    setFormData({
      ...formData,
      [e.target.name]: (e.target.type === 'checkbox' ? e.target.checked : e.target.value)
    });
  };

  
  const ValidateForm = () => {
    const errors = {email: !emailRegex.test(formData.email), phone_number: !phoneRegex.test(formData.phone_number)};
    setErrors(errors)
    return errors
  }

  const SubmitForm = async () => {
    const errors = ValidateForm()
    if (!Object.values(errors).includes(true)) {
      setsubmitted(true)
      const res = await fetch(
        '/api/newLead',
        {
          method: 'POST',
          body: JSON.stringify(formData)
        }
      );
      const data = await res.json()
    }
  }


  return (
    <Wrap>
      {!submitted ?
        <>
          <InputBox type="text" onChange={updateFormData} name="name" value={formData.name} placeholder="Name"></InputBox>
          {
            errors['email'] &&
            <Error>Email Error</Error>
          }
          <InputBox type="text" onChange={updateFormData} name="email" value={formData.email} placeholder="Email"></InputBox>
          {
            errors['phone_number'] &&
            <Error>Phone Error</Error>
          }
          <InputBox type="text" onChange={updateFormData} name="phone_number" value={formData.phone_number} placeholder="Phone Number"></InputBox>

          <TextBox  type="text" onChange={updateFormData} name="message" value={formData.message} placeholder="Write a message here..."></TextBox>
          <Submit onClick={() => {SubmitForm()}}>CONTACT US</Submit>
        </>
        :
        <SubmittedWrap>
          <h3>Thank you!</h3>
          <p>We will give you a call shortly!</p>
        </SubmittedWrap>
      }
    </Wrap>
  )
}
export default ContactFields;