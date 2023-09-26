// This file puts all the components together to create the job application form

// Imports
import NavbarComp from './NavbarComp';
import {Form, Container, Button, Row, FormGroup} from 'react-bootstrap'
import PersonalInfoComp from './formComps/PersonalInfoComp';
import EducationComp from './formComps/EducationComp';
import FilesComp from './formComps/FilesComp';
import WorkComp from './formComps/WorkComp';

export default function App() {

  return (
    <Container >

      <NavbarComp/>

      <Container className='mt-4 rounded'>
        <Form>

          <h4 className='text-center'> Personal Information </h4>
          <PersonalInfoComp/>
          <hr className='mt-3'></hr>
        
          <h4 className='text-center'>Files</h4>
          <FilesComp/>
          <hr className='mt-3'></hr>

          <h4 className='text-center'>Education</h4>
          <EducationComp/>
          <hr className='mt-3'></hr>
          
          <h4 className='text-center'>Work Experience</h4>
          <WorkComp/>

          <FormGroup as={Row} className='mt-5 mb-3'>
            <Button variant="primary" type="submit">
              Submit form
            </Button>
          </FormGroup>

        </Form>
      </Container>
    </Container>
  );
}
