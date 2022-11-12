import { Footer } from "../../../features/footer/footer";
import Header from "../../../features/header/header";

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
}
