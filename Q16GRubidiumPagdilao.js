process.stdin.on('data', function (data){
    let num = Number(data.toString().trim());
    if (num >= 1 && num <= 100){
        let start = 1;
        let diff = 1;
        let result = "";

        while(start < num){
            result += start + " ";
            start += diff;
            diff++;
        }

        console.log(result.trim());
        process.exit();
    }
    else{
            console.log('Invalid number, please enter a number between 1 and 100.');    
    }
})