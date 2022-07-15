import { Component } from 'react';

interface IProps { }

interface IState {
    id: number;
}

export class SideServiceController extends Component<IProps, IState> {

    state = {
        id: 4,
    };


}
export default SideServiceController;


