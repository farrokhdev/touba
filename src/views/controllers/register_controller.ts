import { Component } from 'react';

interface IProps {

}

interface IState {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    code: string | number;
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
        code: 0,
    };

    //list
    
}
export default RegisterControll;


