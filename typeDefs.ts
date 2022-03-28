import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Folder {
       folder_id:ID!,
       folder_name:String!,
       folder_image_url:String,
    }
    type Events{
        folder_id:ID,
       folder_name:String!,
       folder_image_url:String,
    }
    type Query {
    folders:[Folder]
    events:[Events]

    }  

`;
export default typeDefs;