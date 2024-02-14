// complete the given function
function palindrome(str){
  var ct=0;
	var s1=str.toUpperCase();
	console.log(s1);
	for(var i=0;i<s1.length;i++){
		
       if(s1[i]===s1[s1.length-i-1]){
		    ct++;
		     }}
	
    
  if(ct==s1.length){
		return true;
	}else{
		return false;
  }
}


module.exports = palindrome
