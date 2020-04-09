let data = [
    {
        principal: 2500,
        time: 1.8,
    },
    {
        principal: 1000,
        time: 5,
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
]
for (i of data){
    console.log(i)
}
let data = [{principal, time}]
function interestCalculator(data){
    let rate = [data.principal, data.time]
    if (data.principal >= 2500 && data.time > 1 && data.time< 3){
        rate = 3;
    }else if(data.principal >= 2500 && data.time >= 3) {
        rate = 4;
    }else if(data.principal < 2500 || data.time <= 1){
        rate = 2;
    }else{
        rate = 1;
    }  
}
let interest = (data.principal * rate * data.time) / 100
function interestData(interest) {
    data.map(rate)
} 
console.log (interestCalculator())