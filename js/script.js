function openFile() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = ".png";
    input.onchange = () => {
        var file = input.files[0];
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            var bufferArray = reader.result;
            output.innerText = 'data:image/png;base64,' + base64ArrayBuffer(bufferArray);
        };
    };
    input.click();
}
