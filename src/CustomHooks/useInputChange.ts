import { useEffect } from "react";

const useInputChange = (ref, onChange, name) => {
	useEffect(() => {
		const handleChange = ({ detail }) => {
			onChange(name, detail.value);
		};

		const current = ref.current;
		current.addEventListener("change", handleChange);
		return () => {
			current.removeEventListener("change", handleChange);
		};
	});
};

export default useInputChange;
