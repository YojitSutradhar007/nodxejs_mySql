chechAuth = (req, res, next) => {
    //For Demo purposes
    console.log("Authentication successful");
    next();
}


module.exports = chechAuth;