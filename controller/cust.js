const custInfoDB = require("../modals/customer");
const { validationResult } = require("express-validator");

exports.addCustInfo = async (req, res, next) => {
  const { name, email, contactNo, devType, projDetails, isChecked } = req.body;
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(400).json({
      user: { name, email, contactNo, devType, projDetails, isChecked },
      errors: errors.array(),
    });
  }

  try {
    const cust = await custInfoDB.findOne({ email: email });

    if (cust) {
      return res.status(401).json({
        user: { name, email, contactNo, devType, projDetails, isChecked },
        errors: [
          {
            msg: "email already exists ,use new email",
          },
        ],
      });
    } else {
      const newCust = new custInfoDB({
        name,
        email,
        contactNo,
        devType,
        projDetails,
        isChecked,
      });

      newCust.save();

      res
        .status(200)
        .json({ status: [{ msg: "Successfully sent your proposal" }] });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getCust = async (req, res, next) => {
  try {
    const cust = await custInfoDB.find();
    if (!cust) {
      return res
        .status(401)
        .json({ msg: "not found please enter cust details" });
    }

    res.status(200).json({ info: cust });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
};
