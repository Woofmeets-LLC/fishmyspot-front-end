import { integrationSdk } from "../../../sharetribe/integrationSDK";

export const config = {
    api: {
        bodyParser: true
    }
}

const handler = async (req, res) => {
    if(req.method === 'POST'){
        const {email, type} = req.body;
        if(!email || !type){
            res.status(422).send({
                message: 'Missing email or type or both',
                code: 422
            })
        }else{
            try{
                const user = await integrationSdk.users.show({
                    email                  
                });
                const userType = user?.data?.data?.attributes?.profile?.publicData?.account_type || undefined;
                if(userType === type){
                    res.status(200).send({
                        message: 'User is verified',
                        code: 200
                    })
                }else{
                    res.status(422).send({
                        message: 'User is not verified',
                        code: 422
                    })
                }
                
            }catch(error){
                res.status(404).send({
                    message: "User not found!",
                    code: 404
                })
            }
        }
        
    }
}

export default handler