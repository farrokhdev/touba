import React, { memo } from "react";
import fill4 from "../../assets/images/Fill4.png";
const Certificates = () => {
  return (
    <div>
      <div className='row certificate-box p-4'>
        <div className="col-3 text-center d-flex align-items-center">
          <div className='fillCircle'>
            <img src={fill4} />
          </div>
          <div className='text-certificate'>Certificates</div>
        </div>
        <div className="col-3 d-flex text-center align-items-center">
          <div className='fillCircle'>
            <img src={fill4} />
          </div>
          <div className='text-certificate'>Certificates</div>
        </div>
        <div className="col-3 text-center d-flex align-items-center">
          <div className='fillCircle'>
            <img src={fill4} />
          </div>
          <div className='text-certificate'>Certificates</div>
        </div>
        <div className="col-3 text-center">
          <div className='seemore'>See 5 More</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Certificates);
