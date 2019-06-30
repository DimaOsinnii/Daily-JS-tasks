/*function maxProfit(arr) {
     let maxProf = 0
     let prof = 0;
    for(i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            prof = arr[j] - arr[i];
            if(prof > maxProf) maxProf = prof;
        }
    }
    return maxProf;
}*/
function maxProfit(arr) {
    let minPrice = Infinity;
    let maxProf = 0;
    arr.forEach(function (val) {
        if(val < minPrice) {
            minPrice = val;
        }
        else if(val - minPrice > maxProf) {
            maxProf = val - minPrice;
        }
    });
    return maxProf;
}