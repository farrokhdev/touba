import { Component } from 'react';

interface IProps {

}

interface IState {
    filter: number;
    activeTab: number;
}


export class ReviewController extends Component<IProps, IState> {

    state = {
        filter: 1,
        activeTab: 1,
    };

    handleShow = (e: number) => {
        this.setState({ filter: e });
    };
}
export default ReviewController;


