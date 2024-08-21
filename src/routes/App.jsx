import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Care } from "../Pages/Care"
import { Shop } from "../Pages/shop"
import { Media } from "../Pages/Media"


export const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/care" element={<Care/>} />
        <Route path="/media" element={<Media/>}/>
      </Routes>
    )
}