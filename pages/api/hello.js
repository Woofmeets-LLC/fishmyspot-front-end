import { integrationSdk } from "../../sharetribe/integrationSDK";


export default async function handler(req, res) {
  const { userId, lastTransitions } = req.body;

  const queryData = {
    include: ['reviews']
  };
  userId && (queryData.userId = userId);
  lastTransitions && (queryData.lastTransitions = lastTransitions);

  // console.log(queryData);
  try {
    const result = await integrationSdk.transactions.query(queryData);

    res.status(200).send({ result: result });

  } catch (error) {
    res.status(400).send();
  }
}

export const config = {
  bodyParser: true
}