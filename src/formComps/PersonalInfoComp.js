// This file contains all the Personal Information form content

// Imports
import Form from 'react-bootstrap/Form'

export default function PersonalInfoComp() {
  
  const formData = [
    { label: 'First Name', type: 'FirstName' },
    { label: 'Last Name', type: 'LastName' },
    { label: 'Full Name', type: 'FullName' },
    { label: 'Email', type: 'Email'},
    { label: 'Mobile Phone Number', type: 'phoneNumber'},
    { label: 'Work Phone Number', type: 'workPhoneNumber'}
  ];

  return (
    <>
      {formData.map((field, index) => (
        <Form.Group key={index} className="mb-3" controlId={`formGroup${field.type}`}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control type="text" name={field.type} placeholder={`Enter ${field.label}`} />
        </Form.Group>
      ))}
    </>
  )
}
