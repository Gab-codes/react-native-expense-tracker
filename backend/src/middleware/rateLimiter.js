import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
  try {
    const identifier =
      req.headers["x-forwarded-for"]?.split(",").shift() ||
      req.headers["x-real-ip"] ||
      req.socket.remoteAddress ||
      req.ip;
    const { success } = await ratelimit.limit(identifier);

    if (!success) {
      return res.status(429).json({
        message: "Too many request, try again later",
      });
    }

    next();
  } catch (error) {
    cosole.log("Rate limit error", error);
    next(error);
  }
};

export default ratelimiter;
