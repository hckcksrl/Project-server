import jwt from "jsonwebtoken";

const CreateJwt = (email, password) => {
  const token = jwt.sign({});
};

export default CreateJwt;
