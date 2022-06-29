import { Component } from "react";

interface IProps {}
interface IState {
  email: string;
  password: string;
}

export class LoginControll extends Component<IProps, IState> {
  routeHome = () => {
    localStorage.setItem("token", "true");
  };

  state = {
    email: "",
    password: "",
  };
}
export default LoginControll;
