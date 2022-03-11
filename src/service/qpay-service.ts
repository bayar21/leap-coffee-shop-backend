import axios from "axios";
import { QPAY_PASSWORD, QPAY_USERNAME } from "../config";

const baseurl = "https://merchant-sandbox.qpay.mn/v2";

const getAccessToken = async () => {
  const response = await axios.post(
    baseurl + "/auth/token",
    {},
    {
      auth: {
        username: "TEST_MERCHANT",
        password: "123456",
      },
    }
  );

  return response.data.access_token;
};

export const createInvoice = async (
  amount: number,
  description: string,
  invoiceNumber: string,
  invoice_receiver_code: string
) => {
  try {
    const accestoken = await getAccessToken();
    const response = await axios
      .post(
        baseurl + "/invoice",
        {
          invoice_code: "TEST_INVOICE",
          sender_invoice_no: invoiceNumber,
          invoice_receiver_code: invoice_receiver_code,
          invoice_description: description,
          amount: amount,
        },
        {
          headers: {
            Authorization: "Bearer " + accestoken,
          },
        }
      )
      .catch((err) => {
        console.log(err);
        throw new Error("Invoice үүсгэхэд алдаа гарлаа");
      });
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("Invoice үүсгэхэд алдаа гарлаа");
  }
};

export const checkInvoice = async (invoice_code: any) => {
  const token = await getAccessToken();
  const response = await axios.get(baseurl + `/invoice/${invoice_code}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};
