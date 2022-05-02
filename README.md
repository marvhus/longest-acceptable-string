# Better search for longest acceptable string on a 7 segment display

This is an adaptation of the program Tom Scott made.    
At the end of his video he challenged the viewer to find multiple acceptible words.    
So I did it.    

---

How this works is that it takes in a [wordlist](https://github.com/dwyl/english-words/blob/master/words.txt)    
then it splits into an array,    
then it sorts it by length and alphabetical order,    
then it loops through the array backwards until it finds a specified amount of accepted words.    
The ammount of accepted words can be changed with the variable:    
```js
var ammountOfWords = 10;
```

To run this on linux you need to have node instaled and the worlist in the same folder as the program, and it must be named `words.txt`  
(you can change that to something else if you want, but then you need to change the line that reads the file)  

Then run it using this:
```sh
node script.js
```

Tom Scott's Video: https://youtu.be/zp4BMR88260
