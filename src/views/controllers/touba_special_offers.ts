import { Component } from 'react';

interface IProps {

}

interface IState {
    showContent: boolean;
    activeTab: number;
}

export class ToubaSpecialOferControllers extends Component<IProps, IState> {

    state = {
        showContent: true,
        activeTab: 1,
    };

    text = "You are here: Touba >> Specaial Offers";

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
    
    test = (e: boolean) => {
      this.setState({ showContent: e });
    };


}
export default ToubaSpecialOferControllers;


