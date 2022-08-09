

function copyUnfilter(){
    let copyText = document.getElementById("1").value;
    const word = document.getElementById("1");
    const setWord = document.getElementById("copyWord");
    var copyLength = copyText.length;

    copyText = insert(copyText, copyLength / 3 * 2, "​")

    console.log(copyText);
    
    copyText = insert(copyText, copyLength / 3 * 3, "​")

    copyText = insert(copyText, copyLength / 3 * 1, "​")

    console.log(copyText);

    

    setWord.innerHTML = copyText
}
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}
//
