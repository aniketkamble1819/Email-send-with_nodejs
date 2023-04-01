let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        businessid:{type:Schema.Types.ObjectId, ref:"business"} ,
        profileid:{type:Schema.Types.ObjectId, ref:"profiles"} ,
        amount:{type:Number},
        activatedate:{type:Date},
        expirydate:{type:Date},
        status:{type:Boolean}
    }
)

let Profilebusinessplan = mongoose.model("profilebusinessplans", schema);

module.exports = Profilebusinessplan;