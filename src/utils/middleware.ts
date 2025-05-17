import jwt from "jsonwebtoken";

//@ts-ignore
export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Not logged in. Please login first." });
  }

  const token = authHeader;

  try {
    const decoded = jwt.verify(token, process.env.JWT_PASSWORD as string);
    // @ts-ignore
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};
