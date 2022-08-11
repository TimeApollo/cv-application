import React, { useState, useEffect } from 'react';
import ContactOutput from './ContactOuput';
import EducationOutput from './EducationOutput';
import ExperienceOutput from './ExperienceOutput';

export default function Output(props) {
  return (
    <div>
      <ContactOutput {...props.contact} handleChange={props.handleChange} />
      <EducationOutput {...props} handleChange={props.handleChange} />
      <ExperienceOutput {...props} handleChange={props.handleChange} />
    </div>
  );
}
