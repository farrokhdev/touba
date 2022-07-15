import { Component } from 'react';

interface IProps { }

interface IState {
    selected: number;
    fakeList: any[];
}


export class HelpController extends Component<IProps, IState> {

    state = {
        selected: 1,
        fakeList: [
            {
                id: 1,
                Q: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh?",
                A: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
            },
            {
                id: 2,
                Q: "Lorem ipsum dolor sit amet, consectetuer , sed diam nonummy nibh?",
                A: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
            },
            {
                id: 3,
                Q: "Lorem ipsum, consectetuer , sed diam nonummy nibh?",
                A: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
            },
            {
                id: 4,
                Q: "Lorem dolor sit amet, consectetuer , sed diam nonummy nibh?",
                A: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
            },
        ],
    };


}
export default HelpController;


