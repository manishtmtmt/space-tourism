import Crew from "@/pages/Crew";
import Destination from "@/pages/Destination";
import Home from "@/pages/Home"
import Technology from "@/pages/Technology";
import { Route, Routes } from "react-router-dom"

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default MainRoute