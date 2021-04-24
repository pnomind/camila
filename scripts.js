var j=9;

  function l1(){
     j=j-1;
     if (j==1) {
      j=8;
     }
     for (var i = 1; i < 4; i++) {
             if (j==9) {
                 j=2;
                }
             j=j+1;
         document.getElementById(i).src=j+".jpg";
     }
    j=j-1;
}




  function l2(){
    j=j+1;
    if(j==11){
       j=4;
    }
     for (var i = 3; i > 0; i--) {
             if (j==3) {
                 j=10;
                }
             j=j-1;
         document.getElementById(i).src=j+".jpg";
     }
     j=j+1;
  }