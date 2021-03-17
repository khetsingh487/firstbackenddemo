const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcrypt");
require('./db/dbconnection');
const register = require('./models/register');
const router = require('./router/router');
app.use(router);

// app.use(express.json()); //this line we use than we want to read json data from the body.
app.use(express.urlencoded({ extended: false })); //this line use to get data from the form tag of html

const static_path = path.join(__dirname, "../public");
// console.log(static_path);
app.use(express.static(static_path));
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);



app.post("/signin", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await register.findOne({ email: email });


    const comparepassword = await bcrypt.compare(password, useremail.password);

    if (comparepassword) {
      res.render("index");
    } else {
      res.send('password worng');
    }

  } catch (error) {
    res.status(400).send(error);
  }
});



app.post("/register", async (req, res) => {
  try {
    //  console.log(req.body.name);
    //  res.send(req.body.name);
    const password = req.body.password;
    const cpassword = req.body.cpassword;


    if (password === cpassword) {
      const hashvalue = await bcrypt.hash(password, 10);
      // console.log(hashvalue);

      const chashvalue = await bcrypt.hash(cpassword, 10);
      // console.log(chashvalue);

      const akshayrigistration = new register({
        name: req.body.name,
        email: req.body.email,
        number: req.body.phone,
        address: req.body.address,
        password: hashvalue,
        cpassword: chashvalue
      })

      const registered = await akshayrigistration.save();
      res.status(200).render("index");

    } else {
      res.send('password is not maching');
    }

  } catch (error) {
    res.status(400).send(error);
  }
})


app.listen(port, () => {
  console.log(`server is running at port number crash ${port}`);
})

