import { Component } from 'react';

interface IProps {

}

interface IState {
    more: boolean;
}

export class HomeController extends Component<IProps, IState> {

    state = {
        more: false,
    };

    //list
    handleBlurText = () => {
        this.setState({more: true});
    }
}
export default HomeController;


