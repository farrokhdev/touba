import { Component } from 'react';

interface IProps {}

interface IState {
  fakeList: any;
}


export class MembershipController extends Component<IProps, IState> {

    state = {
        fakeList: [
          {
            id: 1,
            plan: "Free Package",
            price: 0,
            one: 10,
            two: 10,
            three: "5 / Month",
            four: "5 / Month",
            five: "5 / Month",
            six: "",
            seven: "5 / Month",
            offer: false,
          },
          {
            id: 2,
            plan: "Bronze",
            price: 300,
            one: "Unlimited",
            two: "Unlimited",
            three: "Unlimited",
            four: "Unlimited",
            five: "Unlimited",
            six: 3,
            seven: "Unlimited",
            offer: false,
          },
          {
            id: 3,
            plan: "Silver",
            price: 900,
            one: "Unlimited",
            two: "Unlimited",
            three: "Unlimited",
            four: "Unlimited",
            five: "Unlimited",
            six: 5,
            seven: "Unlimited",
            offer: false,
          },
          {
            id: 4,
            plan: "Golden",
            price: 1700,
            one: "Unlimited",
            two: "Unlimited",
            three: "Unlimited",
            four: "Unlimited",
            five: "Unlimited",
            six: "Unlimited",
            seven: "Unlimited",
            offer: true,
          },
          {
            id: 5,
            plan: "Diamond",
            price: 3000,
            one: "Unlimited",
            two: "Unlimited",
            three: "Unlimited",
            four: "Unlimited",
            five: "Unlimited",
            six: "Unlimited",
            seven: "Unlimited",
            offer: false,
          },
        ],
      };

    
}
export default MembershipController;


