import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const DashboardLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard/ourproperties");
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {/* SideBar Navigation */}
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "20%",
          borderRight: "1px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h1>Dashboard</h1>
        <NavLink to="/dashboard/ourproperties">Our Properties</NavLink>
        <NavLink to="/dashboard/news">News</NavLink>
        <NavLink to="/dashboard/mls">MLS</NavLink>
      </div>
      <div
        style={{
          height: "100%",
          width: "80%",
          marginLeft: "20%",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};
