import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/fonts.css';
import './styles/reset.css';
import './styles/common.css';
import Home from "./pages/home/home";
import Layout from "./layout/layout/layout";
import Cart from "./pages/cart/cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Route>
		</Routes>
	</BrowserRouter>
);