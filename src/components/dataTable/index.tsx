import React from "react";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { useStyles } from "./styles";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

import Loading from "../loading";
import CustomRow from "./customRow";

interface IDataTable {
	title: string;
	items: Array<any>;
	columns: Array<any>;
	loading?: boolean;
	onAdd?: (...args: any[]) => void;
	onRowClick?: (any) => void;
	onEdit?: (any) => void;
	onDelete?: (any) => void;
}

const DataTable: React.FC<IDataTable> = ({
	title,
	columns,
	items,
	loading,
	onAdd,
	onEdit,
	onDelete
}) => {
	const classes = useStyles();

	const data = items.map(item => Object.values(item));

	const options: MUIDataTableOptions = {
		filterType: "dropdown",
		selectableRows: "none",
		selectableRowsHeader: false,
		customRowRender: data => {
			const rows: Array<any> = data;
			return <CustomRow data={rows} onEdit={onEdit} onDelete={onDelete} />;
		},

		textLabels: {
			body: {
				noMatch: "Nenhum resultado retornado",
				toolTip: "Ordenar"
			},
			pagination: {
				next: "Proxima pagina",
				previous: "Pagina anterior",
				rowsPerPage: "Linhas por pagina:",
				displayRows: "de"
			},
			toolbar: {
				search: "Procurar",
				downloadCsv: "Download CSV",
				print: "Imprimir",
				viewColumns: "Ver colunas",
				filterTable: "Filtrar colunas"
			},
			filter: {
				all: "Todos",
				title: "Filtros",
				reset: "Resetar"
			},
			viewColumns: {
				title: "Colunas",
				titleAria: "Show/Hide Table Columns"
			},
			selectedRows: {
				text: "row(s) selected",
				delete: "Delete",
				deleteAria: "Delete Selected Rows"
			}
		}
	};

	return (
		<div className={classes.table}>
			{loading && <Loading />}
			<Grid className={classes.actionButtons} justify='flex-end' container>
				<Fab color='primary' aria-label='add' onClick={onAdd}>
					<AddIcon />
				</Fab>
			</Grid>
			<MUIDataTable title={title} data={data} columns={columns} options={options} />
		</div>
	);
};

export default DataTable;
