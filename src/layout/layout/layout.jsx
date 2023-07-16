import React from 'react';
import { Outlet } from "react-router-dom";
import './layout.css';
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;