import {
  IconClose,
  IconProfile,
  IconStar,
  IconStartOutline,
  IconUser,
  ImageChina,
  ImageLadan,
} from "../../assets";

interface IProps {
  setState(): void;
}

const ReviewDetail = ({ setState }: IProps) => {
  return (
    <div className="content">
      <div className="d-flex flex-row align-items-center justify-content-between head">
        <span>Review Details</span>
        <div
          className="d-flex align-items-center justify-content-center"
          onClick={setState}
        >
          <img src={IconClose} alt="close" />
        </div>
      </div>
      <div className="body d-flex flex-row ">
        <div className="d-flex flex-column align-items-center justify-content-between review">
          <div className="w-100 d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row profile-detail ">
              <div className="d-flex align-items-center justify-content-center profile-img">
                <img src={IconProfile} alt="user" />
              </div>
              <div>
                <div className="d-flex flex-column ms-2">
                  <span>Name Here</span>
                  <span>12.01.2022 from China</span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="rate">
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStartOutline} alt="star" className="mx-1" />
              </div>
              <div className="country-img">
                <img src={ImageChina} alt="country" />
              </div>
              <span className="green-text">See Profile</span>
            </div>
          </div>
          <p className="review-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis aute
          </p>
        </div>
        <div className="d-flex flex-row align-items-center product">
          <div className="d-flex flex-column align-items-center product-img">
            <span>Review On This Item</span>
            <img src={ImageLadan} alt="product" />
          </div>
          <span className="product-name">Product Name Here Name Here</span>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-between bottom-section ">
        <div className="select-conteiner">
          <label>Change Status:</label>
          <select>
            <option>Approve</option>
          </select>
        </div>
        <div className="btn-container">
          <button onClick={setState}>Cancle</button>
          <button onClick={setState}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
