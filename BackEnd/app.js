const express = require('express')
const app = express();

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const cors = require('cors')
// const fs = require('fs')

const authRoutes = require('./routes/auth')
const flatRoutes = require('./routes/flat_detail')
const installmentRoutes = require('./routes/installment')
const kinInfoRoutes = require('./routes/kin_info')
const appRoutes = require('./routes/appliant')
const appMobRoutes = require('./routes/applicant_mobile')
const appEmailRoutes = require('./routes/applicant_email')

app.use(bodyParser.json())
app.use(expressValidator());
app.use(cookieParser());
app.use(cors())

app.use('/', authRoutes)
app.use('/', flatRoutes)
app.use('/', installmentRoutes)
app.use('/', kinInfoRoutes)
app.use('/', appRoutes)
app.use('/', appMobRoutes)
app.use('/', appEmailRoutes)

app.get("/", (req, res) => {
  fs.readFile('doc/apiDocs.json', (err, data) => {
    if(err){
      res.status(400).json({
        error: err
      }) 
    }
    const docs = JSON.parse(data)
    res.json(docs)
  })
})

// app.use(function (err, req, res, next) {
//     if (err.name === 'UnauthorizedError') {
//       res.status(401).json({error: "Unauthorized"});
//     }
//   });

app.listen(8080, ()=>{
});
