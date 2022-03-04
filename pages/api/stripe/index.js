import { createStripeUserAccount } from "../../../services";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = await createStripeUserAccount(req.body);
    return res.status(200).json(data);
  }
  return res.status(200).json({ message: "Stripe API repository" });
}
