import { Component } from 'react';

interface IProps {

}

interface IState {
    status: number;
    location:string;
    show:number
}

export class DashboardCompanyProfileController extends Component<IProps, IState> {
    componentDidMount(){
this.setState({location:window.location.pathname})      }
    state = {
        status: 1,
        location:'',
        show:0
    };
  

    //list
    handleShowSection = (number: number) => {
        this.setState({status: number});
    }
    handleShowSideNavItem = (number: number) => {
        console.log("s",number)
        this.setState({show: number});
    }
}
export default DashboardCompanyProfileController;


