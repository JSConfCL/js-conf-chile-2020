const Mailchimp = require("mailchimp-api-v3");
var md5 = require("md5");

const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const mailchimpListID = process.env.MAILCHIMP_LIST_ID;
const mailchimp = new Mailchimp(mailchimpApiKey);

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.method !== "POST") {
    res.status(200).json({ success: false });
    return;
  }
  const email = req?.body?.email?.trim()?.toLowerCase();
  if (!email) {
    throw new Error("No email provided");
  }
  try {
    const emailHash = md5(email);
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
  } catch (e) {
    console.error(e);
    console.error("ERROR, could not save email");
    res.status(200).json({ success: false });
  }
};
