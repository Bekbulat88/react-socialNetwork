import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import DialogContainer from "./components/Dialogs/DialogContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";



const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar />
        <div className="app-wrapper--content">
          <Routes>
            <Route
              path="/profile/:profileId?"
              element={
                <ProfileContainer/>
              }
            />
            <Route
              path="/messages"
              element={
              <DialogContainer/>
            }
            />
            <Route
              path="/users"
              element={
              <UsersContainer/>
            }
            />
             <Route
              path="/login"
              element={
              <Login/>
            }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
