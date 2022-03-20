import Mailchimp from "mailchimp-api-v3";
import fetch from "node-fetch";
import md5 from "md5";

const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const mailchimpListID = process.env.MAILCHIMP_LIST_ID;
const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

const mailchimp = new Mailchimp(mailchimpApiKey);

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.method !== "POST") {
    res.status(200).json({ success: false });
    return;
  }
  const email = req?.body?.email?.trim()?.toLowerCase();
  const recaptchaToken = req?.body?.recaptchaToken;
  if (!email) {
    throw new Error("No email provided");
  }
  const emailHash = md5(email);
  const captchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`;
  try {
    const captchaResponse = await fetch(captchaUrl).then((response) =>
      response.json()
    );
    if (!captchaResponse.success) {
      console.log({ captchaResponse });
      throw new Error("Failed captcha");
    }
    const response = await mailchimp.put(
      `/lists/${mailchimpListID}/members/${emailHash}`,
      {
        email_address: email,
        status_if_new: "subscribed",
        tags: ["jsconf"],
      }
    );
    console.log({ response });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(200).json({ success: false });
  }
};
