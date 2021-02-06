// variable
let unko = "hello world!";

console.log(unko);

// constant
const bigUnko = 'Hello, World';

console.log(bigUnko);

// array
let inoki = ['one', 'two', 'three', 'fooo'];
console.log(inoki[0]);

// loop
let index = 0;
while(index < 5) {
    index++;
}
console.log(index);

// if / else
if(inoki.length > 3) {
    console.log('ボンバイエ');
} else {
    console.log('ボン。。。！');
}

// function

const test = (arg) => {
    if(inoki.length > arg) {
        console.log('ボンバイエ');
    } else {
        console.log('ボン。。。！');
    }
};

test(5);

// object
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint'
};

console.log(unko2);

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
        window.alert('Hello, World');
});
