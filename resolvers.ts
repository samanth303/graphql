import { GqlContext } from "./GqlContext";
import todos  from "./db"
interface Folder {
  folder_id?: string;
  folder_name: string;
  folder_image_url?: string;
  }
const resolvers = {
  Query:{

    folders: ()=>{
      return todos; 
    }

  }
}

export default resolvers;