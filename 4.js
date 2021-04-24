  var i ="";
  var j="";
  var k="";
  var l="";
  function pop1(){
  i=i+"1";
    document.getElementById("screen").innerHTML=i;
  }
  function pop2(){
  i=i+"2";
    document.getElementById("screen").innerHTML=i;
  }
  function pop3(){
  i=i+"3";
    document.getElementById("screen").innerHTML=i;
  }
  function pop4(){
  i=i+"4";
    document.getElementById("screen").innerHTML=i;
    }
    function pop5(){
    i=i+"5";
    document.getElementById("screen").innerHTML=i;
  }
  function pop6(){
  i=i+"6";
    document.getElementById("screen").innerHTML=i;
  }
  function pop7(){
    i=i+"7";
    document.getElementById("screen").innerHTML=i;
  }
  function pop8(){
    i=i+"8";
    document.getElementById("screen").innerHTML=i;
  }
  function pop9(){
  i=i+"9";
    document.getElementById("screen").innerHTML=i;
  }
    function pop16(){
  i=i+"0";
    document.getElementById("screen").innerHTML=i;
  }
    function pop14(){
  i="";
    document.getElementById("screen").innerHTML=i;
  }
  function pop10(){
    j=i;
    l=1;
    i="";
    document.getElementById("screen").innerHTML="+";
  }
  function pop11(){
   j=i;
    l=2;
    i="";
    document.getElementById("screen").innerHTML="-";
  }
  function pop12(){
    j=i;
    l=3;
    i="";
    document.getElementById("screen").innerHTML="×";
  }
  function pop13(){
    j=i;
    l=4;
    i="";
    document.getElementById("screen").innerHTML="÷";
  }
  
  var hh=true;
  function pop15(){
        i=parseInt(i);
        j=parseInt(j);
    if (l==1) {
        document.getElementById("screen").innerHTML=i+j;
    }else if(l==2){
        document.getElementById("screen").innerHTML=j-i;
    }else if(l==3){
        document.getElementById("screen").innerHTML=i*j;
    }else if(l==4){
        document.getElementById("screen").innerHTML=j/i;
    }else{
        document.getElementById("screen").innerHTML="NO INPUT";
    }
    i="";
    j="";

  }

  var myback=1;
  var timer = window.setInterval(time,500);
  function time(){
  if(myback==1){
         document.getElementById("999").style.backgroundImage='url("./12.JPG")';
         myback=myback+1;
    } else {
         document.getElementById("999").style.backgroundImage='url("./11.JPG")';
         myback=myback-1;
    }
  }