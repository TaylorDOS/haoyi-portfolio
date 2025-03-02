import { sendMail } from "../../service/mailService";
const handler = async (req, res) => {
  try {
    const { method, body } = req;
    switch (method) {
      case "POST": {
        const { subject, email, message } = body;
        if (!subject || !email || !message) {
          // Check if all required fields are provided
          res.status(400).json({
            error_code: "missing_fields",
            message: "Subject, email, and message are required.",
          });
          return;
        }
        await sendMail(subject, email, message);
        res.status(200).send("Success");
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;