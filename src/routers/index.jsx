import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import PromotionPage from "../pages/PromotionPage";
import DepositPage from "../pages/DepositPage";
import BankingPage from "../pages/BankingPage";
import WithDrawPage from "../pages/WithDrawPage";
import ProfilePage from "../pages/ProfilePage";
import TransactionsPage from "../pages/TransactionsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import GamesPage from "../pages/GamesPage";
import UpdateProfilePage from "../pages/UpdateProfilePage";
import GameLogs from "../pages/GameLogs";

const routers=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
              index:true,
              element:<HomePage/>  
            },
            {
                path:'/promotion',
                element:<PromotionPage/>  
            },
            {
                path:'/deposit',
                element:<DepositPage/>  
            },
            {
                path:'/banking',
                element:<BankingPage/>  
            },
            {
                path:'/with-draw',
                element:<WithDrawPage/>  
            },
            {
                path:'/profile',
                element:<ProfilePage/>  
            },
            {
                path:'/transactions',
                element:<TransactionsPage/>  
            },
            {
                path: '/game_logs',
                element: <GameLogs />
            },
            {
                path:'/login',
                element:<LoginPage/>  
            },
            {
                path:'/register',
                element:<RegisterPage/>  
            },
            {
                path:'/games',
                element:<GamesPage/>  
            },
            {
                path:'/update-profile',
                element:<UpdateProfilePage/>  
            }
        ]
    }
])
export default routers;