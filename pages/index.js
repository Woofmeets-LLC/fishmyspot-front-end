const sharetribeSdk = require('sharetribe-flex-sdk')
const sdk = sharetribeSdk.createInstance({
    clientId: 'a2758eca-c933-45b3-b840-79d8b760f12e',
});


export default function Home() {
    const login = () => {
        sdk.login({username: 'missionhbp8@gmail.com', password: '12345678'})
            .then(console.log)
            .catch(console.error)
    }

    const showOwnListing = () => {
        sdk.transactions.transition({
            id: '620a2d20-31b1-4fa3-92b6-36da57e6f6e4',
            transition: "transition/request-payment-after-enquiry",
            params: {}
        }, {
            expand: true
        }).then(console.log)
            .catch(console.dir)
    }

    return (
        <div>
            <button onClick={login}>Login</button>
            <br/>
            <button onClick={showOwnListing}>get</button>
        </div>
    )
}
