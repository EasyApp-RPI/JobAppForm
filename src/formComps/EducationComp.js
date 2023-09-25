// This file contains all the Education form content

// Imports
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap"

export default function EducationComp() {
  const [education, setEducation] = useState([
    {
      school: '',
      degree: '',
      major: '',
      graduationYear: '',
    },
  ]);

  const handleAddEducation = () => {
    setEducation([...education, { school: '', degree: '', major: '', graduationYear: '' }]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleEducationChange = (index, event) => {
    const updatedEducation = [...education];
    updatedEducation[index][event.target.name] = event.target.value;
    setEducation(updatedEducation);
  };
  
  return (
    <>
      {education.map((edu, index) => (
        <div key={index}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              School:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="school"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </Col>
            <Form.Label column sm={2}>
              Degree:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="pb-3">
            <Form.Label column sm={2}>
              Major:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="major"
                value={edu.major}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </Col>
            
            <Form.Label column sm={2}>
              Graduation Year:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="graduationYear"
                value={edu.graduationYear}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </Col>
          </Form.Group>

          {index > 0 && (
            <Button variant="danger" onClick={() => handleRemoveEducation(index)}>
              Remove
            </Button>
          )}
        
        </div>
      ))}
      <Button variant="primary" onClick={handleAddEducation}>
        Add Education
      </Button>
    </>
  )
}
