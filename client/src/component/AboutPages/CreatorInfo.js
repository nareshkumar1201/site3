import React, { Fragment } from "react";
import myImage from "../../images/myImage.jpg";

const CreatorInfo = () => {
  return (
    <Fragment>
      <div className="creator">
        <div className="creator-story">
          <div className="creator-story--info">
            <figure className="creator-story--info__shape">
              <img
                src={myImage}
                alt="creator-pic"
                className="creator-story--info__img"
              />
              <figcaption className="creator-story--info__caption">
                Naresh Kumar
              </figcaption>
            </figure>
            <div className="creator-story--info__name">
              <div className="creatorInfo">
                <h4 className="creatorInfo-heading"> Naresh Kumar Akaram</h4>
                <p className="creatorInfo-caption"> Jr. Full Stack Developer</p>
              </div>
            </div>
          </div>
          <div className="creator-story--text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur impedit ea dolores optio hic. Nam, ut alias!
              Reprehenderit illo similique quam nisi fuga aspernatur neque
              corporis sint vel expedita quibusdam excepturi dolore pariatur
              quisquam qui esse aliquid tempora, facere ut voluptate? Corrupti
              minus odit quae officiis iure, quasi id cumque aut exercitationem
              repellat esse suscipit distinctio, eligendi nam vel blanditiis
              Explicabo
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatorInfo;
