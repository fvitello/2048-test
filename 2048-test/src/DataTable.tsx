interface DataTableProps {
    rows: number;
    columns: number;
}

const getRandomNumber = () => {
    const randomNumber = Math.random();
    return randomNumber < 0.9 ? 2 : 4;
  };

const DataTable: React.FC<DataTableProps> = (props) => {
    let matrix = Array(props.rows);
    for (let i = 0; i < props.rows; i++) {
      matrix[i] = new Array(props.columns).fill(null).map(() => getRandomNumber());
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