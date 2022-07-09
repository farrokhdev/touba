import { memo } from "react";

interface IProps {
  img: any;
  title: string;
  amount: string;
}
const Summary = ({ img, title, amount }: IProps) => {
  return (
    <div>
      <div className="total-income-box">
        <div className="row  align-items-center">
          <div className="col-3 text-cente">
            <img src={img} alt={title} />
          </div>
          <div className="col-9  p-3 ">
            <div className="smalText">{title}</div>
            <div className="bigText">{amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Summary);
