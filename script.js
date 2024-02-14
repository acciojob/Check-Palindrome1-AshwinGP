// complete the given function

function palindrome(str){
  var ct=0;
	
	for(var i=0;i<str.length;i++){
		
       if(str[i]==str[str.length-i-1]){
		    ct++;
		     }
	}
    
  if(ct==str.length){
		return true;
	}else{
		return false;
  }
	
}
module.exports = palindrome
