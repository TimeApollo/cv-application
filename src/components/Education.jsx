import React, { useState, useEffect } from 'react';

export default function Education(props) {
  const [show, setShow] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setShow((prevShow) => !prevShow);
  }
  return (
    <div className="mb-8 flex flex-col items-center">
      <h1 className="text-3xl"> Education Details</h1>
      {!show && (
        <button
          onClick={handleSubmit}
          className="mt-2 rounded bg-white px-4 py-1 text-slate-800"
        >
          Edit Education Details
        </button>
      )}
      {show && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col items-center gap-3"
        >
          <div className="">
            <input
              onChange={props.handleChange}
              value={props.education.name}
              type="text"
              name="name"
              id="education"
              className="rounded px-2 text-slate-800"
              placeholder="School"
            />
          </div>

          <div className="">
            <input
              onChange={props.handleChange}
              value={props.education.city}
              type="text"
              name="city"
              id="education"
              className="rounded px-2 text-slate-800"
              placeholder="City and State"
            />
          </div>

          <div>
            <input
              onChange={props.handleChange}
              value={props.education.areaOfStudy}
              type="text"
              name="areaOfStudy"
              id="education"
              placeholder="Area of Study"
              className="rounded px-2 text-slate-800"
            />
          </div>

          <div>
            <input
              onChange={props.handleChange}
              value={props.education.dateOfStudy}
              type="text"
              name="dateOfStudy"
              id="education"
              className="rounded px-2 text-slate-800"
              placeholder="Dates Attended"
            />
          </div>

          <button className="rounded bg-white px-4 py-1 text-slate-800">
            Hide Education Details
          </button>
        </form>
      )}
    </div>
  );
}
