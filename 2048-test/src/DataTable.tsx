interface DataTableProps {
    rows: number
    columns: number
}

const DataTable:React.FC<DataTableProps> = ({rows, columns}) => {
return(
    <>
        Rows:<div>{rows}</div>
        Column:<div>{columns}</div>
    </>
    )
    }

export default DataTable