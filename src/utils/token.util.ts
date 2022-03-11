const jwt = require("jsonwebtoken");

interface Payload {
  phone: string;
  _id: string;
}

export const createJwtToken = (payload: Payload) => {
  const token = jwt.sign(payload, "Aliishuu", { expiresIn: "12h" });
  return token;
};
