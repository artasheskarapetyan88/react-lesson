import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from "./redux/configureStore";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Dialogs from "./components/dialogs/Dialogs";
import "./App.css";
import Users from "./components/users/Users";
import UsersListHw from "./components/users-list-hw/users-list-hw";
import UserPosts from "./components/users-list-hw/components/UserPosts";
import PostComents from "./components/users-list-hw/components/UserPosts/PostComents";
import UsersSearch from "./components/usersSearchPage/UsersSearch";
import PrivateRouter from "./Routers/PrivateRouter";
import ProtectedRout from "./Routers/ProtectedRout";
import Login from "./components/Login/Login";

const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-wrapper">
            <Routes>
              <Route element={<PrivateRouter />}>
                <Route path="/" element={<Profile />} />
                <Route path="/users" element={<Users />} />
                <Route path="/usersHw" element={<UsersListHw />} />
                <Route path="/postComments/:postId" element={<PostComents />} />
                <Route path="/userPosts/:userId" element={<UserPosts />} />
                <Route path="/userSearch/" element={<UsersSearch />} />
                <Route path="/dialogs" element={<Dialogs />} />
              </Route>
              <Route element={<ProtectedRout />}>
                <Route path="/login" element={<Login/>} />
              </Route>
              <Route path="*" element={<div>not found</div>}/>
              {/*<Route path='/news' element={<News/>}/>*/}
              {/*<Route path='/music' element={<Music/>}/>*/}
              {/*<Route path='/settings' element={<Settings/>}/>*/}
            </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
