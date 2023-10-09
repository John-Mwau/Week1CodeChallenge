// Speed Dectator
function speedDectator(){
    let defaultSpeed =70;
    let driverSpeed =parseFloat(prompt('Enter Your Car peed!'));//Takes drivers speed both as an integer or a float.
    let message;
        if(driverSpeed<=defaultSpeed){// checks provided logical operation. If true, prints Ok.
            return (message='Ok');
        }else{//If previous operation is false; it executes another operation.
            let detrementPoints=((driverSpeed-defaultSpeed)/2);//calculates detrement points.
            if(detrementPoints>12){//check if driver's license is to be suspended or not.
               return (message='License Suspended');
            }
        }
    }
    console.log(speedDectator());
