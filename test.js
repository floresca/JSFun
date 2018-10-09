var randomAdder = () => {
    //Create a function that adds together the sum of 15 random numbers
    //console.log the total

    let values = 0;
    for(let i = 0; i < 15; i++){
        values += Math.floor(Math.random() * (101 - 10) + 10);
    }

    console.log('total is', values);
}

randomAdder();