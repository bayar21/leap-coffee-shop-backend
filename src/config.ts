require("dotenv").config();

export const SERVER_HOST_URL_DEV = process.env.SERVER_HOST_URL_DEV;
export const SERVER_PORT_DEV = process.env.SERVER_PORT_DEV;
export const DB_HOST_DEV = process.env.DB_HOST_DEV;
export const DB_USER_DEV = process.env.DB_USER_DEV;
export const DB_PASS_DEV = process.env.DB_PASS_DEV;
export const DB_CONNECTION_TYPE = process.env.DB_CONNECTION_TYPE_DEV;

export const REDIS_PORT = process.env.REDIS_PORT;

export const QPAY_PASSWORD = process.env.QPAY_PASSWORD;
export const QPAY_USERNAME = process.env.QPAY_USERNAME;
