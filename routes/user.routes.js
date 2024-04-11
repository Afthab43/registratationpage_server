const express = require('express');
const { signUp, logIn } = require('../controller/user.controller');

let router=express.Router()

router.post(`/signup`,signUp)
router.post(`/login`,logIn)


module.exports=router