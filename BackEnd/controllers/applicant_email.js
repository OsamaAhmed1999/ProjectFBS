var sql = require('mysql');

var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mayarflats_db"
});

exports.appById = (req, res, next, id) => {
    let sql = `SELECT * FROM applicant_info WHERE id = ?`;
    con.query(sql, [id], (err, result)=> {
        if (err || result == ""){
            return res.status(400).json({
                error: "No Applicant Found"
            })
        }
        req.data = result[0]
        next()
    })
};


// Post Applicant Email Details
exports.postApplicantEmailDetails = (req , res) => {
    let data = {
        id: req.data.id,
        appli_email: req.body.appli_email
    };

    let sql = "INSERT INTO applicant_email SET ?";
    con.query(sql, [data], (err, result) => {
        if(err){
            return res.status(400).json({
                error: err.sqlMessage
            });
        }
        else{
            res.status(200).json({
                message: "Inserted Successfuly"
            });
        }
    });
};