import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

interface ICustomRow {
	data: any;
	onRowClick?: (any) => void;
	onEdit?: (any) => void;
	onDelete?: (any) => void;
}
const CustomRow: React.FC<ICustomRow> = ({ data, onRowClick, onEdit, onDelete }: ICustomRow) => {
	// Remove the last item off array
	data.pop();

	const handleClick = () => {
		if (onRowClick) onRowClick(data);
	};

	const handleEdit = () => {
		if (onEdit) onEdit(data);
	};

	const handleDelete = () => {
		if (onDelete) onDelete(data);
	};

	return (
		<TableRow onClick={handleClick}>
			{data!.map((item, index) => {
				return index > 0 ? <TableCell align='left'>{item}</TableCell> : null;
			})}
			<TableCell align='left'>
				<Button
					style={{
						marginRight: "10px"
					}}
					onClick={handleEdit}
					variant='contained'
					color='primary'
					size='small'
				>
					<EditIcon />
				</Button>
				<Button onClick={handleDelete} variant='contained' color='secondary' size='small'>
					<DeleteIcon />
				</Button>
			</TableCell>
		</TableRow>
	);
};

export default CustomRow;
