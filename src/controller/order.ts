import { Request, Response } from "express";
import { getProductById } from "../service";
import {
  getAllOrders,
  getOrdersByStatus,
  createOrder,
} from "../service/order.service";
import { createInvoice } from "../service/qpay-service";

export async function getOrdersHandler(req: Request, res: Response) {
  const { status } = req.query;
  if (status) {
    const orders = await getOrdersByStatus(status as string, req.userId);
    res.send(orders);
  } else {
    const orders = await getAllOrders(req.userId);
    res.send(orders);
  }
}

export async function postOrderHandler(req: Request, res: Response) {
  const orderData = { userId: req.userId, date: Date.now(), ...req.body.order };

  try {
    let order = await createOrder(orderData);

    const amount = orderData.totalPrice;
    const description = "Description";
    const invoiceNumber = order._id;
    const invoice_receiver_code = orderData.userId;
    const qpayResponse = await createInvoice(
      amount,
      description,
      invoiceNumber,  
      invoice_receiver_code
    );
    order.qpay = qpayResponse;
    await order.save();
    res.send(order);
  } catch (err) {
    res.status(500).send({ error: err });
    console.log(err);
  }
}
