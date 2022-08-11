import React from 'react';

export default function ContactOutput(props) {
  return (
    <div className="flex  flex-col place-items-center justify-center gap-2 bg-orange-500 py-4">
      <h1 className="text-3xl font-bold">{props.name}</h1>
      <div>
        <h1 className="text-center italic">{props.address}</h1>
        <h1 className="flex gap-4 italic">
          <a href={`mailto:${props.email}`}>{props.email}</a>
          <a href={`tel:${props.phone}`}>{props.phone}</a>
        </h1>
      </div>
    </div>
  );
}
