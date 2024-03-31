import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Portfolio from "./Components/Portfolio";
import Registration from "./Components/Registration";
import UserDetails from "./Components/UserDetails";


export const appRoutes = [

    {path:'/',element:<Login/>},
    {path:'/Registration',element:<Registration/>},
    {path:'/Portfolio',element:<Portfolio/>},
    {path:'/UserDetails',element:<UserDetails/>}
]

//how to make default route