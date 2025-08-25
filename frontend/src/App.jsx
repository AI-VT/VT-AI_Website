import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="site">
      <h1 className="brand-title">VT@AI</h1>
      <Header />
      <Outlet />  
    </div>
  );
}
