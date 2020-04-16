const express = require('express')
const router = express.Router();

const{
    postApplicantEmailDetails,
    appById
} = require("../controllers/applicant_email")

// const {
//     applicantValidator
// } = require('../validator/index')

router.post('/postappliemail/:id', postApplicantEmailDetails);
// router.get('/getappli/:cnic', getApplicantDetails);
// router.delete('/deleteappli/:cnic', deleteApplicantDetails);

router.param("id", appById)

module.exports = router;