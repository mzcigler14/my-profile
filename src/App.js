import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Photos from "./pages/Photos";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

const App = () => {
  return (
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="photos" element={<Photos />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  );
}
export default App;
