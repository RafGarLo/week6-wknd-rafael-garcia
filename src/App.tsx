import { Layout } from "./infrasctructure/components/layout/layout";
import { AppRoutes } from "./infrasctructure/routes/app.routes";
function App() {
    return (
        <div className="App">
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </div>
    );
}

export default App;
