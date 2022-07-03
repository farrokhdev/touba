import { memo, ReactElement } from "react";

import { IconLocation } from "../../assets";

interface Props {
  address: string;
}

export function CompanyAddres({ address }: Props): ReactElement {
  return (
    <div className="d-flex flex-row align-items-center">
      <img src={IconLocation} alt="location" />
      <div className="d-flex flex-column mx-3 contactus-Item">
        <span>Address: </span>
        <span>{address}</span>
      </div>
    </div>
  );
}

export default memo(CompanyAddres);
