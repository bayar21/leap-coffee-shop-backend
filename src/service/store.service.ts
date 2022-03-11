import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import storeModel from "../model/storeModel";

export function getAllStore() {
  return storeModel.find({});
}

export function getNearbyStore(lat: number, long: number) {
  return storeModel.find({
    "location.coordinates": {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [long, lat],
        },
        $maxDistance: 4000,
      },
    },
  });
}
