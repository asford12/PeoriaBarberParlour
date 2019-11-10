const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// define the Style model schema
const ReservationSchema = new Schema({
    
  //  chosenStyle : {
  //   type: Schema.Types.ObjectId,
  //   ref: "Style"
  // },
  // save this for when there are barber users in place
  // barber : {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // },  
  chosenStyle : String,
  barber : String,
  startTime: String,
  paid: {
    type: Boolean,
    default: false
  }

});


module.exports = mongoose.model('Reservation', ReservationSchema);