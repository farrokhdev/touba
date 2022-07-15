import { Component } from 'react';

interface IProps { }

interface IState {
    isShow: boolean;
}


export class ProductSingleController extends Component<IProps, IState> {

    state = {
        isShow: false,
    };

    test = "You are here: Touba >> Products";

    navigateToDetail = () => {
        // this.navigate('/detail-product')
        console.log(7)
    };

    showInquiry = () => {
        console.log('sal')
        this.setState({ isShow: !this.state.isShow })
    };

}
export default ProductSingleController;


