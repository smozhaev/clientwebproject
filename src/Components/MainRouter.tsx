import React  from 'react'
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Login from './Login';
import Nav from 'react-bootstrap/Nav';
import Registr from './Registr';
import PaginationPage from './Pagination';
// import { ARTEM_ROUTE, GENA_ROUTE, VLAD_ROUTE, OLEG_ROUTE } from './configs';
import Pricing from './Pricing';
import Features from './Features';

interface MyComponentProps {
    isAuth: boolean;
}

const MainRouter: React.FC<MyComponentProps> = (isAuth) => {
  
    const basedPath: RouteObject[] = [
      { path: "/login", element: <Login /> },
      { path: "/", element: <PaginationPage/> },
      { path: "/pricing", element: <Pricing/> },
      { path: "/registrate", element: <Registr/> },
      { path: "*", element: <Navigate to={'/'} replace />},
    ]

    const authPath: RouteObject[] = [
        { path: "/features" , element:  <Features/>},
    ]

    const resultPaths: RouteObject[] = basedPath

    if(isAuth){
        resultPaths.push(...authPath)
    }

    return useRoutes(resultPaths);
}

export default MainRouter;