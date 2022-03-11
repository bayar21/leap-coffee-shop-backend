import { Express, Request, Response } from "express";
import { getConfigHandler, addConfigHandler } from "./controller/config";
import {
  generateOTPHandler,
  verifyOTPHandler,
} from "./controller/authentication";
import {
  getProductsHandler,
  getProductByIdHandler,
  createProductHandler,
} from "./controller/product";
import {
  getAllCategoriesHandler,
  getCategoryByIdHandler,
} from "./controller/category";
import {
  getAllSpecialsHandler,
  getAllSpecialProductsHandler,
} from "./controller/specials";
import { getOrdersHandler, postOrderHandler } from "./controller/order";
import { getStoresController } from "./controller";
import { checkAuth } from "./middlewares/authentication";

import { checkInvoice, createInvoice } from "./service/qpay-service";
import { check } from "express-validator";
import { createOrder, getOrderByInvoiceId } from "./service/order.service";
// import { checkInvoice } from "./service/qpay-service";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Product

  app.get("/products", getProductsHandler);
  app.get("/products/:id", getProductByIdHandler);
  app.post("/products", createProductHandler);

  // Category

  app.get("/categories", getAllCategoriesHandler);
  app.get("/categories/:id", getCategoryByIdHandler);

  // Specials
  //socke
  app.get("/specialproducts", getAllSpecialProductsHandler);
  app.get("/specials", getAllSpecialsHandler);

  // Authentication

  app.post("/auth/phone", generateOTPHandler);
  app.post("/auth/verify", verifyOTPHandler);

  app.get("/stores", getStoresController);

  // Orders
  app.get("/orders", checkAuth, getOrdersHandler);
  app.post("/createorder", checkAuth, postOrderHandler);
  app.get("/checkInvoice/:invoiceId", async (req, res) => {
    const { invoiceId } = req.params;
    const response = await checkInvoice(invoiceId);

    if (response.invoice_status === "OPEN") {
      res.send({ paid: false });
    } else {
      const order = await getOrderByInvoiceId(invoiceId);
      order.paid = true;
      await order.save();
      res.send({ paid: true });
    }
  });

  // app.post("/qpay", async (req, res) => {
  //   const { amount } = req.body;
  //   const data = await createInvoice(amount);
  //   res.send(data);
  // });

  // app.post("/qpay/invoiceId", async (req, res) => {
  //   const { invoice_code } = req.body;
  //   const data = await getInvoiceId(invoice_code);
  //   res.send(data);
  // });

  // Config

  app.get("/config/:name", getConfigHandler);
  app.post("/config/:name", addConfigHandler);
}
