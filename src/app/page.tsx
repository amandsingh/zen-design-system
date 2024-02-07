'use client'

import Atoms from './components/atoms';

export default function Home() {
  return (
    <div>
           <Atoms type="weekdayCheckbox" />
           <Atoms type="percentProgress" />
      </div>
  )
}
