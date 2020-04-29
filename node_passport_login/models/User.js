const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bgroup: {
    type: String,
    required: true
  },
  AdhaarNo: {
    type: String,
    required: true
  },
  vehicleno: {
    type: String,
    required: true
  },
  vehicleNo: { type: String, required: true},
  date: {
    type: Date,
    default: Date.now
  }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
