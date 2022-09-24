import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; //own token, google token > 500
        let decodedData;
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.SECRET_USER_KEY);
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    } catch (err) {
        console.log({ errorAuthUser: err.message });
    }
};

export default authUser;
