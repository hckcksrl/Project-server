import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../bin/.env" });

const CreateJwt = email => {
  const token = jwt.sign(
    {
      email
    },
    process.env.JWT_SECRET || "",
    {
      algorithm: "HS256",
      expiresIn: 1000
    }
  );
  return token;
};

export default CreateJwt;
