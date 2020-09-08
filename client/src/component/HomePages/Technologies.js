import React, { Fragment } from "react";

const Technologies = () => {
  return (
    <Fragment>
      <div className="techInfo">
        <div className="techInfo-container">
          <div className="techInfo-heading">
            <h1> Technologies We Work With .....</h1>
          </div>
          <div className="techInfo-content">
            <div className="techInfo-content--info">
              <div className="techInfo-content--info__text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing eli Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
                  necessitatibus quisquam deleniti quos iure doloribus et.
                  Deleniti voluptates laudantium quia voluptatibus id recusandae
                  facilis assumenda quibusdam? Explicabo itaque illo nobis.{" "}
                </p>
              </div>
            </div>
            <div className="techInfo-content--icons">
              <i className="fab fa-node"></i>
              <i className="fab fa-js"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3"></i>
              <i className="fab fa-sass"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-bootstrap"></i>
              {/*<i class="fab fa-mdb"></i> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Technologies;
