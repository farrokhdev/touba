import { BaseComponent } from "utilities_js";
import { IconArrowGreen, IconHelpBanner } from "../../../assets";
import QuestionAnswer from "../../components/question_answer";

interface IProps {}
interface IState {
  selected: number;
  fakeList: any[];
}

export default class MembershipPage extends BaseComponent<IProps, IState> {
  state: IState = {
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

  render() {
    const Q_A = () => {
      if (this.state.selected == 1) {
        return (
          <>
            <QuestionAnswer text={this.state.fakeList[0]} />
            <QuestionAnswer text={this.state.fakeList[1]} />
            <QuestionAnswer text={this.state.fakeList[2]} />
            <QuestionAnswer text={this.state.fakeList[3]} />
          </>
        );
      } else if (this.state.selected == 2) {
        return (
          <>
            <QuestionAnswer text={this.state.fakeList[0]} />
            <QuestionAnswer text={this.state.fakeList[1]} />
          </>
        );
      } else {
        return (
          <>
            <QuestionAnswer text={this.state.fakeList[2]} />
            <QuestionAnswer text={this.state.fakeList[3]} />
          </>
        );
      }
    };
    return (
      <div className="help-Page w-100 d-flex flex-column align-items-center ">
        <div className="w-100 green-Background d-flex flex-column align-items-center ">
          <span className="mt-4">Help</span>
        </div>
        <div className="w-100 help-Content d-flex flex-column align-items-center ">
          <video controls>
            <source />
          </video>
          <div className="w-100 d-flex flex-column align-items-center mt-3">
            <span className="title">FAQs</span>
            <span className="desc mb-4">Find your questions answer here</span>
            <div className=" faq-Container d-flex flex-row">
              <div className="faq-Sidebar d-flex flex-column align-items-start mx-4">
                <button
                  className={
                    this.state.selected === 1
                      ? "selected d-flex justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 1 })}
                >
                  How to sell Products
                  <img
                    src={IconArrowGreen}
                    className={this.state.selected === 1 ? "d-flex" : "d-none"}
                  />
                </button>
                <button
                  className={
                    this.state.selected === 2
                      ? "selected d-flex flex-row justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 2 })}
                >
                  Excess Capacity
                  <img
                    src={IconArrowGreen}
                    className={this.state.selected === 2 ? "d-flex" : "d-none"}
                  />
                </button>
                <button
                  className={
                    this.state.selected === 3
                      ? "selected d-flex flex-row justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 3 })}
                >
                  Logistics
                  <img
                    src={IconArrowGreen}
                    className={this.state.selected === 3 ? "d-flex" : "d-none"}
                  />
                </button>
                <button
                  className={
                    this.state.selected === 4
                      ? "selected d-flex flex-row justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 4 })}
                >
                  Payments
                  <img
                    src={IconArrowGreen}
                    className={this.state.selected === 4 ? "d-flex" : "d-none"}
                  />
                </button>
                <button
                  className={
                    this.state.selected === 5
                      ? "selected d-flex flex-row justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 5 })}
                >
                  Support Ways
                  <img
                    src={IconArrowGreen}
                    className={this.state.selected === 5 ? "d-flex" : "d-none"}
                  />
                </button>
              </div>
              <div className="faq-content">{Q_A()}</div>
            </div>
          </div>
          <div className="banner d-flex flex-row align-items-center justify-content-around my-5">
            <div className="content-Banner d-flex flex-column justify-content-between">
              <span>
                Didn’t find
                <br /> your answer?
              </span>
              <span>
                You can contact us and ask your question, we will anwer you as
                soon as possible!
              </span>
              <button>Contact Us</button>
            </div>
            <img src={IconHelpBanner} />
          </div>
        </div>
      </div>
    );
  }
}
