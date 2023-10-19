import { useState } from 'react'

export default function Person() {
   const [person, setPerson] = useState({ name: 'John', age: 10 });

   // GOOD - Do this!
   const handleIncreaseAge = () =>{
      const newPerson = { ...person, age: person.age + 1 };
      setPerson(newPerson);
   }
   
   return (
      <>
         <h1>Introducing {person.name}, {person.age} years old</h1>
         <button onClick={handleIncreaseAge}>Increase age</button>
      </>
   )
}