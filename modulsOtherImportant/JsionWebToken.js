
const jwt = require("jsonwebtoken");

const creatToken = async () => {
  const token = await jwt.sign({_id:"60229cdbf4447d2e08bc4414"}, "khetsighushakhetsinghushakhetsighusha");
  console.log(token);
const verifytoken = await jwt.verify(token, "khetsighushakhetsinghushakhetsighusha");
console.log(verifytoken);
}

creatToken();

console.log("hello jsion web token create a jsion token for me which will be unique so i dont have to login again and again");