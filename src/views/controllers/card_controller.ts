import { Component } from 'react';

interface IProps {

}

interface IState {
    isShow: boolean;
}


export class CardController extends Component<IProps, IState> {

    state = {
        isShow: false,
    };

    TEST = [
        { quantity: 1, price: 100 },
        { quantity: 1, price: 310 },
        { quantity: 1, price: 401 },
    ];

    test = "You are here: Touba >> Cart";

    showInquiry = () => {
        this.setState({ isShow: !this.state.isShow });
    };

}
export default CardController;


