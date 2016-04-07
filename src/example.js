var dateFormat = require('dateformat');
var now = new Date();

console.log(dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"));

console.log(dateFormat(now, "isoDateTime"));

// ...Or add your own 
dateFormat.masks.hammerTime = 'HH:MM! "Can\'t touch this!"';
console.log(dateFormat(now, "hammerTime"));

// When using the standalone dateFormat function, 
// you can also provide the date as a string 
console.log(dateFormat("Jun 9 2007", "fullDate"));

// Note that if you don't include the mask argument, 
// dateFormat.masks.default is used 
console.log(dateFormat(now));

// And if you don't include the date argument, 
// the current date and time is used 
console.log(dateFormat());

// You can also skip the date argument (as long as your mask doesn't 
// contain any numbers), in which case the current date/time is used 
console.log(dateFormat("longTime"));
// 5:46:22 PM EST 

// And finally, you can convert local time to UTC time. Simply pass in 
// true as an additional argument (no argument skipping allowed in this case): 
console.log(dateFormat(now, "longTime", true));

// ...Or add the prefix "UTC:" or "GMT:" to your mask.
console.log(dateFormat(now, "UTC:h:MM:ss TT Z"));
// 10:46:21 PM UTC 

// You can also get the ISO 8601 week of the year: 
console.log(dateFormat(now, "W"));

// and also get the ISO 8601 numeric representation of the day of the week: 
console.log(dateFormat(now,"N"));
console.log("hogehoge");
