
const sendReq = async () => {
    const req = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    console.log(req.data.ticker.price);
}
