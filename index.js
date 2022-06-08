// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        
        return someValue - 42;
    }

    else {
        return 42 - someValue;
    
    }
    
}

distanceInBlocks =  distanceFromHqInBlocks();

function distanceFromHqInFeet(someValue) {
    function distanceFromHqInBlocks(someValue) {
        if (someValue > 42) {
        
            return someValue - 42;
        }
    
        else {
            return 42 - someValue;
        
        }

        
    }

    const result = distanceFromHqInBlocks(someValue);
    return result * 264;



}


function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    }
    else {
        return (start - destination) * 264;
    }
}


function calculatesFarePrice(start, destination) {
    if (destination > start) {
        let distance;
        distance = (destination - start) * 264;
        if (distance > 2500) {
            return "cannot travel that far";
        } 
        else if (distance > 2000) {
            return 25;
        }
        else if (distance > 400) {
            return (distance -400) * 0.02;
        }
        else {
            return 0;
        }

    }
    else {
        let distance;
        distance = (start - destination) * 264;
        if (distance > 2500) {
            return "cannot travel that far";
        }
        else if (distance > 2000) {
            return 25;
        } 
        else if (distance > 400){
            return (distance -400) * 0.02;
        }
        else {
            return 0;
        }
    
    }
}






