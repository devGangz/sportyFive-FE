import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import WebFont from "webfontloader"
import LogInPage from "./Pages/LogInPage";
import RegisterPage from "./Pages/RegisterPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import UserDetailPage from "./Pages/UserDetailPage";
import AdminPage from './Admin/Pages/adminPage'

function App() {
        useEffect(() => {
                WebFont.load({
                        google: {
                                families: ['Droid Sans', 'Montserrat', 'poppin']
                        }
                })
        }, [])

        return (
                <div className="App">
                        <Routes>
                                <Route path="/sportyFive-FE" element={<HomePage />}></Route>
                                <Route path="/sportyFive-FE/login" element={<LogInPage />}></Route>
                                <Route path="/sportyFive-FE/registerAccount" element={<RegisterPage />}></Route>
                                <Route path="/sportyFive-FE/forgotPassword" element={<ForgotPasswordPage />}></Route>
                                <Route path="/sportyFive-FE/userDetail/:paramUserName" element={<UserDetailPage />}></Route>
                                <Route path="/sportyFive-FE/admin" element={<AdminPage />}></Route>
                        </Routes>
                </div >
        );
}

export default App;


// /sportyFive-FE