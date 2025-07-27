import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import Users from "./features/users";
import About from "./features/about";

const App = () => (
  <Routes>
    <Route
      path=""
      element={<Layout />}
      errorElement={<h2>Something went wrong. Please try again later.</h2>}
    >
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/*" element={<Users />} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Route>
  </Routes>
);

export default App;
