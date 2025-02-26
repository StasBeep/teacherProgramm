
import { koren } from "./_function.js";

function litera(inp, text) {
    let result = inp;

  result = koren(result.value);

  text.innerHTML = result;
}

export { litera };