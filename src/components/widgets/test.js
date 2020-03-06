function help(arr){
    let x = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3];
    return x;
}
function FIO(target){
    if(target < 3){
        if(target == 1){
            return 1;
        }
        if(target == 2){
            return 2;
        }
    }
    let arr = [1,2,4];
    let loopNum = target - 3;
    for(let i = 0; i < loopNum; i++){
        arr.push(help(arr));
    }
    return arr[arr.length-1]
}

console.log(FIO(3))