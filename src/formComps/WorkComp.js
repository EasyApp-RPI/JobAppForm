import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function WorkComp() {
  const [workExperience, setWorkExperience] = useState([
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      isPresent: false,
    },
  ]);

  const handleAddExperience = () => {
    setWorkExperience([...workExperience, { company: '', position: '', startDate: '', endDate: '', isPresent: false }]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = [...workExperience];
    updatedExperience.splice(index, 1);
    setWorkExperience(updatedExperience);
  };

  const handleExperienceChange = (index, event) => {
    const updatedExperience = [...workExperience];
    const { name, value, type, checked } = event.target;
    updatedExperience[index][name] = type === 'checkbox' ? checked : value;
    setWorkExperience(updatedExperience);
  };

  return (
    <>
      {workExperience.map((exp, index) => (
        <div key={index}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Company:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </Col>
            <Form.Label column sm={2}>
              Position:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Start Date:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="startDate"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </Col>
            <Form.Label column sm={2}>
              End Date:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="endDate"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, e)}
                disabled={exp.isPresent} // Disable endDate when "Present" is checked
              />
            </Col>
          </Form.Group>
          <Form.Check className='pb-3'
            type="checkbox"
            label="Present"
            name="isPresent"
            checked={exp.isPresent}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          {index > 0 && (
            <Button variant="danger" onClick={() => handleRemoveExperience(index)}>
              Remove
            </Button>
          )}
        </div>
      ))}
      <Button variant="primary" onClick={handleAddExperience}>
        Add Work Experience
      </Button>
    </>
  );
}
