import {Outlet} from 'react-router-dom';
import React from 'react';
import Header from '../subcompo/header';
import Footer from '../subcompo/footer'
const Layout = () =>{
    return(
       <div>
        <Header/>

        <main>
            <Outlet/>
        </main>
        <Footer/>
       </div>
    )};
export default Layout;