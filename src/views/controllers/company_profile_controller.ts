import { Component } from "react";
import { IconCalling } from "../../assets";

interface IProps { }
interface IState {
    activeLink: number;

}

export class CompanyProfileController extends Component<IProps, IState> {
   
    state = {
        activeLink: 1,
    };

    handleGetActiveLink = (id: number) => {
        this.setState({activeLink: id})
    }
    
}
export default CompanyProfileController;
