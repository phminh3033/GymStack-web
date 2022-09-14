import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; //own token, google token > 500
        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, "secretAdminKey");
            req.adminId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.adminId = decodedData?.sub;
        }
        next();
    } catch (err) {
        console.log({ error: err });
    }
};

export default authAdmin;
