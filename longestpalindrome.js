function longestPalindrome(s){
  if (s.length===0){
    return 0;
  }
  s=s.replace(' ','');
  var forward;
  var backward;
  var longest=1;
  for (var i = 0; i <s.length; i++) {
    for (var j=0; j <= s.length; j++){
       backward= s.slice(i,j).split('').reverse().join('');
       forward= s.slice(i,j);
        if(backward===forward){
            if(backward.length>longest){
              longest=backward.length;
            }

        }
    }
  }
  console.log('the longest palindrome is:',longest);
  return longest;
}
