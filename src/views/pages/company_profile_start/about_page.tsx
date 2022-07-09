import ButtonAdd from "../../components/button_add";
import {
  CardUploadImage,
  ComponentMultiInput,
  Divider,
  InputDate,
  InputTextLabel,
  SelectComponent,
  TextIconHorizontal,
  TextIconVerticalDashboard,
} from "../../components/components";
import MyCompanyNav from "../../components/mycompany_nav";
import { TextAreaLabel } from "../../components/textarea_lable";
import UploadImage from "../../components/upload_image";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";
import { IconDanger } from "../../../assets";

class AboutPage extends CompanyProfileStartController {
  Certificate() {
    const { certificateName } = this.state;
    return (
      <>
        <div className="body-content-main-inputs">
          <div className="body-content-main-inputs-group">
            <InputTextLabel
              value={certificateName}
              title={"Certificate"}
              placeholder={"Certificate Name"}
              type={"text"}
              showDropDown={false}
              onChange={(event) =>
                this.setState({ certificateName: event.currentTarget.value })
              }
            />
            <SelectComponent
              type={"two"}
              placeholder={"Manufacturer/Factory"}
              onSelect={this.getCertificateCode}
              items={this.items}
              title="Code"
            />
          </div>
          <div className="body-content-main-inputs-group">
            <InputDate
              title={"Registered Date"}
              handleGetValue={this.getRegisterDate}
            />
            <InputDate
              title={"Expire Date"}
              handleGetValue={this.getExpireDate}
            />
          </div>
        </div>
        <div className="body-content-main-image">
          <CardUploadImage
            title={"Upload Certificate Image Here"}
            handleGetImage={this.getImage}
          />
        </div>
        <div className="body-content-main-button">
          <ButtonAdd onClick={() => {}} />
        </div>
        {/* <Divider direction={"vertical"} />
        <div className="body-content-main-footer">
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
        </div> */}
      </>
    );
  }

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <div className="body-content-header">
          <MyCompanyNav onActive={this.getActiveTab} showButton={false} />
        </div>
        <div className="body-content-main">
          {activeTab === 1 && (
            <>
              <div className="">
                <UploadImage title="Upload Image Here" />
              </div>
              <div className="mt-4">
                <TextAreaLabel handleGetValue={() => {}} title="Description" />
              </div>
              <div className="mt-3">
                <TextIconVerticalDashboard
                  icon={IconDanger}
                  title={"Hint text about the title"}
                />{" "}
              </div>
              <div className="mt-4">
                <ComponentMultiInput
                  lableOne="Specifications"
                  lableTwo="Amount"
                  placeholderOne="Weight"
                  placeholderTwo="2800 KG"
                />
              </div>
              <div className="mt-4">
                <ComponentMultiInput
                  lableOne="Specifications"
                  lableTwo="Amount"
                  placeholderOne="Weight"
                  placeholderTwo="2800 KG"
                />
              </div>
              <div className="mt-4 mb-2">
                <ComponentMultiInput
                  lableOne="Specifications"
                  lableTwo="Amount"
                  placeholderOne="Weight"
                  placeholderTwo="2800 KG"
                />
              </div>
            </>
          )}
          {activeTab == 2 && (
            <>
              {" "}
              <div className="">
                <ComponentMultiInput
                  lableOne="Specifications"
                  lableTwo="Amount"
                  placeholderOne="Weight"
                  placeholderTwo="2800 KG"
                />
              </div>
              <div className="mt-4">
                <ComponentMultiInput
                  lableOne="Specifications"
                  lableTwo="Amount"
                  placeholderOne="Weight"
                  placeholderTwo="2800 KG"
                />
              </div>
              <div className="mt-4 mb-2">
                <ComponentMultiInput
                  lableOne="Specifications"
                  lableTwo="Amount"
                  placeholderOne="Weight"
                  placeholderTwo="2800 KG"
                />
              </div>
              <div className="mb-3 mt-3">
                <ButtonAdd onClick={() => {}} />
              </div>
            </>
          )}
          {activeTab == 4 && (
            <>
              <div>
                {" "}
                <InputTextLabel
                  type="text"
                  showDropDown={false}
                  value=""
                  onChange={() => {}}
                  title="Question"
                  placeholder="Type Question Here"
                />
              </div>
              <div className="mt-4 ">
                {" "}
                <InputTextLabel
                  type="text"
                  showDropDown={false}
                  value=""
                  onChange={() => {}}
                  title="Answer"
                  placeholder="Type Answer"
                />
              </div>
              <div className="border-bottom-dashed mt-3"></div>
              <div className="mt-3">
                {" "}
                <InputTextLabel
                  type="text"
                  showDropDown={false}
                  value=""
                  onChange={() => {}}
                  title="Question"
                  placeholder="Type Question Here"
                />
              </div>
              <div className="mt-4 ">
                {" "}
                <InputTextLabel
                  type="text"
                  showDropDown={false}
                  value=""
                  onChange={() => {}}
                  title="Answer"
                  placeholder="Type Answer"
                />
              </div>
              <div className="border-bottom-dashed mt-3"></div>
              <div className="mb-3 mt-3">
                <ButtonAdd onClick={() => {}} />
              </div>

            </>
          )}
                      {activeTab===3 && this.Certificate()}


          <Divider direction={"vertical"} />
          <div className="body-content-main-footer">
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
      </>
    );
  }
}

export default AboutPage;
