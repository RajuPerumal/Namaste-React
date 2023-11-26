import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import AppLayout from "./Applayout"
import Header from "./header"
import UserForm from "./TNMDA"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Contact from "./Contact"
// import About from "./About"
import Error from "./Error"
import RestaurantMenu from "./RestaurantMenu"
import { Provider } from "react-redux"
import store from "./store"
import Cart from "./Cart"

const App = () => {
    return (
        <Provider store={store}>
        
        <Header/>
        <Outlet/>
        
        </Provider>
    ) 
}

const About = lazy(()=> import("./About"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<AppLayout/>,
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Render any JSX here</h1>}>  <About/>    </Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
        ]
    },

])

    const root = ReactDOM.createRoot(document.getElementById('root'))   
root.render(<RouterProvider router={appRouter}/>)
// root.render(<UserForm/>)

//const head = React.createElement('h1',{id:"title"},"Heading 1")
    //const head1 = React.createElement('h2',{id:"h2"},"Heading 2")
    //const container = React.createElement('div',{id:"container"},[head,head1])