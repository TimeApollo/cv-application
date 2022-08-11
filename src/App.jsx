import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Output from './components/Output';

export default function App() {
  const [information, setInformation] = useState({
    contact: {
      name: '',
      address: '',
      email: '',
      phone: '',
    },
    education: [
      {
        name: '',
        areaOfStudy: '',
        dateOfStudy: '',
        city: '',
      },
    ],
    experience: [
      {
        name: '',
        position: '',
        dateOfWork: '',
        city: '',
        tasks: ['', 'A second super important task that shows skill.'],
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
      let newInformation = { ...prevInformation };
      return { ...prevInformation, education: newEdArray };
    });
  }

  function addExperience(event) {
    event.preventDefault();
    let newExperience = {
      name: '',
      position: '',
      dateOfWork: '',
      tasks: [''],
    };
    setInformation((prevInformation) => {
      const newInformation = structuredClone(prevInformation);
      newInformation.experience.push(newExperience);
      return { ...newInformation };
    });
  }

  function addTask(event) {
    const { id } = event.target;
    setInformation((prevInformation) => {
      const newInformation = structuredClone(prevInformation);
      const newArray = [...newInformation.experience[id].tasks];
      newArray.push('');
      newInformation.experience[id].tasks = newArray;
      return { ...newInformation };
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
      <h1 className=" mt-2 flex justify-center text-4xl font-bold">
        CV Generator
      </h1>
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
