import React, { useState, useEffect } from 'react';
import ContactOutput from './ContactOuput';

export default function Output(props) {
  return <ContactOutput {...props.contact} handleChange={props.handleChange} />;
}
