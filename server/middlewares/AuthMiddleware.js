const { verify } = require('jsonwebtoken');   

const validateToken = (req,res,next) => {
    
    const accessToken = req.header("accessToken");
    console.log(accessToken)
    if(!accessToken){
        return res.json({error: "User not Logged In"})
    }
    else{
        try {
                const validToken = verify(accessToken, "importantsecret")

                if(validToken){
                    return next();
                }
            } catch (err) {
                return res.json({error: err})
            }
    }

   
};

module.exports = { validateToken };