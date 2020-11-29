import App from "./App";
import Login from '../src/views/Login';
import Signup from '../src/views/Signup';
import PetPage from '../src/views/PetPage';

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "unsigned"
  },
  {
    path: "/signup",
    name: "SignUp",
    component: Signup,
    layout: "unsigned"
  },
  {
    path: "/home",
    name: "Home",
    component: App,
    layout: "main"
  },
  {
    path: "/pet/:id",
    name: "Pet",
    component: PetPage,
    layout: "main"
  },

];

export default routes;
