import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Users from './Components/Users';

let student: string = 'Jeff';
let age: number  =6;
let isSmart: boolean = true;

let students: string[] = ['joe', 'baiden', 'harris']
let fees: number[] = [12,41,45,75]


interface Person{
 name: string,
 job: string,
 employed: string | boolean
 age: number,
 location?: string | number
}

const person: Person  = {
  name: 'Bill Clinton',
  job: 'jobless',
  employed: true,
  age: 85,
  location: 55
}

const handleAddUser = (firstName: string, age: number, address: string):number =>{
  const total: number = 50;
  console.log(firstName, age, address);
 return age
}


function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
