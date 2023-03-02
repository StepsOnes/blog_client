import {
    BrowserRouter,
    createBrowserRouter, Navigate, Route,
    RouterProvider, Routes,
} from "react-router-dom";
import Main from "./components/wrappers/main.jsx";
import Home from "./pages/Home/Home.jsx";
import NavBarTop from "./components/NavBarTop/NavBarTop.jsx";
import Register from "./pages/Register/Register.jsx";
import Users from "./pages/Users/Users.jsx";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {changeAuth} from "./store/authSlice.js";
import Login from "./pages/Login/Login.jsx";
import PostCreate from "./pages/PostCreate/PostCreate.jsx";
import Cookies from "js-cookie";
import {PrivateRoute} from "./utils/routes/PrivateRoute.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import Post from "./components/Post/Post.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element:  <Home />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/users",
        element: (
            <PrivateRoute>
                <Users />
            </PrivateRoute>
        )
    },
    {
        path: "/login",
        element: <Login />,

    },
    {
        path: "/post/create",
        element: (
            <PrivateRoute>
                <PostCreate />
            </PrivateRoute>
        ),

    }
]);


const App = () => {
    const dispatch = useDispatch()
    const { isAuth } = useSelector(state => state.auth)
    const token = Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : ''

    useEffect(() => {
        try {
            if (token !== null && token.length > 0) {
                 dispatch(changeAuth(true))
            }
        } catch (err) {
            console.log(err)
        }
    }, [token])

  return (
      <BrowserRouter>
        <div className="App">

            <NavBarTop />

            <Main>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />

                    <Route path="/post/create" element={<PrivateRoute><PostCreate /></PrivateRoute>} />
                    <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
                    <Route path="/post/all" element={<PrivateRoute><Posts/></PrivateRoute>} />
                    <Route path="/post/:id" element={<PrivateRoute><PostPage/></PrivateRoute>} />

                </Routes>
            </Main>
        </div>
      </BrowserRouter>
  )
}
 //<RouterProvider router={router} />
export default App
