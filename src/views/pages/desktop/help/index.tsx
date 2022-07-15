import { BaseComponent } from "utilities_js";
import { IconArrowGreen, IconHelpBanner } from "../../../../assets";
import QuestionAnswer from "../../../components/question_answer";
import HelpController from "../../../controllers/help_controller";



export default class Help extends HelpController {


  render() {
    const {
      selected,
      fakeList,
    } = this.state;
    const Q_A = () => {
      if (selected == 1) {
        return (
          <>
            <QuestionAnswer text={fakeList[0]} />
            <QuestionAnswer text={fakeList[1]} />
            <QuestionAnswer text={fakeList[2]} />
            <QuestionAnswer text={fakeList[3]} />
          </>
        );
      } else if (selected == 2) {
        return (
          <>
            <QuestionAnswer text={fakeList[0]} />
            <QuestionAnswer text={fakeList[1]} />
          </>
        );
      } else {
        return (
          <>
            <QuestionAnswer text={fakeList[2]} />
            <QuestionAnswer text={fakeList[3]} />
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
                    selected === 1
                      ? "selected w-100 d-flex justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 1 })}
                >
                  How to sell Products
                  <img
                    src={IconArrowGreen}
                    className={selected === 1 ? "d-flex" : "d-none"}
                  />
                </button>
                <button
                  className={
                    selected === 2
                      ? "selected w-100 d-flex flex-row justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 2 })}
                >
                  Excess Capacity
                  <img
                    src={IconArrowGreen}
                    className={selected === 2 ? "d-flex" : "d-none"}
                  />
                </button>
                <button
                  className={
                    selected === 3
                      ? "selected w-100 d-flex flex-row justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 3 })}
                >
                  Logistics
                  <img
                    src={IconArrowGreen}
                    className={selected === 3 ? "d-flex" : "d-none"}
                  />
                </button>
                <button
                  className={
                    selected === 4
                      ? "selected w-100 d-flex flex-row justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 4 })}
                >
                  Payments
                  <img
                    src={IconArrowGreen}
                    className={selected === 4 ? "d-flex" : "d-none"}
                  />
                </button>
                <button
                  className={
                    selected === 5
                      ? "selected w-100 d-flex flex-row justify-content-between align-items-center"
                      : ""
                  }
                  onClick={() => this.setState({ selected: 5 })}
                >
                  Support Ways
                  <img
                    src={IconArrowGreen}
                    className={selected === 5 ? "d-flex" : "d-none"}
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
