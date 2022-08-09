import React, { useState, useEffect } from 'react';

export default function EducationOutput(props) {
  console.log(props);
  return (
    <div className="m-12 flex flex-col">
      <h1 className="mb-4 text-2xl font-bold">Education</h1>
      <div className="flex justify-between">
        <h1>{props.areaOfStudy}</h1>
        <h1>{props.dateOfStudy}</h1>
      </div>
      <div className="flex justify-between">
        <h1>{props.name}</h1>
        <h1>{props.city}</h1>
      </div>
    </div>
  );
}
