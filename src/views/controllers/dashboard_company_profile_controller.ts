import { Component } from 'react';

interface IProps {

}

interface IState {
    status: number;
    location:string;
}

export class DashboardCompanyProfileController extends Component<IProps, IState> {
    componentDidMount(){
this.setState({location:window.location.pathname})      }
    state = {
        status: 1,
        location:''
    };

    //list
    handleShowSection = (number: number) => {
        this.setState({status: number});
    }
}
export default DashboardCompanyProfileController;


