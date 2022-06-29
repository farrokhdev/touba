import { Component } from 'react';

interface IProps {

}

interface IState {
    active: number;
}

export class DashboarPageController extends Component<IProps, IState> {

    state = {
        active: 1,

    };

    //list
    handleActiveTab = (number: number) => {
        this.setState({active: number});
    }
}
export default DashboarPageController;


