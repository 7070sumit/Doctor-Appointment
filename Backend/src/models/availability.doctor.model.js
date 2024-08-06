import mongoose,{Schema} from "mongoose";

const availabilitySchema=new Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    },
    clinicDays:{
        type:[Number],
        default:[-1,-2,-3,-4,-5,-6,-7],
        required:true,
    },
    clinicStartTime:{
        type:String,
        required:true,
    },
    clinicEndTime:{
        type:String,
        required:true,
    },
    onlineDays:{
        type:[String],
        
    },
    OnlineStartTime:{
        type:String,
       
    },
    OnlineEndTime:{
        type:String,
        
    },

},
{
    timestamps:true,
}
)

export const Availability=mongoose.model('Availability',availabilitySchema)