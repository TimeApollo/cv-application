import React, { useState, useEffect } from 'react';

export default function Experience(props) {
  const [show, setShow] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShow((prevShow) => !prevShow);
  }

  const renderedExpForms = props.experience.map((obj, index) => {
    const renderedTaskInputs = obj.tasks.map((task, indexTwo) => {
      return (
        <div key={indexTwo}>
          <input
            onChange={props.handleChange}
            value={task ?? ''}
            type="text"
            name="tasks"
            id={index}
            step={indexTwo}
            className="rounded px-2 text-slate-800"
            placeholder="Enter Professional Experience"
          />
        </div>
      );
    });
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
              id="experience"
              step={index}
              className="rounded px-2 text-slate-800"
              placeholder="Company Name"
            />
          </div>

          <div className="">
            <input
              onChange={props.handleChange}
              value={obj.position ?? ''}
              key={index}
              type="text"
              name="position"
              id="experience"
              step={index}
              className="rounded px-2 text-slate-800"
              placeholder="Position"
            />
          </div>

          <div className="">
            <input
              onChange={props.handleChange}
              value={obj.city ?? ''}
              key={index}
              type="text"
              name="city"
              id="experience"
              step={index}
              className="rounded px-2 text-slate-800"
              placeholder="City and State"
            />
          </div>

          <div>
            <input
              onChange={props.handleChange}
              value={obj.dateOfWork ?? ''}
              key={index}
              type="text"
              name="dateOfWork"
              id="experience"
              step={index}
              placeholder="Dates of Employement"
              className="rounded px-2 text-slate-800"
            />
          </div>
          {renderedTaskInputs}
          {/* <div>
            <input
              onChange={props.handleChange}
              value={obj.tasks ?? ''}
              type="text"
              name="tasks"
              id="experience"
              step={index}
              className="rounded px-2 text-slate-800"
              placeholder="Enter Professional Experience"
            />
          </div> */}
          <button
            onClick={props.addTask}
            id={index}
            type="button"
            className="mt-2 rounded bg-white px-4 py-1 text-slate-800 hover:bg-gray-300"
          >
            Add Task
          </button>
        </form>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl"> Experience Details</h1>
      {!show && (
        <button
          onClick={handleSubmit}
          className="mt-2 rounded bg-white px-4 py-1 text-slate-800 hover:bg-gray-300"
        >
          Edit Experience Details
        </button>
      )}
      {show && renderedExpForms}
      {show && (
        <div className="m-4 flex justify-center gap-8">
          <button
            onClick={handleSubmit}
            className="rounded bg-white px-4 py-1 text-slate-800 hover:bg-gray-300"
          >
            Hide Experience Details
          </button>
          <button
            onClick={show && props.addExperience}
            className="rounded bg-white px-4 py-1 text-slate-800 hover:bg-gray-300"
          >
            Add Experience
          </button>
        </div>
      )}
    </div>
  );
}
