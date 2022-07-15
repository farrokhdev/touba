import { Component } from "react";

interface IProps {}

interface IState {
  filter: Number;
  navFilter: number;
}

export class DashboardTableOrderController extends Component<IProps, IState> {
  state = {
    filter: 1,
    navFilter: 1,
  };
  handleShow = (e: Number) => {
    this.setState({ filter: e });
  };
  

  //list
}
export default DashboardTableOrderController;
