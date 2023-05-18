interface DataTableProps {
    rows: number;
    columns: number;
}

const getRandomNumber = () => {
    const randomNumber = Math.random();
    return randomNumber < 0.6 ? 2 : 4;
  };

const DataTable: React.FC<DataTableProps> = (props) => {
    let matrix = Array(props.rows);
    for (let i = 0; i < props.rows; i++) {
      matrix[i] = new Array(props.columns).fill(null).map(() => getRandomNumber());
    }
  
    return (
      <>
      <div>Ciao questo è test 1</div>
        <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((column: number, columnIndex: number) => (
                <td key={`${rowIndex}-${columnIndex}`}><b>{column}</b></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      </>
    );
  };

export default DataTable