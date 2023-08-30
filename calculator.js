var answer = '';
function insert(num) {
    var string = document.form.textview.value;
    var char = string[string.length - 1];
    if (string.length < 30) {
        if (!isNaN(char) || char == null || !isNaN(num)) {
            document.form.textview.value = string + num;
        } else if (num != char) {
            document.form.textview.value = string.replace(char, num);
        }
    }
}
function equal() {
    var sum = document.form.textview.value;
    if (sum) {
        answer = eval(sum);
        document.form.textview.value = answer;
    }
}
function clearFelid() {
    document.form.textview.value = '';
}
function delet() {
    var del = document.form.textview.value;
    if (del.length > 0) {
        answer = del[del.length - 1];
        document.form.textview.value = del.substring(0, del.length - 1);
    }
}
function lastAnswer() {
    document.form.textview.value += answer;
}
