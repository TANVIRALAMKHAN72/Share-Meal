import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts.jsx/RootLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import AvailableFoods from "../Components/AvailableFoods";
import AddFood from "../Components/AddFood";
import ManageMyFoods from "../Components/ManageMyFoods";
import MyFoodRequest from "../Components/MyFoodRequest";
import PrivateRouters from "../Routers/PrivateRouters";
import FoodDetails from "../Pages/FoodDetails";
import FoodRequest from "../Pages/FoodRequest";
import BlogPage from "../Components/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        {
            index: true,
            element: <Home></Home>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/available-foods',
            element: <AvailableFoods></AvailableFoods>,
        },
        {
            path: '/add-food',
            element: <PrivateRouters><AddFood></AddFood></PrivateRouters>,
        },
        {
            path: '/manage-my-foods',
            element: <PrivateRouters><ManageMyFoods></ManageMyFoods></PrivateRouters>,
        },
        {
        path: "/manage-my-foods/:foodId",
        element: <PrivateRouters><ManageMyFoods></ManageMyFoods></PrivateRouters>,
      },
        {
            path: '/my-food-request',
            element: <PrivateRouters><MyFoodRequest></MyFoodRequest></PrivateRouters>,
        },
        {
            path: '/food-details/:id',
            element: <PrivateRouters><FoodDetails></FoodDetails></PrivateRouters>,
        },
        {
            path: '/request-food/:id',
            element: <FoodRequest></FoodRequest>,
        },
        {
            path: '/blog',
            element: <BlogPage></BlogPage>,
        },
    ]
  },
  {
    path: '*',
    element: <Error></Error>,
  },
]);

export default router;