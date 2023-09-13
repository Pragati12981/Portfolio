const express = require('express')
const { sendEmailController } = require('../controllers/portfolioController')
// router object
const router = express.Router()

// routes
router.post('/newmail', (req, res) => {
    // Your route handling logic here
  });
// export 
module.exports = router;