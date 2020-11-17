function arrayBuffer2Base64(arraybuffer) {
    return 'data:image/png;base64,' + base64ArrayBuffer(arraybuffer);
}

function openFile() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = ".png";
    input.onchange = () => {
        var file = input.files[0];
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            output.innerText = arrayBuffer2Base64(reader.result);
        };
    };
    input.click();
}

window.addEventListener('paste', evt => {
    // works on Chrome
    navigator.clipboard.read().then(data => {
        /* data: 
         * - Array of items,
         *   each of the items are
         *   `{types: ["image/png", ...], ...}`
         *   with prototype methods such as `getType()`
         * 
         * Document for Clipboard API:
         * - https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
         */
        for (let i=0; i<data.length; i++) {
            if (data[i].types[0] == "image/png") {
                // TODO: Encode found image into Base64
            }
        }
    });

    // TODO: test on other browsers
})
