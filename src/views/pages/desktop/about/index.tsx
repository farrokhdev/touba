import { BaseComponent } from "utilities_js";
import { ImageAboutusDesk, IconArrowLeftCircle, IconArrowRightCircle, IconAlibaba, IconArvan, IconDigikala, IconIranTalent, IconSnapp, IconArrowRightBlack, IconAboutUs } from "../../../../assets";
import { ComponentMission, ComponentOurTeam } from "../../../components/components";


interface IProps {}

interface IState {}

export default class AboutusPage extends BaseComponent<IProps, IState> {
  state: IState = {};
  render() {
    return (
      <div className="aboutus-Page ">
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
              <img src={IconAboutUs} alt="aboutus" />
            </div>
          </div>
        </div>
        <div className="mission-Container d-flex flex-column align-items-center justify-content-center">
          <div className="mission d-flex flex-column align-items-start justify-content-center">
            <span className="title mx-auto">Mission</span>
            <div className="mission-Childs d-flex flex-row align-items-start justify-content-center mx-auto">
              <div>
                <ComponentMission
                  title="Title Here"
                  desc=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation"
                />
              </div>
              <div style={{marginLeft:'2%'}}>
                <ComponentMission
                  title="Title Here"
                  desc=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation"
                />
              </div>

              <div style={{marginLeft:'2%'}}>
                <ComponentMission
                  title="Title Here"
                  desc=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation"
                />
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
            <ComponentOurTeam image="https://s6.uupload.ir/files/1_2g5u.jpg" />
            <ComponentOurTeam image="https://s6.uupload.ir/files/2_6ecs.jpg" />
            <ComponentOurTeam image="https://s6.uupload.ir/files/3_px29.jpg" />
            <ComponentOurTeam image="https://s6.uupload.ir/files/4_v1j5.jpg" />
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
