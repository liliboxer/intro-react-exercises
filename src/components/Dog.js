import React from 'react';

export default function Dog() {
  const dog = {
    name: 'Max',
    age: 8,
    weight: '11lbs'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>

      <dt>Age</dt>
      <dd>{dog.age}</dd>
      
      <dt>Weight</dt>
      <dd>{dog.weight}</dd>
    </dl>
  )
}