const axios = require("axios");

module.exports = class Controller {
  static getLogin(req, res) {
    const error = req.query.error;
    res.render("Login/Login", { error });
  }

  static postLogin(req, res) {
    const { email, password } = req.body;
    axios({
      url: "https://user-service-geo.herokuapp.com/login",
      method: "POST",
      data: { email, password },
    })
      .then(({ data }) => {
        if (data.message == "invalid email/password") {
          res.redirect(`/login?error=${data.message}`);
        } else {
          req.header.access_token = data;
          res.redirect("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getRegister(req, res) {
    res.render("Register/Register");
  }

  static postRegister(req, res) {
    const { email, password } = req.body;
    axios({
      url: "https://user-service-geo.herokuapp.com/register",
      method: "POST",
      data: { email, password },
    })
      .then(({ data }) => {
        res.redirect("/login");
      })
      .catch((err) => console.log(err));
  }

  static getKatalog(req, res) {
    axios({
      url: "https://katalog-service.herokuapp.com/",
      method: "GET",
    })
      .then(({ data }) => res.render("Map/Map", { data }))
      .catch((err) => console.log(err));
  }
};
