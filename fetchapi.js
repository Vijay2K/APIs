// https://api.cryptonator.com/api/ticker/btc-usd


const fetchingData = async () => {
    try{
        let req = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
        let data = await req.json();
        console.log(data);
    }catch(e){
        console.log("Error Can't fetch");
    }
} 