import { Component } from 'react';

interface IProps {

}

interface IState {
    status: number;
    location:string;
    show:number;
    isShow: number;

}

export class DashboardCompanyProfileController extends Component<IProps, IState> {
    componentDidMount(){
this.setState({location:window.location.pathname})      }
    state = {
        status: 1,
        location:'',
        show:0,
        isShow:0,   
     };
     TEST = [
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
        this.setState({show: number});
    }
}
export default DashboardCompanyProfileController;


