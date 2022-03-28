"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Folder {\n       folder_id:ID!,\n       folder_name:String!,\n       folder_image_url:String,\n    }\n    type Events{\n        folder_id:ID,\n       folder_name:String!,\n       folder_image_url:String,\n    }\n    type Query {\n    folders:[Folder]\n    events:[Events]\n\n    }  \n\n"], ["\n    type Folder {\n       folder_id:ID!,\n       folder_name:String!,\n       folder_image_url:String,\n    }\n    type Events{\n        folder_id:ID,\n       folder_name:String!,\n       folder_image_url:String,\n    }\n    type Query {\n    folders:[Folder]\n    events:[Events]\n\n    }  \n\n"])));
exports.default = typeDefs;
var templateObject_1;
