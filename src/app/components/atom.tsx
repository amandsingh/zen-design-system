import React, { useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri';

import DatePicker from "react-datepicker";


type AtomType = 'label' | 'icon' | 'date' | 'checkbox' | 'input%';

interface AtomProps {
  children?: React.ReactNode;
  type: AtomType;
  subtype?: string;
  label?: string;
}

const Atom: React.FC<AtomProps> = ({ type, subtype, label, children }) => {
  const [dateValue, setDateValue] = useState<Date | null>(null);
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
            <span onClick={() => setShowDatePicker(true)}>{currentDate}</span>
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
        return <input type="checkbox" />;
     
      case 'input%':
        return (
          <span>
            <input type="text" maxLength={3} className="bg-gray-200 rounded-md p-2 text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" style={{ height: '30px', width: '50px' }} />
            <span>%</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'inline-flex', gap: '8px' }}>
     {children} {renderAtom()}
    </div>
  );
};

export default Atom;