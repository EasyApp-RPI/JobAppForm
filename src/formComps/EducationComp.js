// This file contains all the Education form content

// Imports
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap"

export default function EducationComp() {
  const degreeOptions = 
    [ {name: "High School", value: "Highschool"},
    {name: "Associate's Degree", value: "Associates"},
    {name: "Bachelor's Degree", value: "Bachelors"},
    {name: "Master's Degree", value: "Masters"},
    {name: "Master of Business Administration (M.B.A)", value: "MBA"},
    {name: "Juris Doctor (J.D.)", value: "JD"},
    {name: "Doctor of Medicine (M.D.)", value: "MD"},
    {name: "Doctor of Philosophy (Ph.D.)", value: "PHD"}
    ]

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
                type="school"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </Col>
            <Form.Label column sm={2}>
              Degree:
            </Form.Label>
            <Col sm={4}>
              <Form.Select aria-label="degree">
                <option key={0} value="none">Select a Degree</option>
                {degreeOptions.map((option,index) => (
                  <option key={index+1} value={option.va}> {option.name} </option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="pb-3">
            <Form.Label column sm={2}>
              Major:
            </Form.Label>
            <Col sm={4}> 
              <Form.Control
                type="major"
                value={edu.major}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </Col>
            
            <Form.Label column sm={2}>
              Graduation Year:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="graduationYear"
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
