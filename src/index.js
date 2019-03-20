module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let regExp = '';
  bracketsConfig.forEach(function(item, i, arr) {

    (/[A-Za-zА-Яа-яЁё0-9]/.test(bracketsConfig[i][0]))
    ? regExp += bracketsConfig[i][0]
    : regExp += '\\' + bracketsConfig[i][0];

    (/[A-Za-zА-Яа-яЁё0-9]/.test(bracketsConfig[i][1]))
    ? regExp += bracketsConfig[i][1]
    : regExp += '\\' + bracketsConfig[i][1];
  
  });
  
  str = str.match(new RegExp('[' + regExp + ']','g')).join('');
  
  let brackets = '';
  let foundBrackets = true;
  while(foundBrackets) {
    
    foundBrackets = false;
    bracketsConfig.forEach(function(item, i, arr) {
      brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
      if(str.indexOf(brackets) + 1) {
        str = str.split(brackets).join('');      
        foundBrackets = true;
      }
    });
    
  };
  
  return (str=='') ? true : false;
  
}
