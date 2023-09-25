// This file puts all the components together to create the job application form

// Imports
import NavbarComp from './NavbarComp';
import {Form, Container} from 'react-bootstrap'
import PersonalInfoComp from './formComps/PersonalInfoComp';
import EducationComp from './formComps/EducationComp';
import FilesComp from './formComps/FilesComp';

export default function App() {

  return (
    <Container>

      <NavbarComp/>

      <Form>

        <h4 className='text-center'> Personal Information </h4>
        <PersonalInfoComp/>
        <hr></hr>
      
        <h4 className='text-center'>Files</h4>
        <FilesComp/>
        <hr></hr>

        <h4 className='text-center'>Education</h4>
        <EducationComp/>
        <hr></hr>
        
        <h4 className='text-center'>Work Experience</h4>
        {/* Make and add work experience component*/}
        <hr></hr>

        <h4 className='text-center'>Skills</h4>
        {/* Make and add skills component*/}

      </Form>
    </Container>
  );
}
