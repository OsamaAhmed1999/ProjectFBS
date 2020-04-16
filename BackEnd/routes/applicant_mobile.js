const express = require('express')
const router = express.Router();

const{
    postApplicantMobDetails,
    appById
} = require("../controllers/applicant_mobile")

// const {
//     applicantValidator
// } = require('../validator/index')

router.post('/postapplimob/:id', postApplicantMobDetails);
// router.get('/getappli/:cnic', getApplicantDetails);
// router.delete('/deleteappli/:cnic', deleteApplicantDetails);

router.param("id", appById)

module.exports = router;