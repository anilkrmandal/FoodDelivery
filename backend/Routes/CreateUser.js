const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtSecret = "MynameisThaneil_era";

// Create user route
router.post(  
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });

      // Send success response
      res.json({ success: true });
    } catch (error) {
      console.error(error);

      // Send failure response
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  }
);

// Login user route
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials" });
      }

      const passwordMatch = await bcrypt.compare(req.body.password, userData.password);
      if (!passwordMatch) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials" });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };

      // Generate JWT token
      const authToken = jwt.sign(data, jwtSecret);

      // Send success response with token
      return res.json({ success: true, authToken });
    } catch (error) {
      console.error(error);

      // Send failure response
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  }
);

module.exports = router;
