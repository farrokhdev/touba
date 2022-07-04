import { ChangeEvent, Component } from "react";
import { IconCalling, IconCallSorme, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme } from "../../assets";

interface IProps { }
interface IState {
    activeLink: number;
    image: File | string;
}


export const TEST_NAV_ITEM = [
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
        title: "Payments Setting",
        icon: `${IconLocationSorme}`,
        id: 4
    },
    {
        title: "Visual Settings",
        icon: `${IconStarSorme}`,
        id: 5
    }
];

export class CompanyProfileController extends Component<IProps, IState> {
   
    state = {
        activeLink: 1,
        image: '',
    };

    handleGetActiveLink = (id: number) => {
        this.setState({activeLink: id})
    }

    handleGetImage = (event: ChangeEvent<HTMLInputElement>) => {
        const files = (event.currentTarget as HTMLInputElement).files;
        if (files && files.length > 0) {
            this.setState({ image:  URL.createObjectURL(files[0]) });
        }
        console.log(this.state.image);
    };
    
    // handleDeleteImage = (name: any) => {
    //     this.setState({ image: this.state.images.filter(image => image !== name) })
    // }
    
}
export default CompanyProfileController;
