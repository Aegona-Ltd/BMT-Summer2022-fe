import NotFound from "../views/containers/NotFound";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Contact from "../components/Home/Contact";
import Home from "../components/Home/Home";

const publicRouter = [
    { path : "/" , component:Home },
    { path : "/about" , component:About },
    { path : "/users" , component:Users },
    { path : "/*" , component:NotFound},
    { path : "/login" , component:Login },
    { path : "/signUp" , component:SignUp},
    { path : "/contact" , component:Contact , layout:null},
]


export {
    publicRouter 
}
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return (
      <div>
        <About></About>
        <div>Users</div>
      </div>
    );
  }