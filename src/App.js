// Bootstrap Imports
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';

import NavbarComp from './NavbarComp';

function App() {

  const formData = [
    { label: 'First Name', type: 'FirstName' },
    { label: 'Last Name', type: 'LastName' },
    { label: 'Email', type: 'Email'},
    { label: 'Phone', type: 'Phone'},
  ];

  return (
    <Container>

      <NavbarComp/>

      <Form>

        {formData.map((field, index) => (
          <Form.Group key={index} className="mb-3" controlId={`formGroup${field.type}`}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control type={field.type} placeholder={`Enter ${field.label}`} />
          </Form.Group>
        ))}

      </Form>
    </Container>
  );
}

export default App;
