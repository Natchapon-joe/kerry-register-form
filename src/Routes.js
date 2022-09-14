import React from "react";
import {Routes as ReactRoutes, Route, BrowserRouter,Navigate} from 'react-router-dom';
import Registersuccess from "./components/Registersuccess";
import Kerryform from "./components/Kerryform";

const Routes = () =>{
  return(
    <BrowserRouter>
      <ReactRoutes>
          <Route path='/' element={<Navigate to='/Kerryform' />} />
          <Route path='/registersuccess' element={<Registersuccess/>} />
          <Route path='/Kerryform' element={<Kerryform />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes ;