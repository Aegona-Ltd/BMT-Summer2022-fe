import NotFound from "../views/containers/NotFound";
import Login from "../Auth/Login";

//Dùng trong Router khi không login vẫn public được
const publicRouter = [
    { path : "/" , component:Home },
    { path : "/about" , component:About },
    { path : "/users" , component:Users },
    { path : "/*" , component:NotFound},
    { path : "/login" , component:Login},
]

//Dùng trong Router khi login mới có thể vô 
const provateRouter = [
    
]

export {
    publicRouter , provateRouter
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }