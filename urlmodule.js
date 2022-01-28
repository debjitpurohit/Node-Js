const myURL = new URL('https://nodejs.org/');
myURL.pathname = 'api/url.html';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.port='8000'
// myURL.password='Debjit8125'

console.log(myURL)
console.log(myURL.href)
