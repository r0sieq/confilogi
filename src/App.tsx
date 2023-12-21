import Header from "./components/header/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home/Home";
import Footer from "./components/footer/Footer";

export type DeviceMode = "desktop" | "mobile";

export default function App(){
    return (
        <>
            <Header/>
            <Routes>
                <Route path="*" element={
                    <Home />
                }/>
            </Routes>
            <Footer/>
        </>
    )
}