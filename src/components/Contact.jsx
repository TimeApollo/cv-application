import React, { useState, useEffect } from 'react';

export default function Contact(props) {
  const [show, setShow] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShow((prevShow) => !prevShow);
  }
  return (
    <div className="mt-8 flex flex-col items-center">
      <h1 className="text-3xl"> Contact Details</h1>
      {!show && (
        <button
          onClick={handleSubmit}
          className="mt-2 rounded bg-white px-4 py-1 text-slate-800 hover:bg-gray-300"
        >
          Edit Contact Details
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
              id="contact"
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
              id="contact"
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
              id="contact"
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
              id="contact"
              className="rounded px-2 text-slate-800"
              placeholder="Phone"
            />
          </div>
          <button className="rounded bg-white px-4 py-1 text-slate-800 hover:bg-gray-300">
            Hide Contact Details
          </button>
        </form>
      )}
    </div>
  );
}
