import OrderModel, { OrderInterface } from "../model/orderModel";

// export function getOrdersByFilter(fieldName: string, value: any) {
//   return orderModel.aggregate([
//     { $match: { [fieldName]: value } },
//     {
//       $lookup: {
//         from: "orderdetails",
//         localField: "_id",
//         foreignField: "orderId",
//         as: "details_doc",
//       },
//     },
//     {
//       $unwind: "$details_doc",
//     },
//     {
//       $lookup: {
//         from: "products",
//         localField: "details_doc.productId",
//         foreignField: "_id",
//         as: "products_doc",
//       },
//     },
//     {
//       $unwind: "$products_doc",
//     },
//     {
//       $group: {
//         _id: "$userId",
//         status: { $first: "$status" },
//         createdAt: { $first: "$createdAt" },
//         totalAmount: { $sum: "$products_doc.basePrice" },
//         count: { $sum: 1 },
//         productDetails: { $push: "$products_doc" },
//       },
//     },
//     {
//       $project: {
//         _id: 0,
//         userId: "$_id",
//         status: 1,
//         createdAt: 1,
//         totalAmount: 1,
//         count: 1,
//         productDetails: 1,
//       },
//     },
//   ]);
// }
export function getOrdersByStatus(status: string, userId: string) {
  return OrderModel.find({ userId: userId, status: status });
}

export function getAllOrders(userId: string) {
  return OrderModel.find({ userId: userId });
}

export function getOrderByInvoiceId(invoiceId: string) {
  return OrderModel.findOne({ "qpay.invoice_id": invoiceId });
}

export async function createOrder(order: OrderInterface) {
  const newOrder = new OrderModel(order);
  await newOrder.save();
  return newOrder;
}
