class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_str = '';

        for (let word of strs) {
            encoded_str += word.length.toString().padStart(4,'0') + word
        }
        return encoded_str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(encoded_str) {
       
        if (encoded_str.length == 1) {
            return [""]
        }

        let decoded_str = []
        let word_length = encoded_str.slice(0,4)
        let start = 4;
        let end = start + +word_length;

        while (end <= encoded_str.length) {

            decoded_str.push(encoded_str.slice(start,end))
           
            word_length = encoded_str.slice(end, end + 4)
                  
            start = +end + 4
            
            end = start + +word_length
            
        }
        
        return decoded_str

    }
}
