import { getSdk } from '../../../sharetribe/sharetribeSDK';

export default function handler(req, res) {
  getSdk().transactions.query({
    only: "sale",
    lastTransitions: ["transition/request"]
  }).then((response) => {
    // res.data contains the response data
    
    res.status(200).json(response);
  }).catch(err => res.status(200).json(err))


}
