import { IForm } from "../form/FormBuilder/interfaces";

export const form: Array<IForm> = [
	{
		validations: { required: true },
		type: "input",
		formType: {
			id: "name",
			name: "name",
			label: "Nome",
			xs: 12,
			sm: 6,
			helperText: "Campo nome obrigatorio"
		}
	},
	{
		type: "input",
		formType: {
			id: "cro",
			name: "cro",
			label: "CRO",
			type: "number",
			xs: 12,
			sm: 6
		}
	},

	{
		type: "select",
		formType: {
			id: "gender",
			name: "gender",
			label: "Genero",
			xs: 12,
			sm: 6,
			helperText: "Cuzinho",
			options: [
				{ value: "MASCULINO", label: "Masculino" },
				{ value: "FEMININO", label: "Feminino" }
			]
		}
	},
	{
		type: "select",
		formType: {
			id: "status",
			name: "status",
			label: "Status",
			xs: 12,
			sm: 6,
			options: [
				{ value: "true", label: "Ativo" },
				{ value: "false", label: "Inativo" }
			]
		}
	}
];
