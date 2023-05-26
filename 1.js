function star() {
    let str = "";
    
    for (let i = 1; i <= 6; i++) {
        for (let k = 1; k <= i - 1; k++) {
            str += "*";
        }
        
        str += "\n";
    }
    
    return star;
}

console.log(star());
