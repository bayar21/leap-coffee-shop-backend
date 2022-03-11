import { Request, Response } from "express";
import { storeType } from "../model/storeModel";
import { calcDistance, getAllStore, getNearbyStore } from "../service";
import { createClient } from "redis";

export async function getStoresController(req: Request, res: Response) {
  // const client = createClient();
  // await client.connect();
  // client.on("error", (err: any) => console.log("Redis Client Error", err));

  const { lat, long } = req.query;
  let stores = [];
  if (!lat || !long) {
    stores = await getAllStore();
  } else {
    stores = await getNearbyStore(Number(lat), Number(long));
  }

  // const data = await client.get("stores");
  // if (!lat || !long) {
  //   if (!data) {
  //     stores = await getAllStore();
  //     await client.set("stores", JSON.stringify({ data: stores }));
  //     client.setEx("stores", 3600, "data");
  //     res.send(data);
  //   } else {
  //     res.send(JSON.parse(data));
  //   }
  // } else {
  //   stores = await getNearbyStore(Number(lat), Number(long));
  //   res.send(stores);
  // }

  stores = stores.map((item: storeType) => {
    return {
      ...item.toJSON(),
      distance: calcDistance(
        Number(lat),
        Number(long),
        item.location.coordinates[1],
        item.location.coordinates[0]
      ),
    };
  });
  res.send(stores);
}
