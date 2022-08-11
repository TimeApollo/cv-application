import React from 'react';

export default function ExperienceOutput(props) {
  const propsArray = props.experience;
  const renderedEd = propsArray.map((obj, index) => {
    const renderedTasks = obj.tasks.map((task, index) => {
      return (
        <div key={index}>
          <p>{task}</p>
        </div>
      );
    });
    return (
      <div className="mb-4" key={index}>
        <div className="flex justify-between">
          <h1>{obj.name}</h1>
          <h1>{obj.dateOfWork}</h1>
        </div>
        <div className="flex justify-between">
          <h1>{obj.position}</h1>
          <h1>{obj.city}</h1>
        </div>
        <div className="mt-4">{renderedTasks}</div>
      </div>
    );
  });

  return (
    <div className="m-12 flex flex-col">
      <h1 className="mb-4 text-2xl font-bold">Experience</h1>
      {renderedEd}
    </div>
  );
}
