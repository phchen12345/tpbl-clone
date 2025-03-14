import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeComponent from "./components/Home-component";
import Schedule from "./components/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />}></Route>
          <Route path="/Schedule" element={<Schedule />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
