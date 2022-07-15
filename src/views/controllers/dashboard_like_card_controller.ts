import { Component } from 'react';
import { CHART } from '../components/chart';

interface IProps {
}

interface IState {
    filter: Number;
}

export class DashboardLikeCardControllre extends Component<IProps, IState> {

    state = {
        filter: 1,

    };

    TEST: CHART[] = [
        { name: "JAN", size: 20 },
        { name: "FEB", size: 30 },
        { name: "MAR", size: 40 },
        { name: "APR", size: 50 },
        { name: "MAY", size: 60 },
        { name: "JUN", size: 70 },
        { name: "JUL", size: 80 },
        { name: "AUG", size: 90 },
        { name: "SEP", size: 100 },
        { name: "OCT", size: 20 },
        { name: "NOV", size: 20 },
        { name: "DEC", size: 20 },
    ];

    handleShow = (e: Number) => {
        this.setState({ filter: e });
    }

    //list

}
export default DashboardLikeCardControllre;


