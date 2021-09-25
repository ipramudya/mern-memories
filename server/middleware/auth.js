import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    /* if token.length > 500 which means it's google auth, else our custom auth */
    const isCustomAuth = token?.length < 500;
    let decodeData;

    if (token && isCustomAuth) {
      /* if we're using our own token */
      decodeData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodeData?.id;
    } else {
      /* if we're using google auth token */
      decodeData = jwt.decode(token);
      req.userId = decodeData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
