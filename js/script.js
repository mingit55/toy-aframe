import App from "./App.js";

window.addEventListener('load', async e => {
    let config = await fetch("/config.ini").then(res => res.json())
    const app = new App(config);
});