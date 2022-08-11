import React from 'react';

export default function EducationOutput(props) {
  const propsArray = props.education;
  const renderedEd = propsArray.map((obj, index) => {
    return (
      <div className="mb-4" key={index}>
        <div className="flex justify-between">
          <h1>{obj.areaOfStudy}</h1>
          <h1>{obj.dateOfStudy}</h1>
        </div>
        <div className="flex justify-between">
          <h1>{obj.name}</h1>
          <h1>{obj.city}</h1>
        </div>
      </div>
    );
  });

  return (
    <div className="m-12 flex flex-col">
      <h1 className="mb-4 text-2xl font-bold">Education</h1>
      {renderedEd}
    </div>
  );
}
