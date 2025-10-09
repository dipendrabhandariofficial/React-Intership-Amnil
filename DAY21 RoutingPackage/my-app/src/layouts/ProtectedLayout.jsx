import { Outlet, redirect } from "react-router-dom";

export const requireAuth = () => {
  const user = sessionStorage.getItem("user");
  if (!user) {
    throw redirect("/login");
  }
  return null;
};

const ProtectedLayout = () => {
  return (
    <div>
      <Outlet /> {/* Protected pages like /home */}
    </div>
  );
};

export default ProtectedLayout;
