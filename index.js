var lengthOfLongestSubstring = function(s) {
    const arrOfString = [];
    let string = '';
    let letter = ''; 
    function searchSubString(s){
        let cache = new Set();
        for(let i = 0; i < s.length; i++){
            letter = s[i];
            string += letter;
            if(cache.has(letter)){

                cache.clear();
                
            }else{
                cache.add(letter)
            }
            arrOfString.push(Array.from(cache).length)
        }
        
    }
    searchSubString(s);
    return Math.max(...arrOfString)
};
console.log( lengthOfLongestSubstring("dvdf") )