const express = require("express");
const router = express.Router();
const Admin = require("../Models/Admin");
const bcrypt = require("bcryptjs");

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", email, password);
   
  const admin = await Admin.findOne({ email });
  console.log(admin)
  if (!admin) {
    console.log("❌ No admin with that email");
    return res.status(400).json({ message: "Invalid email" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    console.log("❌ Password mismatch");
    return res.status(400).json({ message: "Wrong password" });
  }

  console.log("✅ Login successful");
  res.json({ message: "Login successful" });
});

module.exports = router;
