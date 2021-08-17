const jwt = require("jsonwebtoken");
const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

module.exports = function auth(req, res, next) {
  const access_token = req.header.access_token;
  if (access_token) {
    const payload = jwt.verify(access_token, "rahasia");
    axios({
      url: `https://user-service-geo.herokuapp.com/user/${payload.id}`,
      method: "GET",
    })
      .then(({ data }) => {
        if (data) {
          next();
        } else {
          res.send({ message: "Invalid token" });
        }
      })
      .catch((err) => console.log(err, `ini error <<<<<<<<<<<<<<<<<<<<<`));
  } else {
    res.redirect("/login");
  }
};
