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
