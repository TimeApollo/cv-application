import React, { useState, useEffect } from 'react';

export default function Education(props) {
  const [show, setShow] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setShow((prevShow) => !prevShow);
  }

  const renderEdForms = props.education.map((obj, index) => {
    return (
      <div key={index}>
        <form className="mt-8 flex flex-col items-center gap-3">
          <div className="">
            <input
              onChange={props.handleChange}
              value={obj.name ?? ''}
              key={index}
              type="text"
              name="name"
              id="education"
              step={index}
              className="rounded px-2 text-slate-800"
              placeholder="School"
            />
          </div>

          <div className="">
            <input
              onChange={props.handleChange}
              value={obj.city ?? ''}
              key={index}
              type="text"
              name="city"
              id="education"
              step={index}
              className="rounded px-2 text-slate-800"
              placeholder="City and State"
            />
          </div>

          <div>
            <input
              onChange={props.handleChange}
              value={obj.areaOfStudy ?? ''}
              key={index}
              type="text"
              name="areaOfStudy"
              id="education"
              step={index}
              placeholder="Area of Study"
              className="rounded px-2 text-slate-800"
            />
          </div>

          <div>
            <input
              onChange={props.handleChange}
              value={obj.dateOfStudy ?? ''}
              type="text"
              name="dateOfStudy"
              id="education"
              step={index}
              className="rounded px-2 text-slate-800"
              placeholder="Dates Attended"
            />
          </div>
        </form>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl"> Education Details</h1>
      {show && renderEdForms}
      <div className="m-4 flex justify-center gap-8">
        <button
          onClick={handleSubmit}
          className="rounded bg-white px-4 py-1 text-slate-800"
        >
          Hide Education Details
        </button>
        <button
          onClick={show && props.addEducation}
          className="rounded bg-white px-4 py-1 text-slate-800"
        >
          Add Education
        </button>
      </div>
    </div>
  );
}
