const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let charCode = '';
    let count = 1;
    
    for (let i = 0; i < expr.length + 1; i++) {
        if (count > 10) {
            count = 1;
            arr.push(charCode);
            charCode = '';
        }
        
        charCode += expr[i];
        count += 1    
    }
    
    let lastChar = '';
    let strings = [];
    let str = [];
    arr.forEach(item => {
        str = [];
        if (item.replace(/\*/g, '') === '') {
            str.push(' ');
        } else {
            item.split('').forEach((i, ind) => {
                
                if (lastChar === '') {
                    lastChar = i;
                } else if (i === '1' && lastChar === '0') {
                    lastChar = '1';
                } else if (lastChar === '1') {
                    let add = (i === '0') ? '.' : '-';
                    str.push(add);
                    lastChar = '';
                }
            });
        }
        
        strings.push(str)
        
    });
    
    let result = '';
    strings.forEach(item => {
        str = item.join('');
        if (str === ' ') {
            result += str;
        } else {
            result += MORSE_TABLE[str];    
        }
    })
    
    return result;
}

module.exports = {
    decode
}