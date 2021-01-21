// https://icanhazdadjoke.com/


const btn =  document.querySelector("button");
const displayJokes = document.querySelector(".jokes");

const fetchData = async () => {
    const headers = {headers : {Accept : "application/json"}}
    const res = await axios.get("https://icanhazdadjoke.com/", headers);
    return res.data.joke;
} 


const addJokes = async () => {
    const jokes = await fetchData();
    const li = document.createElement("li");
    li.append(jokes);
    displayJokes.append(li);
}


btn.addEventListener("click", () => {
    addJokes();
})
