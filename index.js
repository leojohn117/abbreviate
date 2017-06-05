const abbreviate = require('./abbreviate');

const string = 'internationalization';
console.log('Before => ' + string + ' After => ' + abbreviate(string));

const string1 = 'accessibility';
console.log('Before => ' + string1 + ' After => ' + abbreviate(string1));

const string2 = 'handed';
console.log('Before => ' + string2 + ' After => ' + abbreviate(string2));

const string3 = 'left-handed';
console.log('Before => ' + string3 + ' After => ' + abbreviate(string3));

const string4 = 'deep-fried mars bars are yummy!';
console.log('Before => ' + string4 + ' After => ' + abbreviate(string4));

