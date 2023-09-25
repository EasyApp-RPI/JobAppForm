// This file puts all the components together to create the job application form

// Imports
import NavbarComp from './NavbarComp';
import {Form, Container} from 'react-bootstrap'
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
          <hr className='mt-3'></hr>

        </Form>
      </Container>
    </Container>
  );
}
