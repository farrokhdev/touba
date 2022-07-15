import { Link } from "react-router-dom";
import { ImageBackgroundLogin, IconTouba, IconError, IconEmail, IconTwiterGray, IconLinkdinGray } from "../../../../assets";
import Button from "../../../components/button";
import { ButtonOutline } from "../../../components/button_outline";
import { ComponentRadioSquare } from "../../../components/components";
import { InputTextLabel } from "../../../components/input_text_label";
import LoginControll from "../../../controllers/login_controll";

class Login extends LoginControll {
  render() {
    return (
      <div
        className="login"
        style={{ backgroundImage: "url(" + ImageBackgroundLogin + ")" }}
      >
        <img src={IconTouba} className="login-icon" />
        <div className="login-modal">
          <div className="login-modal-header">
            <h3 className="login-modal-header-title">Login</h3>
            <Link to="/register">
              <ButtonOutline title={"REGISTER"} />
            </Link>
          </div>
          <div className="login-modal-input-group">
            <div className="login-modal-input-group-email">
              <InputTextLabel
                value={this.state.email}
                title={"Email"}
                placeholder={""}
                type={"email"}
                onChange={(event) =>
                  this.setState({ email: event.currentTarget.value })
                }
                showDropDown={false}
              />
            </div>
            <div className="login-modal-input-group-password">
              <InputTextLabel
                value={this.state.password}
                title={"Password"}
                placeholder={""}
                type={"password"}
                showDropDown={false}
                onChange={(event) =>
                  this.setState({ password: event.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="login-modal-error">
            <img src={IconError} />
            <p className="login-modal-error-text">
              username or password incorrect
            </p>
          </div>
          <div className="login-modal-forgot-passsword">
            <ComponentRadioSquare title={"Remember me."} active={false} />
            <Link to="/" className="login-modal-forgot-passsword-link">
              FORGOT PASSWORD?
            </Link>
          </div>
          <div className="login-modal-button">
              <Button route="/" onClick={() => this.routeHome()} title="LOGIN" />
          </div>
          <div className="login-modal-divider">
            <div className="login-modal-divider-line"></div>
            <div className="login-modal-divider-text">
              <h6>OR USE</h6>
            </div>
          </div>
          <div className="login-modal-button-group">
            <button>
              <img src={IconEmail} />
            </button>
            <button>
              <img src={IconTwiterGray} />
            </button>
            <button>
              <img src={IconLinkdinGray} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
