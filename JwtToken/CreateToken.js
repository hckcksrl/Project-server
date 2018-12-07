import jwt from "jsonwebtoken";

const CreateJwt = (email, password) => {
  const token = jwt.sign({});
  return token;
};

export default CreateJwt;
