import { Component } from "react";

interface IProps {}
interface IState {
  active: number;
  tab: boolean;

}

export class OtherDetailController extends Component<IProps, IState> {
  

  state = {
   active:0,
   tab:false
  };
}
export default OtherDetailController;
