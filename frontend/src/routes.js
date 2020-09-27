import App from "./App";
import Login from '../src/views/Login';
import Signup from '../src/views/Signup';

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "main"
  },
  {
    path: "/signup",
    name: "SignUp",
    component: Signup,
    layout: "main"
  }
];

export default routes;
