import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="w-1/2 md:w-1/2 mx-auto">
        <Outlet />
      </main>
    </>
  );
}
