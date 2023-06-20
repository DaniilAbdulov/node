function solve(compasses, gears, tablets) {
    function sevenPoints(c,g,t){
        if(c === g && g === t){
            return c * 7
        }else{
            let one = c;
            let two = g;
            let three = t;
            let count = 0;
            while(one != 0 && two != 0 && three!=0){
                one -= 1;
                two -= 1;
                three -=1;
                count += 7;
            }
            return count;
        }
    }
    let seven = sevenPoints(compasses,gears,tablets);
    function squares(c,g,t){
        return c**2 + g**2 + t**2
    }
    let square = squares(compasses, gears, tablets);
    return seven + square

  }
console.log( solve(2,1,1) )