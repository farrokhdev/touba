import { Component } from "react";
import { IconCallSorme, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme } from "../../assets";


interface IProps { }
interface IState {
    activeLink: number;
    activeTab: number;
    certificateName: string;
    certificateCode: string;
    registerDate: string;
    expireDate: string;
    image: string;
    email:string;
    code:string;
    phone:string;
    timezone:string;
    suppiler:string;
}

export class CompanyProfileStartController extends Component<IProps, IState> {

    state = {
        activeLink: 1,
        activeTab: 1,
        certificateName: "",
        certificateCode: "",
        registerDate: "",
        expireDate: "",
        image: "",
        email:"",
        code: "98",
        phone: "",
        timezone:"GMT (+3:30)",
        suppiler:""
    };

    TEST_NAV_ITEM = [
        {
            title: "About Page",
            icon: `${IconPaperBlack}`,
            id: 1
        },
        {
            title: "Contact Us Page",
            icon: `${IconCallSorme}`,
            id: 2
        },
        {
            title: "Payments Setting",
            icon: `${IconWalletSorme}`,
            id: 3
        },
        {
            title: "Locations",
            icon: `${IconLocationSorme}`,
            id: 4
        },
        {
            title: "Visual Settings",
            icon: `${IconStarSorme}`,
            id: 5
        }
    ];
    

    items = [
        { name: "item1", id: 1 },
        { name: "item2", id: 2 },
        { name: "item3", id: 3 },
        { name: "item4", id: 4 },
    ]

    getActiveLink = (id: number) => {
        this.setState({ activeLink: id })
    };

    getActiveTab = (id: number) => {
        this.setState({ activeTab: id })
    };

    getCertificateCode = (text: string) => {
        this.setState({certificateCode: text})
    };

    getRegisterDate = (date: string) => {
        this.setState({registerDate: date})
    };

    getExpireDate = (date: string) => {
        this.setState({expireDate: date})
    };

    getImage = (image: string) => {
        this.setState({image: image})
    };

}
export default CompanyProfileStartController;

