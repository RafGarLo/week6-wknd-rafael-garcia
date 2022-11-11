import { Navigate, Route, Routes } from "react-router-dom";
import Bedroom from "../../features/bedroom/bedroom";
import DetailPage from "../../features/detail.page/detail.page";
import HomePage from "../../features/home.page/home.page";
import LivingRoom from "../../features/living.room/living.room";
import OnSale from "../../features/on.sale/on.sale";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>} />

            <Route
                path="living-room"
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
