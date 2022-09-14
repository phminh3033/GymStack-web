import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; //own token, google token > 500
        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, "secretUserKey");
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    } catch (err) {
        console.log({ error: err });
    }
};

export default authUser;
