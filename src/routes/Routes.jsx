import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Checkout from '../pages/Checkout/Checkout';
import AddProduct from '../pages/AddProduct/AddProduct';
import Carts from '../pages/Carts/Carts';
import Orders from '../pages/Orders/Orders';

const myRoutes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/services",
                element : <Services />
            },
            {
                path : "/checkout",
                element : <Checkout />
            },
            {
                path : "/carts",
                element : <Carts />
            },
            {
                path : "/orders",
                element : <Orders />
            },
            {
                path : "/new-product",
                element : <AddProduct />
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/register",
                element : <Register />
            }
        ]
    }
])

export default myRoutes;