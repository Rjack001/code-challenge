function QuestionMarks(str) { 
    result = false;
    for(let i = 0; i < str.length; i++) {
        for(let j = i+1; j < str.length; j++) {
            if(Number(str[i])+Number(str[j]) === 10) {
              if(str.slice(i+1,j).split('?').length - 1 === 3) {
                  result = true;  
                  break;
              } else {
                  return false;
              }
            }
        }
    }
    return result; 
  }
  
  
  console.time();
  QuestionMarks("arrb6???4xxbl5???eee5");
  console.timeEnd();