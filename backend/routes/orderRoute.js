import express from 'express'
import {verifyRazorpay, placeOrder, placeOrderRazorpay, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()


//Admin feaatures
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment features

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//user features

orderRouter.post('/userorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default orderRouter;