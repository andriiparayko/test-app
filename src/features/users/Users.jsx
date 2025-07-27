import { Navigate, Route, Routes } from "react-router-dom";

import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";

const Users = () => (
  <Routes>
    <Route index element={<UserList />} />
    <Route path=":id" element={<UserDetails />} />
    <Route path="*" element={<Navigate to="" />} />
  </Routes>
);

export default Users;
