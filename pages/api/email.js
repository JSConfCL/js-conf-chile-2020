export default async (req, res) => {
  if (req.method !== "POST") {
    res.end();
    return;
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ name: "John Doe" });
};
