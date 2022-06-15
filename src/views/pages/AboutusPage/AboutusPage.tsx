import { BaseComponent } from "utilities_js";
import {
  IconAlibaba,
  IconArrowLeftCircle,
  IconArrowRightBlack,
  IconArrowRightCircle,
  IconArvan,
  IconCostomer,
  IconDashedCricle,
  IconDigikala,
  IconIncome,
  IconIranTalent,
  IconProduct,
  IconSnapp,
  ImageAboutus,
  ImageAboutusDesk,
} from "../../../assets";
import aboutUs from '../../../assets/images/aboutAus.svg'

interface IProps {}

interface IState {}

export default class AboutusPage extends BaseComponent<IProps, IState> {
  state: IState = {};
  render() {
    return (
      <div className="aboutus-Page w-100">
        <div className="section1 d-flex flex-row align-items-center ">
          <div className="desc d-flex flex-column  justify-content-center ">
            <span>
              Who
              <br /> We Are?
            </span>
            <p>
              Providing specialized services for holding exhibitions. Providing
              specialized services related to business trips, attending seminars
              and workshops.
            </p>
          </div>
          <div className="img-Container d-flex flex-row align-items-center">
            <div className="d-flex flex-row align-items-center">
              <img src={aboutUs} alt="aboutus" />
            </div>
          </div>
        </div>
        <div className="mission-Container d-flex flex-column align-items-center justify-content-center">
          <div className="mission d-flex flex-column align-items-start justify-content-center">
            <span className="title mx-auto">Mission</span>
            <div className="mission-Childs d-flex flex-row align-items-start justify-content-center mx-auto">
              <div className="mission-Child">
                <div className="d-flex flex-column align-items-start justify-content-between">
                  <img src={IconCostomer} alt="costomer" />
                  <span>Title Here</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation
                </p>
              </div>
              <div className="mission-Child">
                <div className="d-flex flex-column align-items-start justify-content-between">
                  <img src={IconIncome} alt="income" />
                  <span>Title Here</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation
                </p>
              </div>
              <div className="mission-Child">
                <div className="d-flex flex-column align-items-start justify-content-between">
                  <img src={IconProduct} alt="product" />
                  <span>Title Here</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="describtion d-flex flex-row align-items-center justify-content-between mx-auto ">
          <div>
            <span>
              How
              <br /> We Work?
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
              <br />
              <br /> mmy aliquip ex ea commodo consequat. Duis autem vel eum
              iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore te feugait nulla
              facilisi.
            </p>
          </div>
          <div>
            <img src={ImageAboutusDesk} alt="desk" />
          </div>
        </div>
        <div className="ourteam">
          <div className="background"></div>
          <div className="content d-flex flex-row justify-content-between ">
            <div className="ourteam-Desk d-flex flex-column justify-content-between">
              <span>
                Our
                <br /> Team
              </span>
              <span>
                Providing specialized services
                <br /> for holding exhibitions.
              </span>
              <div className="my-4">
                <button>
                  <img src={IconArrowLeftCircle} alt="arrow" />
                </button>
                <button>
                  <img src={IconArrowRightCircle} alt="arrow" />
                </button>
              </div>
            </div>
            <div className="team-Member">
              <img src="https://s6.uupload.ir/files/1_2g5u.jpg" alt="member" />
              <div className="d-flex flex-column justify-content-end">
                <span>Name Here</span>
                <span>Position</span>
              </div>
            </div>
            <div className="team-Member">
              <img src="https://s6.uupload.ir/files/2_6ecs.jpg" alt="member"/>
              <div className="d-flex flex-column justify-content-end">
                <span>Name Here</span>
                <span>Position</span>
              </div>
            </div>
            <div className="team-Member">
              <img src="https://s6.uupload.ir/files/3_px29.jpg" alt="member"/>
              <div className="d-flex flex-column justify-content-end">
                <span>Name Here</span>
                <span>Position</span>
              </div>
            </div>
            <div className="team-Member">
              <img src="https://s6.uupload.ir/files/4_v1j5.jpg" alt="member"/>
              <div className="d-flex flex-column justify-content-end">
                <span>Name Here</span>
                <span>Position</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sponsors d-flex flex-column align-items-center mx-auto">
          <span>Our Sponsors</span>
          <div className="d-flex flex-row align-items-center justify-content-around">
            <img src={IconAlibaba} alt="alibaba" />
            <img src={IconArvan} alt="arvan" />
            <img src={IconDigikala} alt="digikala" />
            <img src={IconIranTalent} alt="irantalent" />
            <img src={IconSnapp} alt="snapp" />
            <button>
              <img src={IconArrowRightBlack} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
