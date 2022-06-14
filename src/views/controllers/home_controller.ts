import { Component } from 'react';

interface IProps {

}

interface IState {
    more: boolean;
    selectText: string;
    select: string;
    valueText: string;
    search: string;
}

export class HomeController extends Component<IProps, IState> {

    state = {
        more: false,
        selectText: "",
        select: "",
        valueText: "",
        search: "",
    };

    //list
    handleBlurText = () => {
        this.setState({ more: true });
    }
    handleGetSelectText = (value: string) => {
        console.log(value);
        this.setState({ selectText: value });
    }
    handleGetSelect = (value: string) => {
        console.log(value);
        this.setState({ select: value });
    }
    handleGetValueText = (value: string) => {
        console.log(value);
        this.setState({ valueText: value });
    }
    handleGetResultSearch = (value: string) => {
        console.log(value);
        this.setState({ search: value });
    }
}
export default HomeController;


