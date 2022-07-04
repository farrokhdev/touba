import { ChangeEvent, Component } from "react";
import { IconCalling, IconCallSorme, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme } from "../../assets";

interface IProps { }
interface IState {
    activeLink: number;
    image: File | string;
    activeTab: number;
    modalDelete: boolean;
    modalDescription: boolean;
    getDiscription: string;
    description: string;
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
        activeTab: 1,
        modalDelete: false,
        modalDescription: false,
        getDiscription: "",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
    };

    handleGetActiveLink = (id: number) => {
        this.setState({ activeLink: id })
    }

    handleGetImage = (event: ChangeEvent<HTMLInputElement>) => {
        const files = (event.currentTarget as HTMLInputElement).files;
        if (files && files.length > 0) {
            this.setState({ image: URL.createObjectURL(files[0]) });
        }
        console.log(this.state.image);
    };

    handleDeleteImage = () => {
        this.setState({ modalDelete: true })
        this.setState({ image: "" })
    };

    handleGetActiveTab = (id: number) => {
        this.setState({ activeTab: id })
    };

    handleShowModalDelete = () => {
        this.setState({ modalDelete: true })
    };

    handleCloseModalDelete = () => {
        this.setState({ modalDelete: false })
    };

    handleShowModalDescription = () => {
        this.setState({ modalDescription: true })
    };

    handleCloseModalDescription = () => {
        this.setState({ modalDescription: false })
    };

    handleSubmitChangeDescription = () => {
        this.setState({description: this.state.getDiscription});
        this.setState({ modalDescription: false });
    };
    
    handleGetDescription = (text: string) => {
        this.setState({getDiscription: text})
    }
    

}
export default CompanyProfileController;
