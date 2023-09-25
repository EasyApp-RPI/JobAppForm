// Bootstrap Imports
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';

import NavbarComp from './NavbarComp';

function App() {

  const formData = [
    { label: 'First Name', type: 'FirstName' },
    { label: 'Last Name', type: 'LastName' },
    { label: 'Full Name', type: 'FullName' },
    { label: 'Email', type: 'Email'},
    { label: 'Mobile Phone Number', type: 'MobilePhone'},
    { label: 'Work Phone Number', type: 'WorkPhone'}
  ];

  return (
    <Container>

      <NavbarComp/>

      <Form>

        {/* Personal Information */}
        {formData.map((field, index) => (
          <Form.Group key={index} className="mb-3" controlId={`formGroup${field.type}`}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control type={field.type} placeholder={`Enter ${field.label}`} />
          </Form.Group>
        ))}

        <hr></hr>
        
        {/* Files */}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label> Resume </Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label> Cover Letter </Form.Label>
          <Form.Control type="file" />
        </Form.Group>


        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label> Transcript </Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        {/* Education */}

        

        {/* Work Experience */}

        

        {/* Skills */}

      </Form>
    </Container>
  );
}

export default App;
