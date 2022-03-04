import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Booking from "./Components/Booking/Booking";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Search from "./Components/Search/Search";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [booking, setBooking] = useState({});
  const [vehicles, setVehicles] = useState([]);
  return (
    <UserContext.Provider
      value={
        ([loggedInUser, setLoggedInUser],
        [booking, setBooking],
        [vehicles, setVehicles])
      }
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/booking/:transportID"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route path="/search/:transportID" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          {/* <Route path="/booking/:transportID" element={<Booking />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
