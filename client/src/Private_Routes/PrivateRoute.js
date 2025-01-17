import React from 'react'

import {Outlet, Navigate} from 'react-router-dom'

function PrivateRoute_() {
	const isAuth = localStorage.getItem("token");
	return isAuth ? <Outlet /> : <Navigate to='/'/>
}

export default PrivateRoute_