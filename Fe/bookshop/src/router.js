import { Component } from "react";
import HomePage from "./pages/users/homePage";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/ProfilePage";

const rederUserRouter = () => {
    const userRouters = [
        {
            path:ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path:ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        }
      
    ]
    return (
        <MasterLayout>
        <Routes>
            {
                userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))
            }
        </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return rederUserRouter();
};

export default RouterCustom;