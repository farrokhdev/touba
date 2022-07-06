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
    TEST_NAV_ITEM = [
        {
          title: "Basic Information",
          id: 0,
        },
        {
          title: "Other Details",
          id: 1,
        },
        {
          title: "Trade Information",
          id: 2,
        },
        {
          title: "Related Items",
          id: 3,
        },
      ];
  

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


