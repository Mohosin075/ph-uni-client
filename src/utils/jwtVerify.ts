import { jwtDecode } from "jwt-decode";

export const JWTVerify = (token : string) => {
  return jwtDecode(token);
};
