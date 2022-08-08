import NotFound from "../views/containers/NotFound";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Contact from "../components/Home/Contact";
import Home from "../components/Home/Home";

//Dùng trong Router khi không login vẫn public được
const publicRouter = [
    { path : "/" , component:Home },
    { path : "/about" , component:About },
    { path : "/users" , component:Users },
    { path : "/*" , component:NotFound},
    { path : "/login" , component:Login},
    { path : "/signUp" , component:SignUp},
    { path : "/contact" , component:Contact},
]

//Dùng trong Router khi login mới có thể vô 
const provateRouter = [
    
]

export {
    publicRouter , provateRouter
}
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }