import { Component } from 'react';

interface IProps {

}

interface IState {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    confirmPassword: string;
}

export class RegisterControll extends Component<IProps, IState> {

    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        confirmPassword: "",
    };

    //list
    
}
export default RegisterControll;


