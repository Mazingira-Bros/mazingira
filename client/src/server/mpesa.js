import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const orgShortCode = process.env.ORG_SHORTCODE;
const orgPasskey = process.env.ORG_PASSKEY;
const orgCallbackUrl = process.env.ORG_CALLBACK_URL;
const mpesaEndpoint = process.env.MPESA_ENDPOINT;
const mpesaPublicKey = process.env.MPESA_PUBLIC_KEY;
const mpesaPrivateKey = process.env.MPESA_PRIVATE_KEY;
const mpesaCertPath = process.env.MPESA_CERT_PATH;

const generateToken = async () => {
  const url = `${mpesaEndpoint}/oauth/v1/generate?grant_type=client_credentials`;
  const auth = `Basic ${Buffer.from(
    `${mpesaPublicKey}:${mpesaPrivateKey}`
  ).toString("base64")}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: auth,
    },
  });

  const data = await response.json();

  return data.access_token;
};

const generatePassword = () => {
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, -3);

  return Buffer.from(`${orgShortCode}${orgPasskey}${timestamp}`).toString(
    "base64"
  );
};

app.post("/mpesa/stkpush", async (req, res) => {
  const { phoneNumber, amount, transactionDesc } = req.body;

  if (!phoneNumber || !amount || !transactionDesc) {
    res.status(400).json({ error: "Missing required parameters." });
    return;
  }

  const token = await generateToken();

  const password = generatePassword();

  const requestBody = {
    BusinessShortCode: orgShortCode,
    Password: password,
    Timestamp: new Date()
      .toISOString()
      .replace(/[^0-9]/g, "")
      .slice(0, -3),
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: orgShortCode,
    PhoneNumber: phoneNumber,
    CallBackURL: orgCallbackUrl,
    AccountReference: "Donation",
    TransactionDesc: transactionDesc,
  };

  const response = await fetch(`${mpesaEndpoint}/mpesa/stkpush/v1/processrequest`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
    agent: httpsAgent,
  });

  const data = await response.json();

  if (data.ResponseCode !== "0") {
    res.status(400).json({ error: "Error initiating payment." });
    return;
  }

  const checkoutRequestId = uuidv4();

  res.status(200).json({
    checkoutRequestId,
    checkoutRequestResponse: data,
  });
});

app.post("/mpesa/callback", (req, res) => {
  const { Body } = req.body;

  console.log(`Payment received: ${Body}`);

  res.status(200).send();
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
