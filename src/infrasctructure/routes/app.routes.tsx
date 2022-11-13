import { Navigate, Route, Routes } from "react-router-dom";
import Bedroom from "../../features/components/bedroom.page/bedroom.page";
import DetailPage from "../../features/components/detail.page/detail.page";
import HomePage from "../../features/components/home.page/home.page";
import LivingRoomPage from "../../features/components/living.room.page/living.room.page";
import OnSale from "../../features/components/on.sale/on.sale";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>} />

            <Route
                path="livingRoom"
                element={<LivingRoomPage></LivingRoomPage>}
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
