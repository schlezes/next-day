# next-day
A single function to return the abreviated (three  character) next day.

// this is for going forward
// both r === 6 and ary[r + 1]
// work together

// when r === 6
// the next day has to be sun

I needed to present the next few days in sequence into a UL/LI element.
The number of LI elements maybe fixed or unknown.
I am using the Date() method for obtaining the current date.
Then calling this function to obtain the subsequent next day following today's day.
Then use this function as part of a forEach method to populate the HTMLElements LI object:  {  "0": {}, "1": {},  "2": {},  "3": {},  "4": {} }
