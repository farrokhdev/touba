import { Map } from "../../components/components";
import { InputTextLabel } from "../../components/input_text_label";
import { InputTextPhoneNumber } from "../../components/input_text_phonenumber";
import UploadImage from "../../components/upload_image";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";

class ContactUs extends CompanyProfileStartController {
  render() {
    return (
      <div className="contact-us-start  mx-4">
        <div className="title">
          <span className="px-5">Contact us page</span>
        </div>
        <div className="py-3 px-5">
          <InputTextLabel
            value={this.state.email}
            title={"Email"}
            placeholder={
              "Yanjialing Village, Tongji Office, Jimo District, Qingdao, Shandong, China 266000"
            }
            type={"email"}
            showDropDown={false}
            onChange={(event) => {
              this.setState({ email: event.currentTarget.value });
            }}
          />
          <div className="d-flex flex-row align-items-center justify-content-between my-4">
            <div className=" w-50 me-4">
              <InputTextPhoneNumber
                valueCode={this.state.code}
                valuephone={this.state.phone}
                title={"Phone Number"}
                onChangeCode={(event) =>
                  this.setState({ code: event?.currentTarget.value })
                }
                onChangePhone={(event) =>
                  this.setState({ phone: event?.currentTarget.value })
                }
              />
            </div>
            <div className="input-Contact-Container w-50 ">
              <label>Time Zone</label>
              <select>
                <option>GMT (+3:30)</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="w-50 me-4">
              <InputTextLabel
                value={this.state.suppiler}
                title={"Supplier Name"}
                placeholder={"Saber Noori"}
                type={"text"}
                showDropDown={false}
                onChange={(event) => {
                  this.setState({ suppiler: event.currentTarget.value });
                }}
              />
            </div>
            <div className="input-Contact-Container w-50">
              <label>Position In Company</label>
              <select>
                <option>Sales Manager</option>
              </select>
            </div>
          </div>
          <div className="image-upload-conteiner my-4">
            <UploadImage title="Upload Avatar" />
          </div>
        </div>
        <div className=" map-container py-3">
          <span className="map-title px-5">Select adress on the map</span>
          <div className="py-4 px-5">
            <Map />
          </div>
        </div>
        <div className="body-content-main-footer px-5">
          <div className="body-content-main-footer-button-group">
            <button className="body-content-main-footer-button-group-next">
              <h5>NEXT STEP</h5>
            </button>
            <button className="body-content-main-footer-button-group-back">
              <h5>BACK</h5>
            </button>
          </div>
          <button className="body-content-main-footer-button-cancel">
            <h5>CANCEL</h5>
          </button>
        </div>
      </div>
    );
  }
}

export default ContactUs;
