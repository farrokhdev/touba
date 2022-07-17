import { Component } from "react";

interface IProps {}
interface IState {
  active: number;
}

export class BasicInformationController extends Component<IProps, IState> {
  

  state = {
   active:0
  };
}
export default BasicInformationController;
