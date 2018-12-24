import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Users from "../Entity/UserSchema";
dotenv.config({ path: "../bin/.env" });

const DecodeJwt = async token => {
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET || "");
    const { email } = decode;
    const user = await Users.findOne({
      where: {
        email: email
      }
    });
    return user;
  } catch (error) {
    return error;
  }
};

export default DecodeJwt;
