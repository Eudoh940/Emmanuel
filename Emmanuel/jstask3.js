function words(int){
    // array for data storage
    let data = []
    // checking
    for (let i = 0; i <= int; i++){
        // if the number is divisible by 2, write "yu"
        if (i%2===0){
            data.splice(i-1, 1, "yu")
        //if the number is divisible by 3,write "gi" 
        }else if (i % 3 === 0){
            data.splice(i-1, 1, "gi")
        // if the number is divisible by 5, write "oh"
        }else if (i % 5 === 0){
            data.splice(i-1, 1, "oh")
        // if the number is divisible by 2 and 3, write "yu-gi"
        }else if (i % 2 ===0 && i % 3 ===0 ){
            data.splice("yu-gi")
        }else if (i% 3 ===0 && i%5 ===0 ){
            data.splice(i-1,1, "gi-oh")
        }else if (i % 2 === 0 && i % 3 ===0 && i % 5 ===0){
            data.splice( i - 1, 1, "yu-gi-oh")
        }else {
            data.push(i);
        }
    }
    console.log(data)
    return data;
}
words(100);
words(50)