import React, { useState, useEffect } from 'react';

export default function Contact(props) {
  console.log(props);
  const [show, setShow] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setShow((prevShow) => !prevShow);
  }
  return (
    <div className="mt-8 flex flex-col items-center">
      <h1 className="text-2xl"> Contact Information</h1>
      {!show && (
        <button
          onClick={handleSubmit}
          className="mt-2 rounded bg-white px-4 py-1 text-slate-800"
        >
          Edit Contact
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
              value={props.contact.name}
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
              value={props.contact.address}
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
              value={props.contact.email}
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
              value={props.contact.phone}
              type="tel"
              name="phone"
              id="tel"
              className="rounded px-2 text-slate-800"
              placeholder="Phone"
            />
          </div>
          <button className="rounded bg-white px-4 py-1 text-slate-800">
            Hide Section
          </button>
        </form>
      )}
    </div>
  );
}
