function facto (num) {
    if (num === 0 || num === 1 ) {
        return 1;
 
    } else {
        return num * facto(num - 1);
    }
}
let result = facto(6)
console.log(result);