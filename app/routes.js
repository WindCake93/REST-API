const {Router} = require("express");

const router = Router();

router.get('/',(req,res)=>{
    res.send("Using the StudentsRoutes");
});


module.exports = router;