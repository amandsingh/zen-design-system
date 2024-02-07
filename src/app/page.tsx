import Image from 'next/image'
import DataTable from './components/datatable';


const sampleData = [
  ['Name', 'Age', 'Email'],
  ['John Doe', 25, 'johndoe@example.com'],
  ['Jane Smith', 30, 'janesmith@example.com'],
  ['Bob Johnson', 35, 'bobjohnson@example.com'],
];

export default function Home() {
  return (
    <div>
          <DataTable data={sampleData} />
      </div>
  )
}
