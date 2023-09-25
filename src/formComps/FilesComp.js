// This file contains all the Education form content

// Imports
import { Form } from "react-bootstrap"

export default function FilesComp() {

  const formData = [
    { label: 'Resume'},
    { label: 'Cover Letter'},
    { label: 'Transcript'},
  ];

  return (
    <>
        {formData.map((field, index) => (
        <Form.Group key={index} className="mb-3">
          <Form.Label>{field.label}</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      ))}
    </>
  )
}
