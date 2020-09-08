import React, { Fragment, useState, useEffect, useContext } from "react";
import ProposalContext from "../context/proposalFormContext/ProposalContext";
import Alert from "./Alert";
import AlertContext from "../context/alertContext/AlertContext";

const CustomerInfoForm = () => {
  const { addCustomerInfo, userStatus, errors } = useContext(ProposalContext);
  const { showAlert } = useContext(AlertContext);

  useEffect(() => {
    if (errors !== null) {
      setUserInfo({
        name: errors.user.name,
        email: errors.user.email,
        contactNo: errors.user.contactNo,
        devType: errors.user.devType,
        projDetails: errors.user.projDetails,
        isChecked: errors.user.isChecked,
      });

      errors.errors.forEach((err) => {
        console.log(err.msg);
        showAlert(err.msg, "danger");
      });
    }
    if (userStatus !== null) {
      userStatus.forEach((status) => {
        showAlert(status.msg, "success");
      });
    }
  }, [errors, userStatus]);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contactNo: "",
    devType: "",
    projDetails: "",
    isChecked: false,
  });

  const { name, email, contactNo, devType, projDetails, isChecked } = userInfo;
  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      isChecked: e.target.checked,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addCustomerInfo({
      name,
      email,
      contactNo,
      devType,
      projDetails,
      isChecked,
    });
    setUserInfo({
      name: "",
      email: "",
      contactNo: "",
      devType: "",
      projDetails: "",
      isChecked: false,
    });
  };
  return (
    <Fragment>
      <div className="form-container">
        <div className="heading-Primary">
          <h1>Proposal Form</h1>
        </div>
        <Alert />
        <div className="form-primary">
          <form action="#" onSubmit={onSubmit}>
            <div className="form-primary--sub">
              <input
                className="form-primary--sub_input"
                type="text"
                name="name"
                value={name}
                placeholder="Enter Name*"
                onChange={onChange}
              />
            </div>
            <div className="form-primary--sub">
              <input
                className="form-primary--sub_input"
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email*"
                onChange={onChange}
              />
            </div>
            <div className="form-primary--sub">
              <input
                className="form-primary--sub_input"
                type="Number"
                maxLength="10"
                name="contactNo"
                value={contactNo}
                placeholder="Enter Contact Number*"
                onChange={onChange}
              />
            </div>
            <div className="form-primary--sub">
              <select
                name="devType"
                value={devType}
                id="devType"
                className="form-primary--sub_input"
                onChange={onChange}
              >
                <option value="0">Select Type of Project</option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="web & mobile">Web & Mobile</option>
              </select>
            </div>
            <div className="form-primary--sub">
              <textarea
                className="form-primary--sub_input"
                name="projDetails"
                value={projDetails}
                onChange={onChange}
                id="projDetails"
                cols="10"
                rows="5"
                placeholder="Enter Project Details"
              ></textarea>
            </div>
            <div className="form-primary--sub">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={onChange}
                checked={isChecked}
              />
              <span className="mrl-1">
                {" "}
                accept{" "}
                <a href="#!" className="form-terms">
                  Terms & Conditions
                </a>
              </span>
            </div>

            <div>
              <button className="bttn-block pd-1" type="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerInfoForm;
