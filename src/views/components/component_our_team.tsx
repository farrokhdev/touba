import React, { memo } from "react";
interface Props {
  image: string;
}
const ComponentOurTeam = ({ image }: Props) => {
  return (
    <div className="position-relative">
      <img width={250} height={400} src={image} />
      <div className="name-our-team">Name</div>
            <div className="postion-our-team">position</div>

    </div>
  );
};

export default memo(ComponentOurTeam);
