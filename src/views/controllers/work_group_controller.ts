import { Component } from 'react';
import { IconWolf, ImageJuicer } from '../../assets';
import { CHART } from '../components/chart';

interface IProps {

}

interface IState {

}

export class WorkGroupController extends Component<IProps, IState> {

    state = {

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

    TEST_NAV_ITEM = [
        {
            title: "Last Activities",
            time: "2 MINS",
            id: 0
        },
        {
            title: "Group Title",
            time: "2 MINS",
            notification: 12,
            id: 1
        },
        {
            title: "Group Title",
            time: "2 MINS",
            notification: 7,
            id: 2
        },
        {
            title: "Group Title",
            time: "2 MINS",
            id: 3
        },
        {
            title: "Group Title",
            time: "2 MINS",
            id: 4
        },
        {
            title: "Group Title",
            time: "2 MINS",
            id: 5
        }
    ];

    ITEMS_CARD_CAHT = {
        icon: IconWolf,
        userName: "UserName",
        status: "Update an",
        type: "Excess Capacity",
        image: ImageJuicer,
        description: "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order",
        rate: 4.2,
        chart: this.TEST,
        amount: 200,
        price1: 5.00,
        price2: 4.00,
        price3: 3.20,
        time: "16:31",
    }

    //list

}
export default WorkGroupController;


