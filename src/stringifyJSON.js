// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
   var objType = typeof (obj);
    if(objType==='undefined'){return undefined};
    if(objType==='function'){return undefined};
    if(obj === null ) {return '' + obj;}
    if(objType==='number'){return '' + obj};
    if(objType==='boolean'){return '' + obj};
    if(objType==='string'){return '"' + obj + '"'};

  if (Array.isArray(obj)){
    var result = [];
    for (var i = 0; i< obj.length ; i++){
      if (stringifyJSON(obj[i]) === undefined)
        result.push('null');
      else
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }
  else{
    var finalRes = '';
    for (var key in obj){
      if (finalRes !== ''){
        finalRes = finalRes + ',';
      }
      if (stringifyJSON(obj[key]) !== undefined){
        finalRes = finalRes + '"' + key + '":' + stringifyJSON(obj[key]);
      }
    }
    return '{' + finalRes + '}';
  }
};


