import { Request, Response } from "express";
import { generateOTP, verifyOTP } from "../service/authentication.service";

export async function generateOTPHandler(req: Request, res: Response) {
  const { phone } = req.body;
  const result = await generateOTP(phone);
  if (result.success) {
    res.status(200).send(result);
  } else {
    res.status(400).send({ error: result.error });
  }
}

export async function verifyOTPHandler(req: Request, res: Response) {
  const { phone, otp } = req.body;
  const result = await verifyOTP(phone, otp);
  if (result.success) {
    res.status(200).send(result);
  } else {
    res.status(400).send();
  }
}
