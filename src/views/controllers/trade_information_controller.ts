import { Component } from "react";

interface IProps {}
interface IState {
  active: number;
  tab: boolean;

}

export class TradeInformationController extends Component<IProps, IState> {
  

  state = {
   active:0,
   tab:false
  };
}
export default TradeInformationController;
