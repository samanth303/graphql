import { v4 } from "uuid"
 const folders = [
    {
        folder_id:v4,
        folder_name:"shadi",
        folder_image_url:"shadicoverimageurl"
    },
    {
        folder_id:v4,
        folder_name:"mehendi",
        folder_image_url:"mehendicoveimageurl"
    },
    {
        folder_id:v4,
        folder_name:"reception",
        folder_image_url:"receptioncoverimageurl"
    },
]

const events = [
    {
        event_id:v4,
        folder_name:"shadi",
        event_image_url:"shadicoverimageurl"
    },
    {
        event_id:v4,
        event_name:"mehendi",
        event_image_url:"mehendicoveimageurl"
    },
    {
        event_id:v4,
        event_name:"reception",
        event_image_url:"receptioncoverimageurl"
    },
]

export default {folders,events};