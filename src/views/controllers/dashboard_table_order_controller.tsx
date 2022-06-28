import { Component } from "react";

interface IProps {}

interface IState {
  filter: Number;
  navFilter: boolean;
}

export class DashboardTableOrderController extends Component<IProps, IState> {
  state = {
    filter: 1,
    navFilter: false,
  };
  handleShow = (e: Number) => {
    this.setState({ filter: e });
  };
  handleNavFilter = (e: boolean) => {
    this.setState({ navFilter: e });
  };

  //list
}
export default DashboardTableOrderController;
