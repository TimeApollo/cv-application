import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Output from './components/Output';

export default function App() {
  const [information, setInformation] = useState({
    contact: {
      name: 'Joseph Vellella',
      address: '670 Winona Ct Apt 23 Denver Colorado 80204',
      email: 'josephvellella@proton.me',
      phone: '720-447-5186',
    },
    education: {
      name: 'Missouri University of Science and Technology',
      areaOfStudy: 'B.S. Chemical Engineering',
      dateOfStudy: 'August 2011 - May 2015',
      city: 'Rolla, MO',
    },
  });

  function handleChange(event) {
    const { name, value, id } = event.target;
    setInformation((prevInformation) => ({
      ...prevInformation,
      [id]: {
        ...prevInformation[id],
        [name]: value,
      },
    }));
  }

  return (
    <div className="mx-auto flex flex-col gap-8 bg-slate-800 text-white md:max-w-4xl">
      <Contact {...information} handleChange={handleChange} />
      <Education {...information} handleChange={handleChange} />
      <Experience />
      <Output {...information} />
    </div>
  );
}
