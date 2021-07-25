let input = document.querySelector('input');
let textArea = document.querySelector('textarea');
let fileText ="";

input.addEventListener("change", () => {
    fileText = "";
    let files = input.files;

    if(files.length === 0)
        return;

    const file = files[0];
    
    let reader = new FileReader();

    reader.onload = e => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        fileText = lines.join('/n');
        textArea.value = lines.join('/n');
    }

    reader.onerror = e => alert(e.targer.error.name);
    reader.readAsText(file);
})