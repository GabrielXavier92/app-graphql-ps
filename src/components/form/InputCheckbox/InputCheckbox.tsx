import React from "react";
import { InputMessage } from "..";
import Checkbox from '@material-ui/core/Checkbox';

export interface IInputCheckbox {
	name: string;
	label?: string;
	hasError?: boolean;
	errorMessage?: string;
	inputClassName?: string;
	innerRef?: any;
	setValue?: any;
	watch?: (watch: any) => void;
}


const InputCheckbox: React.FC<IInputCheckbox> = ({
	name,
	// label = "CheckBox",
	hasError = false,
	errorMessage,
	// inputClassName = "",
	innerRef,
	watch,
	setValue
}) => {

	const handleClick = () => {
		setValue(name, !watch);
	};

	return (
		<div>
			<Checkbox
				// checked={state.checkedB}
				onClick={handleClick}
				name={name}
				ref={innerRef}
				value="checkedB"
				color="primary"
				inputProps={{
					'aria-label': 'secondary checkbox',
				}}
			/>

			{/* <div className='hot-custom-control hot-custom-checkbox hot-custom-control'>
				<input name={name} ref={innerRef} type='checkbox' className={className} />
				<label onClick={handleClick} className='hot-custom-control__label' htmlFor={name}>
					{label}
				</label>
			</div> */}
			<InputMessage hasError={hasError} errorMessage={errorMessage} />
		</div>
	);
};

export default InputCheckbox;
