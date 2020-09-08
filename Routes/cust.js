const express = require("express");
const custController = require("../controller/cust");
const { body } = require("express-validator");
const router = express.Router();

router.post(
  "/",
  [
    body("name", "Please Enter Valid Name").not().isEmpty().trim(),
    body("email", "Please Enter Valid Email").isEmail().trim(),
    body("contactNo")
      .trim()
      .not()
      .isEmpty()
      .withMessage("please enter Contact Number")
      .isLength({ min: 10, max: 10 })
      .withMessage("Contact Number should be 10 digits")
      .isNumeric()
      .withMessage("Please Enter Contact Number- only Numeric"),

    body("devType", "Please Select Development Type").trim().not().isEmpty(),

    body("projDetails", "Please Enter Project Details").trim().not().isEmpty(),

    body("isChecked")
      .isBoolean()
      .custom((value) => {
        if (!value) {
          throw new Error("Please Accept Terms and Conditions");
        }
        return true;
      }),
  ],
  custController.addCustInfo
);

router.get("/admin", custController.getCust);

module.exports = router;
