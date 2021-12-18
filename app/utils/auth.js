import cookie from "cookie";

export function parseCookies(req) {
  if (!req || !req.headers) {
    return {};
  }
  return cookie.parse(req.headers.cookie || "");
}

export const validateAuth = (req) => {
  const cookies = parseCookies(req);
  if (!cookies.kcToken) {
    return false;
  }
  const token = Buffer.from(cookies.kcToken, "base64").toString("utf8");
  return token;
};
