const express = require("express");
const path = require("path");
// const app=express();
const fs=require("fs");
// const nodemailer = require("nodemailer");
const Datastore = require("nedb");

//setup database
const user_database = new Datastore("./database/userreg.db");


// const inventory_database = new Datastore("./database/inventory.db");
user_database.loadDatabase();




//setup env variables
const port = process.env.PORT || 80;
const admin_key = process.env.KEY || "hello";

//setup app
const app = express();
app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded());

//settings of the app
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "mobixin621@gmail.com",
//     pass: "Mobixin6969@"
//   }
// });

// function exportMail(receiver, subject, html) {
//   let info = transporter.sendMail({
//     from: "petozone update", // sender address
//     to: receiver, // list of receivers
//     subject: "appointment booking", // Subject line

//     html: html // html body
//   });
// }
// function exportMai(receiver, subject, html) {
//   let info = transporter.sendMail({
//     from: "petozone update", // sender address
//     to: receiver, // list of receivers
//     subject: "agent booking", // Subject line

//     html: html // html body
//   });
// }
//routes
app.get("/", (req, res) => {
  const params = {};
  res.redirect("/landing");
});
app.get("/landing", (req, res) => {
  const params = {};
  res.status(200).render("landing.pug", params);
});
app.get("/register", (req, res) => {
  const params = {};
  res.status(200).render("register.pug", params);
});
app.get("/login", (req, res) => {
  const params = {};
  res.status(200).render("login.pug", params);
});
app.get("/register", (req, res) => {
  const params = {};
  res.status(200).render("register.pug", params);
});
app.get("/level2", (req, res) => {
  const params = {};
  res.status(200).render("level2.pug", params);
});
app.get("/level3", (req, res) => {
  const params = {};
  res.status(200).render("level3.pug", params);
});
app.get("/hospitalsignin", (req, res) => {
  const params = {};
  res.status(200).render("hospitalsignin.pug", params);
});
app.get("/hospitalregister", (req, res) => {
  const params = {};
  res.status(200).render("hospitalregister.pug", params);
});
app.get("/agentpage", (req, res) => {
  const params = {};
  res.status(200).render("agentpage.pug", params);
});
app.get("/hospitalist", (req, res) => {
  const params = {};
  res.status(200).render("list.pug", params);
});
app.get("/form", (req, res) => {
  const params = {};
  res.status(200).render("form.pug", params);
});
app.get("/rehome", (req, res) => {
  const params = {};
  res.status(200).render("rehome.pug", params);
});
app.get("/list", (req, res) => {
  const params = {};
  res.status(200).render("agentlist.pug", params);
});
app.get("/agform", (req, res) => {
  const params = {};
  res.status(200).render("agentform.pug", params);
});
app.get("/near", (req, res) => {
  const params = {};
  res.status(200).render("nearby.pug", params);
});
app.get("/rehome", (req, res) => {
  const params = {};
  res.status(200).render("rehome.pug", params);
});




// app.get("/form", (req, res) => {
//   const params = {};
//   res.status(200).render("form.pug", params);
// });
// app.get("/med", (req, res) => {
//   const params = {};
//   res.status(200).render("med.pug", params);
// });
// app.get("/index", (req, res) => {
//   const params = {};
//   res.status(200).render("index.pug", params);
// });
// app.get("/add", (req, res) => {
//   const params = {};
//   res.status(200).render("add.pug", params);
// });
// app.get("/about", (req, res) => {
//   const params = {};
//   res.status(200).render("about.pug", params);
// });
// app.get("/confirm", (req, res) => {
//   const params = {};
//   res.status(200).render("confirm.pug", params);
// });
// app.get("/dlogin", (req, res) => {
//   const params = {};
//   res.status(200).render("dlogin.pug", params);
// });
// app.get("/home", (req, res) => {
//   const params = {};
//   res.status(200).render("admin_doc.pug", params);
// });

app.post("/detail", async (req, res) => {
  var newData = req.body;
 user_database.insert(newData, err => {
    if (err) {
      res.status(400).send("nooo");
    } else {
      res.render("landing.pug");
    }
  });
});
app.post("/agent", async (req, res) => {
  var newData = req.body;
agent_database.insert(newData, err => {
    if (err) {
      res.status(400).send("nooo");
    } else {
      res.render("agentpage.pug");
    }
  });
});
app.post("/reg", async (req, res) => {
  var newData = req.body;
hospital_database.insert(newData, err => {
    if (err) {
      res.status(400).send("nooo");
    } else {
      res.render("hospitalsignin.pug");
    }
  });
});
app.post("/hsign", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
 hospital_database.findOne({ name: name }, (err, data) => {
    try {
      console.log(data.password, password);
      console.log(data);
      if (data.password === password) {
        res.status(200).render("hospitalup.pug");
      } else {
        res.send("invalid");
      }
    } catch {
      res.redirect("/");
    }
  });
});


// app.post("/vacin", async (req, res) => {
//   var newData = req.body;
//   vaccine_database.insert(newData, err => {
//     if (err) {
//       res.status(400).send("nooo");
//     } else {
//       res.render("thankyou.pug");
//     }
//   });
//   const email = req.body.email;
//   const timing = req.body.timing;
//   const name = req.body.name;

//   const user = user_database.findOne({ email: email }, (err, data) => {
//     const html = `
//         <html>
//         <head>
//         </head>
//         <style>
//             .header{
//                 text-align: center;
//                 background-color:black ;
//                 color: beige;
//                 font-size: medium;
//             }
//             .container{
//                 color: black;
//                 font-size: medium;

//             }
//             .text{
//                 font-size: medium;
//                 text-align: center;


//             }
//             .footer{
//                 background-color: black;
//                 color: white;
//             }
//         </style>
//         <body style="background-color:rgb(193, 250, 250);">
//          <div class="header" style=" text-align: center;
//          background-color:black ;color:white;">  <h1>Congratulation!!!!</h1></div>
//          <hr>
//          <div class="container">
//              <h2><i>DEAR SIR/MADAM,</i></h2>
//             <div class="text" style=" text-align: center;"> <P><b><i>We are here to inform you that you have succesfully booked an appoinment with are verified doctor <br>
//                  and it is your first appointment so it will be free of cost.Other details like video calling link will be <br> sent to you
//                  your registered mobile number as your mentioned timing.:):):)</b></i>
//              </P>
//              <li>${req.body.email}</li>
//             </div>
//          </div>
//          <hr>
        
//          <div class="footer">
//              <h2><i>Thank You!!</i></h2>

//              <h3><i>Regards:PetoZone</i></h3>
//          </div>

//         </body>
//         </html>



//         `;
//     exportMail(email, "Confirmation for booking", html);
//   });
// });

app.post("/check", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  user_database.findOne({ email: email }, (err, data) => {
    try {
      console.log(data.password, password);
      console.log(data);
      if (data.password === password) {
        res.status(200).render("level1.pug");
      } else {
        res.send("invalid");
      }
    } catch {
        res.send(500,'invalid') 
    }
  });
});

// app.get("/admin", (req, res) => {
//   res.status(200).render("admin.pug", {});
// });

// app.get("/add_doctor", (req, res) => {
//   res.status(200).render("admin_doc.pug", {});
// });

// app.get("/add_inv", (req, res) => {
//   res.status(200).render("admin_inv.pug", {});
// });

// app.get("/doctor", (req, res) => {
//   res.status(200).render("doctor.pug", {});
// });

// app.get("/add_to_database_doctor/:key/:name/:number", (req, res) => {
//   console.log("adding");
//   const doc = {
//     name: req.params.name,
//     number: req.params.number
//   };
//   console.log(doc);
//   const req_key = req.params.key;
//   res.contentType("application/json");
//   if (req_key == admin_key) {
//     doctor_database.insert(doc, err => {
//       if (err) {
//         console.log(err);
//         res.status(400).send({ status: "error" });
//       } else {
//         res.status(200).send({ status: "success" });
//       }
//     });
//   } else {
//     res.status(400).send("Invalid Key");
//   }
// });

// app.get("/add_to_database_inv/:key/:name/:price/:stock", (req, res) => {
//   console.log("adding");
//   const doc = {
//     name: req.params.name,
//     price: req.params.price,
//     stock: req.params.stock
//   };
//   console.log(doc);
//   const req_key = req.params.key;
//   res.contentType("application/json");
//   if (req_key == admin_key) {
//     inventory_database.insert(doc, err => {
//       if (err) {
//         console.log(err);
//         res.status(400).send({ status: "error" });
//       } else {
//         res.status(200).send({ status: "success" });
//       }
//     });
//   } else {
//     res.status(400).send("Invalid Key");
//   }
// });

app.get("/list/:db_name", (req, res) => {
  console.log(req.params.db_name);
  const db = databaseTable[req.params.db_name];
  db.find({}, (err, data) => {
    res.status(200).json(data);
  });
});

app.post("/vacin", async (req, res) => {
  // const doc_id = req.body.doc_id;
  const email = req.body.email;
  // const timing = req.body.timing;
  // const name = req.body.name;

  const user = user_database.findOne({ email: email }, (err, data) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    
    
    <style >
      .navbar{
        padding-left: 3%;
        padding-right: 3%;
        background-color: rgba(48, 169, 195, 1);
    
      }
    
      #jumbo{
         background:  rgba(48, 169, 195, 1);
         background-size: cover;
         border-radius: 30px;
    
      }
    
      .jumbotron{
        background:  rgb(206, 243, 255);
        padding-top: 12%;
        margin-bottom: 0px;
        height: 100vh;
        text-align: center;
        
      }
      .paddingTop{
        padding-top: 10%;
    
      }
      .paddingBot{
        padding-bottom: 10%;
      }
    
    
    
    </style>
    
        <title></title>
      </head>
      <body>
     
      
        <div class="jumbotron jumbotron-fluid">
      <div class="container" id="jumbo">
      <li>${req.body.email}</li>
  <li>your prefred timing:${req.body.first}-${req.body.last}</li>
      <li>Your Vaccine :${req.body.vaccine_name}</li>
        <div class="row">
      <div class="col-sm-5 border-right paddingTop paddingBot"><img src="https://images-eu.ssl-images-amazon.com/images/I/41c9F9wvYIL.png" alt="" height="300px" width="300px"></div>
      <div class="col-sm-7 paddingTop paddingBot">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
      </div>
    </div>
    
    
      </div>
    </div>
      </body>
    </html>
    

        `;
    exportMail(email, "Confirmation for booking", html);
  });
});
app.post("/agmail", async (req, res) => {
  // const doc_id = req.body.doc_id;
  const email = req.body.email;
  // const timing = req.body.timing;
  // const name = req.body.name;

  const user = user_database.findOne({ email: email }, (err, data) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    
    
    <style >
      .navbar{
        padding-left: 3%;
        padding-right: 3%;
        background-color: rgba(48, 169, 195, 1);
    
      }
    
      #jumbo{
         background:  rgba(48, 169, 195, 1);
         background-size: cover;
         border-radius: 30px;
    
      }
    
      .jumbotron{
        background:  rgb(206, 243, 255);
        padding-top: 12%;
        margin-bottom: 0px;
        height: 100vh;
        text-align: center;
        
      }
      .paddingTop{
        padding-top: 10%;
    
      }
      .paddingBot{
        padding-bottom: 10%;
      }
    
    
    
    </style>
    
        <title></title>
      </head>
      <body>
     
      
        <div class="jumbotron jumbotron-fluid">
      <div class="container" id="jumbo">
      <li>${req.body.email}</li>
  <li>your delivery area:${req.body.area}</li>
      <li>From hospital :${req.body.hospital}</li>
        <div class="row">
      <div class="col-sm-5 border-right paddingTop paddingBot"><img src="https://images-eu.ssl-images-amazon.com/images/I/41c9F9wvYIL.png" alt="" height="300px" width="300px"></div>
      <div class="col-sm-7 paddingTop paddingBot">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
      </div>
    </div>
    
    
      </div>
    </div>
      </body>
    </html>
    

        `;
    exportMai(email, "Confirmation for booking", html);
  });
});

// app.post("/checkout", (req, res) => {});
// app.post("/home", async (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   user_database.findOne({ email: email }, (err, data) => {
//     try {
//       console.log(data.password, password);
//       console.log(data);
//       if (data.password === password) {
//         res.status(200).render("home.pug");
//       } else {
//         res.send("invalid");
//       }
//     } catch {
//       res.redirect("/");
//     }
//   });
// });
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
