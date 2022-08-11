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
    education: [
      {
        name: 'Missouri University of Science and Technology',
        areaOfStudy: 'B.S. Chemical Engineering',
        dateOfStudy: 'August 2011 - May 2015',
        city: 'Rolla, MO',
      },
    ],
    experience: [
      {
        name: 'Gelita',
        position: 'Process Engineer',
        dateOfWork: 'August 2011 - May 2015',
        city: 'Sioux City, IA',
        tasks: [
          'Facilate training of over 200 process operators.',
          'A second super important task that shows skill.',
        ],
      },
    ],
  });

  function addEducation(event) {
    event.preventDefault();
    let newEducation = [
      {
        name: '',
        areaOfStudy: '',
        dateOfStudy: ',',
        city: '',
      },
    ];
    setInformation((prevInformation) => {
      const newEdArray = [...prevInformation.education, newEducation];
      return { ...prevInformation, education: newEdArray };
    });
  }

  function addExperience(event) {
    event.preventDefault();
    let newExperience = [
      {
        name: '',
        position: '',
        dateOfWork: '',
        tasks: [],
      },
    ];
    setInformation((prevInformation) => {
      const newExpArray = [...prevInformation.experience, newExperience];
      return { ...prevInformation, experience: newExpArray };
    });
  }

  function addTask(event) {
    const { id } = event.target;
    setInformation((prevInformation) => {
      const newInformation = { ...prevInformation };
      const newArray = [...newInformation.experience[id].tasks];
      newArray.push('');
      newInformation.experience[id].tasks = newArray;
      return newInformation;
    });
  }

  function handleChange(event) {
    const { name, value, id, step } = event.target;

    if (step === '') {
      setInformation((prevInformation) => {
        let newState = { ...prevInformation };
        newState[id][name] = value;
        return { ...newState };
      });
    } else if (name === 'tasks' && step !== '') {
      setInformation((prevInformation) => {
        let newState = { ...prevInformation };
        newState.experience[id].tasks[step] = value;
        return { ...newState };
      });
    } else {
      setInformation((prevInformation) => {
        let newState = { ...prevInformation };
        newState[id][step][name] = value;
        return { ...newState };
      });
    }
  }

  return (
    <div className="mx-auto flex flex-col gap-8 bg-slate-800 text-white md:max-w-4xl">
      <Contact {...information} handleChange={handleChange} />
      <Education
        {...information}
        handleChange={handleChange}
        addEducation={addEducation}
      />
      <Experience
        {...information}
        handleChange={handleChange}
        addExperience={addExperience}
        addTask={addTask}
      />
      <Output {...information} />
    </div>
  );
}
