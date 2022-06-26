import { Component } from 'react';

interface IProps {
}

interface IState {
    filter: Number;
}

export class DashboardLikeCardControllre extends Component<IProps, IState> {

    state = {
        filter: 1,
        
    };
    handleShow = (e:Number) => {
        this.setState({ filter: e });
    }

    //list
    
}
export default DashboardLikeCardControllre;


