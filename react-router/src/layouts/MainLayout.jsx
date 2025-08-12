
import {Outlet} from 'react-router-dom'
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const MainLayout = () => {
   return(
     <>
        <Header/>
        <main className="flex-1">
            <Outlet/>
        </main>
        <Footer/>
    </>
   )
}

export default MainLayout