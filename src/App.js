import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Photos from "./pages/Photos";

const App = () => {
  return (
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photos" element={<Photos />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  );
}
export default App;
