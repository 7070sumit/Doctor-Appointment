import mongoose,{Schema} from "mongoose";

const availabilitySchema=new Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    },
    clinicDays:{
        type:[String],
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