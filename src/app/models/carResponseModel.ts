import { Car } from "./car";
import { ResponseModel } from "./responseModel";

//Car response will come us from Backend.
export interface CarResponseModel extends ResponseModel
{ 
    data:Car[]
}