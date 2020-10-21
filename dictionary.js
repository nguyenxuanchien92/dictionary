let english = ["hello","go","bye"];
let vietnamese = ["xin chào","đi","tạm biệt"];

function convertWord(str) {
    for (let i = 0; i < english.length; i++) {
        if(str === english[i]){
            console.log(vietnamese[i]);
        }
    }
}

convertWord("hello");