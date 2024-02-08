import React, { useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri';

import DatePicker from "react-datepicker";


type AtomType = 'label' | 'icon' | 'date' | 'checkbox' | 'input%' | 'banner' | 'options';

interface AtomProps {
  children?: React.ReactNode;
  type: AtomType;
  subtype?: string;
  options?: Option[];
}

const Atom: React.FC<AtomProps> = ({ type, subtype, options, children }) => {
  const [dateValue, setDateValue] = useState<Date | null>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const renderAtom = () => {
    switch (type) {
      case 'icon':
        return <RiReactjsLine size={24} />;
      case 'date':
        const currentDate = dateValue
          ? dateValue.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })
          : '';
        return (
          <>
            <span className="bg-blue-100 text-gray" onClick={() => setShowDatePicker(true)}>{currentDate}</span>
            {showDatePicker && (
              <DatePicker
                selected={dateValue}
                onChange={(date) => {
                  setDateValue(date);
                  setShowDatePicker(false);
                }}
              />
            )}
          </>
        );
      case 'checkbox':
        return (<div className="">
            <span>{children} </span><input type="checkbox" />
          </div>);
     
      case 'banner':
        return (
          <div className="bg-yellow-100 text-gray ">
            {children}
          </div>
        );
      case 'input%':
        return (
          <span> {children} 
            <input type="text" maxLength={3} className="bg-gray-200 rounded-md p-2 text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" style={{ height: '30px', width: '50px' }} />
            <span>%</span>
          </span>
        );
      case 'options':
          return <Options options={options}/>;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'inline-flex', gap: '8px' }}>
    {renderAtom()}
    </div>
  );
};

interface Option {
  key: string;
  value: string;
}

interface OptionsProps {
  options: Option[];
  defaultKey?: string;
}

const Options: React.FC<OptionsProps> = ({ options, defaultKey }) => {
  const [selectedKey, setSelectedKey] = useState<string | undefined>(defaultKey);

  const handleSelect = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <select
      value={selectedKey}
      onChange={(e) => handleSelect(e.target.value)}
      className="bg-gray-200 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
    >
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
};


export default Atom;