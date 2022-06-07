import React, { memo } from "react";
interface Props {
  image: string;
}
const ComponentOurTeam = ({ image }: Props) => {
  return (
    <div className="team-Member mx-1">
      <img src={image} alt="member" />
      <div className="d-flex flex-column justify-content-end">
        <span>Name Here</span>
        <span>Position</span>
      </div>
    </div>
  );
};

export default memo(ComponentOurTeam);
