const { PaymentMiddleware, userMiddleware } = require("../common-middleware");
const router = require("express").Router();

router.post('/razorpay', PaymentMiddleware);

module.exports = router;
