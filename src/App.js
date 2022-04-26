import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home/Home";
import About from "./Components/Pages/About/About";
import Login from "./Components/Pages/Login/Login";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Service from "./Components/Pages/ServiceDetail/ServiceDetail";
import ServiceDetail from "./Components/Pages/ServiceDetail/ServiceDetail";
import Register from "./Components/Pages/Home/Register/Register";
import RequireAuth from "./Components/Pages/Login/RequireAuth";
import CheckOut from "./Components/Pages/Home/CheckOut/CheckOut";
import AddService from "./Components/Pages/Home/AddService/AddService";
import { Toaster } from "react-hot-toast";
import GoogleMap from "./Components/GoogleMap/GoogleMap";
import Direction from "./Components/Direction/Direction";
import ManageService from "./Components/Pages/ManageService/ManageService";
import Orders from "./Components/Pages/Orders/Orders";

function App() {
  return (
    <div>
      <Header></Header>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
        <Route path="/map" element={<GoogleMap></GoogleMap>}></Route>
        <Route path="/service/:id" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageService"
          element={
            <RequireAuth>
              <ManageService></ManageService>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
