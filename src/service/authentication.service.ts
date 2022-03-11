import UserModel from "../model/userModel";
import { createPassword } from "../utils/otp.util";
import { createJwtToken } from "../utils/token.util";

export async function generateOTP(phone: string) {
  const user = await UserModel.findOne({ phone: phone });
  if (user) {
    user.otp = {
      password: createPassword(),
      createdAt: Date.now(),
    };
    try {
      await user.save();
      return { success: true };
    } catch (err) {
      return { success: false, error: err };
    }
  } else {
    const newUser = new UserModel({
      phone: phone,
      otp: {
        password: createPassword(),
        createdAt: Date.now(),
      },
    });
    try {
      await newUser.save();
      return { success: true };
    } catch (err) {
      return { success: false, error: err };
    }
  }
}

export async function verifyOTP(phone: string, otp: string) {
  const user = await UserModel.findOne({ phone: phone });
  const now = Date.now();
  if (user) {
    if (user.otp.password === otp && user.otp.createdAt - now < 300000) {
      const token = createJwtToken({ phone: phone, _id: user._id });
      return { success: true, _id: user._id, phone: user.phone, token: token };
    } else {
      return { success: false };
    }
  } else {
    return { success: false };
  }
}
