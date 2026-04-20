import { normalize, capitalize, sentenced, titled } from "./utils.js";

const toolsElement = document.getElementById("alat-alat-ul");

const tools = {
    "capitalize": capitalize,
    "normalize": normalize,
    "sentenced": sentenced,
    "titled": titled
}

function toolsHandler(event) {
    const isTool = event.target.closest("button");
    if (!isTool) return;

    // Ambil data-action dan fungsinya dari objek "tools"
    const actionData = isTool.dataset.action;
    const action = tools[actionData];

    // Akan masuk jika actionData valid, mis. "data-action" dan "data-target"
    if (action) {
        // Ambil data-target (textarea) dan masukkan seabgai ID
        const textarea = document.getElementById(isTool.dataset.target);
        textarea.value = action(textarea.value);
    }
}

toolsElement.addEventListener("click", toolsHandler);
