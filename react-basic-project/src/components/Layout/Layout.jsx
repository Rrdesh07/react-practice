import { Outlet } from "react-router-dom";
import Header from "./Header";
function Layout(){
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
    )
}

export default Layout;