'use client'

import { Fa0, FaRegAddressBook } from 'react-icons/fa6';
import Atom from './components/atom';
import Atoms from './components/atoms';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { majorStockIndices } from '@/lib/enumerate';

export default function Home() {
  return (
    <div>
       <h1 className="text-4xl font-bold">Atoms Collections</h1>
      <div>
        <Atoms type="weekdayCheckbox" config="config value" /> {/* Add the 'config' property */}
      </div>
      <div>
        <Atoms type="percentProgress" config="config value" /> {/* Add the 'config' property */}
      </div>
      <br />
      <h1 className="text-4xl font-bold">Atom glossary</h1>
    
      <div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Rendering</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Banner Atom</td>
            <td>
              <div>
                <Atom type='banner'>This is a banner</Atom>
              </div>
            </td>
          </tr>
          <tr>
            <td>Date Atom</td>
            <td>
              <div>
                <Atom type='date'>Click me</Atom>
              </div>
            </td>
          </tr>
          <tr>
            <td>Input % Atom</td>
            <td>
              <div>
                <Atom type='input%'></Atom>
              </div>
            </td>
          </tr>
          <tr>
            <td>Checkbox Atom</td>
            <td>
              <div>
                <Atom type='checkbox'>Check box:</Atom>
              </div>
            </td>
          </tr>
          <tr>
            <td>Options Atom</td>
            <td>
              <div>
                <Atom type='options' options={[{'key' : "1", "value": "Today"}, {'key' : "1", "value": "Monday"}, {'key' : "1", "value": "crapy da"}]}>Check box:</Atom>
              </div>
            </td>
          </tr>
          <tr>
            <td>Options Atom with Enumerate</td>
            <td>
              <div>
                <Atom type='options' enumerate={majorStockIndices}> Major Indices</Atom>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}
