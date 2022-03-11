import { Request, Response } from "express";
import { getConfig, addConfig } from "../service/config.service";

export async function getConfigHandler(req: Request, res: Response) {
  const config = await getConfig(req.params.name);
  res.status(200).send(config);
}

export async function addConfigHandler(req: Request, res: Response) {
  const config = await addConfig(
    req.params.name,
    JSON.stringify(req.body.data)
  );
  res.status(200).send(config);
}
