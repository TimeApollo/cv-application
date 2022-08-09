import React, { useState, useEffect } from 'react';

export default function Contact(props) {
  console.log(props);

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="m-8 flex flex-col items-center gap-3"
      >
        <h1 className="text-2xl"> Contact Information</h1>
        <div className="">
          <input
            onChange={props.handleChange}
            type="text"
            name="name"
            id="name"
            className="rounded px-2 text-slate-800"
            placeholder="Full Name"
          />
        </div>

        <div>
          <input
            onChange={props.handleChange}
            type="text"
            name="address"
            id="address"
            placeholder="Full Address"
            className="rounded px-2 text-slate-800"
          />
        </div>

        <div>
          <input
            onChange={props.handleChange}
            type="email"
            name="email"
            id="email"
            className="rounded px-2 text-slate-800"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            onChange={props.handleChange}
            type="tel"
            name="phone"
            id="tel"
            className="rounded px-2 text-slate-800"
            placeholder="Phone"
          />
        </div>
        <button className="rounded bg-white px-4 py-1 text-slate-800">
          Submit
        </button>
      </form>
    </div>
  );
}
