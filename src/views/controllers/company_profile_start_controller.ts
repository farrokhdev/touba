import { Component } from "react";


interface IProps { }
interface IState {
    activeLink: number;
    activeTab: number;
}

export class CompanyProfileStartController extends Component<IProps, IState> {

    state = {
        activeLink: 1,
        activeTab: 1,
    };

    handleGetActiveLink = (id: number) => {
        this.setState({ activeLink: id })
    };

    handleGetActiveTab = (id: number) => {
        this.setState({ activeTab: id })
    };
    
}
export default CompanyProfileStartController;

