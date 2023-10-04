As for this project, the pseudo-code would look something like this in JavaScript


```
JavaScript
var DNA1, DNA2, numMutations, Count;
DNA1 = 'ATCGATCGATCG'; #we want to be able to have users put in a set number of characters to compare
DNA2 = 'ATCGATGGATCG'; #we want to be able to have users put in a set number of characters to compare
numMutations = 0;
for (var count = 0; count < DNA1; count++) {
  if (DNA1.charAt((Count - 1)) == Count.charAt((Count - 1))) {
    window.alert('Mutation Detected');
    numMutations += 1;
  } else {
    window.alert('No Mutations Detected');
  }
}
```


This JavaScript code was produced by Blocky when creating Blocky code. 

As for now, this is just a prototype of how the code would look in Blocky when the Blocky code is all written out. 
For now, the code doesn't seem to work on Blocky because it runs into errors comparing strings. 
DNA1 and DNA2 as for now have hard-coded DNA strands which will be compared later on. However, later down in the road, we would like to implement a way for users to input their own strings into the code. While this hasn't been implemented in Blocky yet, we will get to it soon.

For now, this is done using loops. However, in future interactions, there will be an implementation of recursion because any for loop can be simply turned into a recursive function. 
However, for now, it is simpler to use a for loop to compare and get our idea on Blocky and figure out how Block works in a simplistic manner. 

Realistically, the data that we would need for our project would be basic Biology knowledge such as Sickle Cell Anaemia where the DNA that is produced is not GAG(CTC) but rather GTG(CAC) which produces the protein VAL instead of GLU.
The data can be stored in a list of diseases that are caused by mutations. 

This is a basic prototype of what we have on Blocky for now. We are still trying to figure out how Blocky works, and the formatting of the Blocky language. Throughout the week, we will be doing more research on how to do string comparison as well as adding to a list sort of like a dictionary in Python or hash table in C++. 

Finally, we would like to figure out how DNAs can be compared to show mutations since DNA is 2 stranded, unlike RNA which is 1 stranded. 
