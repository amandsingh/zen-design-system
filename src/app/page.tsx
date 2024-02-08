'use client'

import { Fa0, FaRegAddressBook } from 'react-icons/fa6';
import Atom from './components/atom';
import Atoms from './components/atoms';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
       <h1 className="text-4xl font-bold">Atoms Factory</h1>
      <div>
        <Atoms type="weekdayCheckbox" config="config value" /> {/* Add the 'config' property */}
      </div>
      <div>
        <Atoms type="percentProgress" config="config value" /> {/* Add the 'config' property */}
      </div>
      <br />
      <h1 className="text-4xl font-bold">Atom Factory</h1>
      <div>
        <Atom type='banner'>This is a banner</Atom>
      </div>
      <div>
        <Atom type='date'>Click me</Atom>
      </div>
      <div>
        <Atom type='input%'>Progress</Atom>
      </div>
      <div>
        <Atom type='checkbox'>Check box:</Atom>
      </div>
      <div>
        <Atom type='options' options={[{'key' : "1", "value": "Today"}, {'key' : "1", "value": "Monday"}, {'key' : "1", "value": "crapy da"}]}>Check box:</Atom>
      </div>
    </div>
  )
}
