import { Navigate, Route, Routes } from "react-router-dom";
import Bedroom from "../../features/components/bedroom/bedroom";
import DetailPage from "../../features/components/detail.page/detail.page";
import HomePage from "../../features/components/home.page/home.page";
import LivingRoom from "../../features/components/living.room/living.room";
import OnSale from "../../features/components/on.sale/on.sale";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>} />

            <Route
                path="livingRoom"
                element={<LivingRoom></LivingRoom>}
            ></Route>

            <Route path="/bedroom" element={<Bedroom></Bedroom>}></Route>
            <Route
                path="/DetailPage"
                element={<DetailPage></DetailPage>}
            ></Route>
            <Route path="/onSale" element={<OnSale></OnSale>}></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
