import React from "react";

interface IInputMessage {
	hasError?: boolean;
	errorMessage?: string;
	hint?: string;
}

const InputMessage: React.FC<IInputMessage> = ({ hasError, errorMessage = "" }: IInputMessage) => {
	return (
		<div>
			<div className='invalid-feedback d-block'>
				<span>{hasError && errorMessage} </span>
			</div>
		</div>
	);
};

export default InputMessage;
