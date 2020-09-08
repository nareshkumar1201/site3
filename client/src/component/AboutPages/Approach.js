import React, { Fragment } from "react";
import showcaseImg5 from "../../images/showcase5.png";
import collaborate from "../../images/collaborating.png";
import createTeam from "../../images/creative_team.png";
const Approach = () => {
  return (
    <Fragment>
      <div className="g-row">
        <div className="g-col">
          <img
            src={showcaseImg5}
            alt="showcaseImg5"
            style={{ width: "100%", height: "50vh", margin: "0rem auto" }}
          />
        </div>
        <div className="g-col">
          <div className="approach">
            <h1 className="approach-heading">Planning</h1>
            <p className="approach-info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati porro, quam hic illum dolore maiores adipisci labore a
              facilis, quae inventore, ducimus dolores blanditiis. Quidem, totam
              officiis, laudantium eum ab voluptatum placeat et, veniam
              voluptatibus sequi omnis doloremque. Autem, aut?
            </p>
          </div>
        </div>
      </div>

      <div className="g-row">
        <div className="g-col">
          <div className="approach">
            <h1 className="approach-heading">Collaborate</h1>
            <p className="approach-info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati porro, quam hic illum dolore maiores adipisci labore a
              facilis, quae inventore, ducimus dolores blanditiis. Quidem, totam
              officiis, laudantium eum ab voluptatum placeat et, veniam
              voluptatibus sequi omnis doloremque. Autem, aut?
            </p>
          </div>
        </div>
        <div className="g-col">
          <img
            src={collaborate}
            alt="showcaseImg5"
            style={{ width: "100%", height: "50vh", margin: "0rem auto" }}
          />
        </div>
      </div>

      <div className="g-row">
        <div className="g-col">
          <img
            src={createTeam}
            alt="col"
            style={{ width: "100%", height: "50vh", margin: "0rem auto" }}
          />
        </div>
        <div className="g-col">
          <div className="approach">
            <h1 className="approach-heading">Creative Team</h1>
            <p className="approach-info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati porro, quam hic illum dolore maiores adipisci labore a
              facilis, quae inventore, ducimus dolores blanditiis. Quidem, totam
              officiis, laudantium eum ab voluptatum placeat et, veniam
              voluptatibus sequi omnis doloremque. Autem, aut?
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Approach;
