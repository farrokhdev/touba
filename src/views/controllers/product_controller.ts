import { Component } from 'react';

interface IProps { }

interface IState {
}


export class ProductController extends Component<IProps, IState> {

    state = {

    };

    test = "You are here: Touba >> Products";

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

    navigateToDetail = () => {
        // this.navigate('/detail-product')
        console.log(7)
    }

}
export default ProductController;


