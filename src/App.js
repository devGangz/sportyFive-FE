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
                                <Route path="/" element={<HomePage />}></Route>
                                <Route path="/login" element={<LogInPage />}></Route>
                                <Route path="/registerAccount" element={<RegisterPage />}></Route>
                                <Route path="/forgotPassword" element={<ForgotPasswordPage />}></Route>
                                <Route path="/userDetail/:paramUserName" element={<UserDetailPage />}></Route>
                                <Route path="/admin" element={<AdminPage />}></Route>
                        </Routes>
                </div >
        );
}

export default App;
