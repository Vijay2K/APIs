// https://api.cryptonator.com/api/ticker/btc-usd

const req = new XMLHttpRequest();

req.onload = function () {
    console.log("We Got Response!");
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.target);
    console.log(data.ticker.base);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log("Error");
    console.log(this);
}

req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
req.send();