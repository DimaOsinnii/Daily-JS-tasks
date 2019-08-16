function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}
console.log(checkSpam("XXX sss")) ;