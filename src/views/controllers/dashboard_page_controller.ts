import { Component } from 'react';

interface IProps {

}

interface IState {
    active: number;
    activeLink :number;
    filter:number;
}

export class DashboarPageController extends Component<IProps, IState> {

    state = {
        active: 1,
        activeLink:1,
        filter: 1,

    };

    //list
    handleActiveTab = (number: number) => {
        this.setState({active: number});
    }
    handleGetActiveLink = (id: number) => {
        this.setState({ activeLink: id });
      };
      handleShow = (e: number) => {
        this.setState({ filter: e });
      };
}
export default DashboarPageController;


