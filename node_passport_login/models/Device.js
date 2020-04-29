const mongoose = require("mongoose");
const DeviceSchema = new mongoose.Schema({
	mob : mob
	accelerometerx : String,
	accelerometery : String,
	accelerometerz : String,
	temp : String,
	lat : String,
	lon : String,
	vibration : String,

  date: {
    type: Date,
    default: Date.now
  }
});
const User = mongoose.model('Device', DeviceSchema);
module.exports = Device;
