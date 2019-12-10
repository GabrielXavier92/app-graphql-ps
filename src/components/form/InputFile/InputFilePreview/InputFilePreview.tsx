import React, { useMemo, useEffect, useState } from "react";
import { isEmpty } from "../../../../utils/object";
import { endsWithAny } from "../../../../utils/string";
import { ImageExtensions } from "../../../../utils/constants";
import Avatar from "src/Components/Avatar/Avatar";

interface IInputFilePreview {
	file?: (watch: any) => void;
}

const getPreviewFileStatus = file => {
	const isFile = typeof file !== "string";

	if (!isEmpty(file)) {
		const hasPreview = isFile
			? file[0].type.split("/")[0] === "image"
			: endsWithAny(ImageExtensions, file);

		return {
			hasPreview,
			isFile
		};
	}

	return {
		hasPreview: false,
		isFile
	};
};

const InputFilePreview: React.FC<IInputFilePreview> = ({ file }) => {
	const [preview, setPreview] = useState("");

	const { hasPreview, isFile } = useMemo(() => {
		return getPreviewFileStatus(file);
	}, [file]);

	useEffect(() => {
		if (hasPreview) {
			const url = isFile && file ? URL.createObjectURL(file[0]) : file;
			setPreview(url as string);
		}
		return () => {
			if (hasPreview && isFile && file) {
				URL.revokeObjectURL(file[0]);
			}
		};
	}, [file, hasPreview, isFile]);

	return hasPreview ? (
		<img className='mb-2' alt='' src={preview} height={128} width={128}></img>
	) : (
		<Avatar className='hot-avatar--xl rounded mb-2' />
	);
};

export default InputFilePreview;
