function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str
    }
    else {
        return str.slice(0, maxlength) + "...";
    }
}
alert(truncate("about js", 0))  ;