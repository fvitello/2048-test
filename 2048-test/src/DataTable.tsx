interface DataTableProps {
    rows: number;
    columns: number;
}

const DataTable: React.FC<DataTableProps> = (props) => {
    let matrix = Array(props.rows);
    for (let i = 0; i < props.rows; i++) {
      matrix[i] = new Array(props.columns).fill(0);
    }
  
    return (
      <>
        <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((column: number, columnIndex: number) => (
                <td key={`${rowIndex}-${columnIndex}`}>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      </>
    );
  };

export default DataTable