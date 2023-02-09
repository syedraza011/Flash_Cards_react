import { Routes,Route} from "react-router-dom";
import CardPage from "./components/cards/CardPage";
import Nav from "./components/Nav";
import AdminPage from "./components/admin/AdminPage";

function App() {

    return (
        <div className="App">
            <Nav/>
            <Routes>
                <Route element={<CardPage/>} path={"/"}/>
                <Route element={<AdminPage/>} path={"/admin"}/>
            </Routes>

        </div>
    );
}

export default App;
