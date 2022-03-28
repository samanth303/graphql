"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var folders = [
    {
        folder_id: uuid_1.v4,
        folder_name: "shadi",
        folder_image_url: "shadicoverimageurl"
    },
    {
        folder_id: uuid_1.v4,
        folder_name: "mehendi",
        folder_image_url: "mehendicoveimageurl"
    },
    {
        folder_id: uuid_1.v4,
        folder_name: "reception",
        folder_image_url: "receptioncoverimageurl"
    },
];
var events = [
    {
        event_id: uuid_1.v4,
        folder_name: "shadi",
        event_image_url: "shadicoverimageurl"
    },
    {
        event_id: uuid_1.v4,
        event_name: "mehendi",
        event_image_url: "mehendicoveimageurl"
    },
    {
        event_id: uuid_1.v4,
        event_name: "reception",
        event_image_url: "receptioncoverimageurl"
    },
];
exports.default = { folders: folders, events: events };
