
// export default MainLayout;
import { Outlet } from "react-router-dom"; // <- ye important
import TopBar from "../components/Navbar/TopBar";
import MainNavbar from "../components/Navbar/MainNavbar";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <MainNavbar />
      <Outlet /> {/* children ki jagah Outlet */}
    </>
  );
};

export default MainLayout;