import { Outlet } from "react-router";
import NavMenu from "./components/Shared/Nav/NavMenu";

function App() {

    return (
        <>
            <NavMenu />
            <main>
               <Outlet/>
            </main>

        </>
    )
}

export default App
