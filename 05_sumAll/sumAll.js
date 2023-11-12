const sumAll = function(a, b) {
    let result;

    if (typeof a === 'number'           
        && typeof b === 'number'
        && !(a < 0) 
        && !(b < 0) ){

            if (a < b) {                          
                for (a ; a <= b ; a++) {    
                    result += a;
                }
                return result; 

            } else if (a > b) {
                for (b ; b <= a ; b++) {
                    result += b;
                }
                return result;
            }            
    } else {
        return ('ERROR');
    }

};

// Do not edit below this line
module.exports = sumAll;

