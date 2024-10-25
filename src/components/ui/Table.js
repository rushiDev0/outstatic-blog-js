// components/Table.js

const Table = ({ children }) => {
    return (
        <table className="table-auto w-full border-collapse border border-gray-300">
            {children}
        </table>
    );
};

const TableHeader = ({ children }) => {
    return (
        <thead>
            {children}
        </thead>
    );
};

const TableBody = ({ children }) => {
    return (
        <tbody>
        {children}
        </tbody>
    );
};

const TableRow = ({ children }) => {
    return (
        <tr className="border border-gray-300">
            {children}
        </tr>
    );
};

const TableCell = ({ children, header }) => {
    return (
        <td className={`border border-gray-300 p-2 ${header ? 'font-bold' : ''}`}>
            {children}
        </td>
    );
};

const TableHeaderCell = ({ children }) => {
    return (
        <th className="border border-gray-300 p-2 font-bold">
            {children}
        </th>
    );
};

export { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell };