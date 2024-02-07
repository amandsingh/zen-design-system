
import React, { useState } from 'react';

interface DataTableProps {
    data: any[]; // Sample data to load into the table
}

const sampleData = [
    ['Name', 'Age', 'Email'],
    ['John Doe', 25, 'johndoe@example.com'],
    ['Jane Smith', 30, 'janesmith@example.com'],
    ['Bob Johnson', 35, 'bobjohnson@example.com'],
  ];
  

const DataTable: React.FC<DataTableProps> = ({ data }) => {
    const [tableData, setTableData] = useState(data);

    const handleCellChange = (rowIndex: number, columnIndex: number, value: any) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][columnIndex] = value;
        setTableData(updatedData);
    };

    const handleRowAdd = () => {
        const newRow = Array(tableData[0].length).fill('');
        setTableData([...tableData, newRow]);
    };

    const handleColumnAdd = () => {
        const updatedData = tableData.map((row) => [...row, '']);
        setTableData(updatedData);
    };

    return (
        <table style={{ display: 'inline-block' }}>
            <thead>
                <tr>
                    {tableData[0].map((_, columnIndex) => (
                        <th key={columnIndex}>
                            <input
                                type="text"
                                value={tableData[0][columnIndex]}
                                onChange={(e) => handleCellChange(0, columnIndex, e.target.value)}
                            />
                        </th>
                    ))}
                    <th>
                        <button onClick={handleColumnAdd}>+</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableData.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, columnIndex) => (
                            <td key={columnIndex}>
                                <input
                                    type="text"
                                    value={cell}
                                    onChange={(e) => handleCellChange(rowIndex + 1, columnIndex, e.target.value)}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
                <tr>
                    {tableData[0].map((_, columnIndex) => (
                        <td key={columnIndex}>
                            <button onClick={handleRowAdd}>+</button>
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};

export default DataTable;


