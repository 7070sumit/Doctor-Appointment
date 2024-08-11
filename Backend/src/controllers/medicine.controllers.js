import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import {Medicine} from '../models/medicine.model.js'


const getAllMedicine=asyncHandler(async(req,res)=>{
    
    const medicine=await Medicine.find({}).limit(5)
    if (medicine){
        return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                medicine,
                "Medicine fetched successfully"
            )
        )
    }else{
        throw new ApiError(500,{},"Could not fetch medicine information.")
    }
})



export {getAllMedicine}