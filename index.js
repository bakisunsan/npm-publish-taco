const _tacoParse = (int) => {
    let tacos = "";
    for (let i = 0; i < int; i++) {
        tacos += "🌮";
    }
    return tacos;
}

module.exports = {_tacoParse};
