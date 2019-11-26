import React from 'react'


import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";

interface IDataTable {
  items: Array<any>;
  columns: Array<any>;
  onRowClick?: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void;
}

const DataTable: React.FC<IDataTable> = ({ columns, items, onRowClick }) => {
  console.log(items)

  const data = items.map(item =>
    Object.values(item)
  )

  console.log(data)

  const options: MUIDataTableOptions = {
    serverSide: true,
    onRowClick: onRowClick,
    selectableRows: 'none',
    selectableRowsHeader: false,
    textLabels: {
      body: {
        noMatch: "Nenhum resultado retornado",
        toolTip: "Ordenar",
      },
      pagination: {
        next: "Proxima pagina",
        previous: "Pagina anterior",
        rowsPerPage: "Linhas por pagina:",
        displayRows: "de",
      },
      toolbar: {
        search: "Procurar",
        downloadCsv: "Download CSV",
        print: "Imprimir",
        viewColumns: "Ver colunas",
        filterTable: "Filtrar colunas",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Resetar",
      },
      viewColumns: {
        title: "Colunas",
        titleAria: "Show/Hide Table Columns",
      },
      selectedRows: {
        text: "row(s) selected",
        delete: "Delete",
        deleteAria: "Delete Selected Rows",
      },
    }
  }


  return (
    <MUIDataTable
      title={"Profissionais"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

export default DataTable