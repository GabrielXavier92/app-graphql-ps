import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import GuardRoute from "./GuardRoute";
import Login from "../components/auth/Login";
import ForgotPassword from "../components/auth/ForgotPassword";
import Dashboard from "../components/dashboard";
import DoctorList from "../components/doctor/doctorList";
import DoctorForm from "../components/doctor/doctorForm";
import teste from "../components/teste";

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/login' component={Login} />
			<Route exact path='/forgot-password' component={ForgotPassword} />
			<GuardRoute exact={false} path='/dashboard' component={Dashboard} />;
			<Redirect to='/login' />
		</Switch>
	);
};

export const routes = [
	{
		key: 1,
		name: "Profissionais",
		path: "/dashboard/doctor-list",
		component: DoctorList,
		menu: true
	},
	{
		key: 2,
		name: "Novo Profissional",
		path: "/dashboard/doctor-form",
		component: DoctorForm,
		menu: false
	},
	{
		key: 3,
		name: "Editar Profissional",
		path: "/dashboard/doctor-form/:id",
		component: DoctorForm,
		menu: false
	},
	{ key: 4, name: "Teste", path: "/dashboard/teste", component: teste, menu: true }
];

export const DashboardRoutes = () => {
	return (
		<>
			{routes.map(({ key, path, component }) => (
				<GuardRoute key={key} exact={true} path={path} component={component} />
			))}
			<Redirect to='/dashboard/doctor-list' />
		</>
	);
};

export default Routes;
