// This file contains all the Personal Information form content

// Imports
import Form from 'react-bootstrap/Form'

export default function PersonalInfoComp() {
  
  const formData = [
    { label: 'First Name',type: 'text', name: 'FirstName' },
    { label: 'Last Name',type: 'text', name: 'LastName' },
    { label: 'Full Name',type: 'text', name: 'FullName' },
    { label: 'Email', type: 'email', name: 'Email'},
    { label: 'Mobile Phone Number',type: 'tel', name: 'phoneNumber'},
    { label: 'Work Phone Number',type: 'tel', name: 'workPhoneNumber'}
  ];

  return (
    <>
      {formData.map((field, index) => (
        <Form.Group key={index} className="mb-3" controlId={`formGroup${field.name}`}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control type={field.type} name={field.name} placeholder={`Enter ${field.label}`} />
        </Form.Group>
      ))}
    </>
  )
}
