import { Route, Routes } from "react-router-dom"

// components
import Layout from "./Components/Layout"
import About from "./pages/About"
import Home from "./pages/Home"
import { Users } from "./Components/Users"
import Contact from "./pages/Contact"
import {ShowUser} from "./Components/ShowUser"
import { Authtorization } from "./Authtorization"
import { Login } from "./Components/Login"
import { LoginProvider } from "./Components/Login"
import { UserProfileProvider } from "./Components/Users"

function App() {
  return (
    <div className="App">
       <UserProfileProvider>
          <LoginProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />}/>
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/users" element={<Users />} />
                </Route>
                <Route path="/login" element={<Login />}/>
                  <Route path="/showUser/:id" element={
                    <Authtorization>
                        <ShowUser />
                    </Authtorization>
                  } />
              </Routes>
          </LoginProvider>
        </UserProfileProvider>
    </div>
  );
}

export default App;