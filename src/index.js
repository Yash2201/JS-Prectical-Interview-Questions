//  JS INTERVIEW QUESTIONS 

Array.prototype.extraProperty = "Yash"
const myNewArray = [1,2,3,4,5,6,7,8];

//  This will print all the values also the extra Property
for(let v in myNewArray) {
  console.log(v);
}

// the solutions
for(let v in myNewArray) {
  if(myNewArray.hasOwnProperty(v)){
    console.log(v);
  }
}


//  Custom Function 

// Basic Approach
Array.prototype.CustomFunctionOne = function (callback) {
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this);
  }
}

// Advanced Approach
Array.prototype.customFunctionTwo = function (callback, thisContext){
  if(typeof callback != 'function'){
    throw 'not a function'
  }

  const length = this.length

  let i = 0; 
  while(i < length){
    if(this.hasOwnProperty){
      callback.call(thisContext, this[i], i, this);
    }
    i++;
  }
}