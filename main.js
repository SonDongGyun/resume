$(function () {
  $('[data-toggle="tooltip"]').tooltip();
   
  
var Request = function() {  
this.getParameter = function(name) {  
    var rtnval = '';  
    var nowAddress = unescape(location.href);  
    var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1,  
            nowAddress.length)).split('&');  
    for (var i = 0; i < parameters.length; i++) {  
        var varName = parameters[i].split('=')[0];  
        if (varName.toUpperCase() == name.toUpperCase()) {  
            rtnval = parameters[i].split('=')[1];  
            break;  
        }  
    }  
    return rtnval;  
}  
}  
var request = new Request();  
var paramValue = request.getParameter('gubun');  


if( paramValue == '1'){

var imgList = document.getElementsByClassName('images');
for(var i=0; i<imgList.length; i++){
imgList[i].style.display = 'block';
}
}else if(paramValue == '2'){
var i=0;

      var time =  setInterval(()=>{

          if(!callback()){
              callback();
              clearInterval(time);
          }else{
              i++;
              if(i%10 == 0){
                  console.clear();
              }
          }

      },10);
  
}

const text = document.getElementById("name");
  const load = () =>{
    setTimeout(() =>{
      text.textContent = "ㅅ|"
    },0)
    setTimeout(() =>{
      text.textContent = "소|"
    },150)
    setTimeout(() =>{
      text.textContent = "손|"
    },300)
    setTimeout(() =>{
      text.textContent = "손ㄷ|"
    },450)
    setTimeout(() =>{
      text.textContent = "손도|"
    },600)
    setTimeout(() =>{
      text.textContent = "손동|"
    },750)
    setTimeout(() =>{
      text.textContent = "손동ㄱ|"
    },900)
    setTimeout(() =>{
      text.textContent = "손동규|"
    },1050)
    setTimeout(() =>{
      text.textContent = "손동균|"
    },1200)
    setTimeout(() =>{
      text.textContent = "손동균"
    },1600)
    setTimeout(() =>{
      text.textContent = "손동균|"
    },2000)
    setTimeout(() =>{
      text.textContent = "손동균"
    },2400)
    setTimeout(() =>{
      text.textContent = "손동균|"
    },2800)
    setTimeout(() =>{
      text.textContent = "손동규|"
    },2950)
    setTimeout(() =>{
      text.textContent = "손동ㄱ|"
    },3100)
    setTimeout(() =>{
      text.textContent = "손동|"
    },3250)
    setTimeout(() =>{
      text.textContent = "손도|"
    },3400)
    setTimeout(() =>{
      text.textContent = "손ㄷ|"
    },3550)
    setTimeout(() =>{
      text.textContent = "손|"
    },3700)
    setTimeout(() =>{
      text.textContent = "소|"
    },3850)
    setTimeout(() =>{
      text.textContent = "ㅅ|"
    },4000)
    setTimeout(() =>{
      text.textContent = "|"
    },4150)
    setTimeout(()=>{
      text.textContent = "W|"
    },4300);
    setTimeout(()=>{
      text.textContent = "We|"
    },4450);
    setTimeout(()=>{
      text.textContent = "Web|"
    },4600);
    setTimeout(()=>{
      text.textContent = "Web D|"
    },4750);
    setTimeout(()=>{
      text.textContent = "Web De|"
    },4900);
    setTimeout(()=>{
      text.textContent = "Web Dev|"
    },5050);
    setTimeout(()=>{
      text.textContent = "Web Deve|"
    },5200);
    setTimeout(()=>{
      text.textContent = "Web Devel|"
    },5350);
    setTimeout(()=>{
      text.textContent = "Web Develo|"
    },5500);
    setTimeout(()=>{
      text.textContent = "Web Develop|"
    },5650);
    setTimeout(()=>{
      text.textContent = "Web Develope|"
    },5800);
    setTimeout(()=>{
      text.textContent = "Web Developer|"
    },5950);
    setTimeout(()=>{
      text.textContent = "Web Develope|"
    },6450);
    setTimeout(()=>{
      text.textContent = "Web Develop|"
    },6600);
    setTimeout(()=>{
      text.textContent = "Web Develo|"
    },6750);
    setTimeout(()=>{
      text.textContent = "Web Devel|"
    },6900);
    setTimeout(()=>{
      text.textContent = "Web Deve|"
    },7050);
    setTimeout(()=>{
      text.textContent = "Web Dev|"
    },7200);
    setTimeout(()=>{
      text.textContent = "Web De|"
    },7350);
    setTimeout(()=>{
      text.textContent = "Web D|"
    },7500);
    setTimeout(()=>{
      text.textContent = "Web |"
    },7650);
    setTimeout(()=>{
      text.textContent = "Web|"
    },7800);
    setTimeout(()=>{
      text.textContent = "We|"
    },7950);
    setTimeout(()=>{
      text.textContent = "W|"
    },8100);
    setTimeout(()=>{
      text.textContent = "|"
    },8250);
  }
  
  //load();
  //setInterval(load,8400);
})

function callback(){
      Math.random(45)+1;
      var lotto = [];
      for(var i=0; i<6; i++){
          var num = Math.floor(Math.random()* 45)+1;
          for(var j=0; j<lotto.length; j++){
              if(lotto[j] == num){
                  num = Math.floor(Math.random()* 45)+1;
              }
          }
          lotto.push(num);

          lotto = [...new Set(lotto)];
      }
      lotto.sort((a,b)=>{
          return a-b;
      });

      if(lotto.length == 6){
          console.log('5주전-0707 : ' + lotto);
           if(lotto[0] == 8 && lotto[1] == 11  && lotto[2] == 14
            && lotto[3] == 17 && lotto[4] == 36 && lotto[5] == 39){   
              var J=0;
              var time2 =  setInterval(()=>{
                  var gb = false;
                  var isCallback2 = callback2(lotto , gb);
                  if(!isCallback2){
                      gb = true;
                      callback2(lotto , gb);
                      clearInterval(time2);
                  }else{
                      J++;
                      if(J%10 == 0){
                          console.clear();
                      }
                  }
              },10);
          }else{
              return true;
          }
      }else{
          return true;
      }
  }
  function callback2(lotto , gb){
      Math.random(45)+1;
      var lotto2 = [];
      for(var i=0; i<6; i++){
          var num2 = Math.floor(Math.random()* 45)+1;
          for(var j=0; j<lotto2.length; j++){
              if(lotto2[j] == num2){
                  num2 = Math.floor(Math.random()* 45)+1;
              }
          }
          lotto2.push(num2);

          lotto2 = [...new Set(lotto2)];
      }
      lotto2.sort((a,b)=>{
          return a-b;
      });

      if(lotto2.length == 6){
          
        console.log('4주전 : ' + lotto2);
      if(lotto2[0] == 3 && lotto2[1] == 4  && lotto2[2] == 6
            && lotto2[3] == 8 && lotto2[4] == 32 && lotto2[5] == 42){          
            
              var J=0;
              var time3 =  setInterval(()=>{
                  var gb = false;
                  var isCallback3 = callback3(lotto ,lotto2 , gb);
                  if(!isCallback3){
                      gb = true;
                      callback3(lotto ,lotto2 , gb);
                      clearInterval(time3);
                  }else{
                      J++;
                      if(J%10 == 0){
                          console.clear();
                      }
                  }
              },10);
          }else{
              return true;
          }
      }else{
          return true;
      }
  }
  function callback3(lotto ,lotto2, gb){
    Math.random(45)+1;
    var lotto3 = [];
    for(var i=0; i<6; i++){
        var num3 = Math.floor(Math.random()* 45)+1;
        for(var j=0; j<lotto3.length; j++){
            if(lotto3[j] == num3){
                num3 = Math.floor(Math.random()* 45)+1;
            }
        }
        lotto3.push(num3);

        lotto3 = [...new Set(lotto3)];
    }
    lotto3.sort((a,b)=>{
        return a-b;
    });

    if(lotto3.length == 6){
        
      console.log('3주전 : ' + lotto3);
      if(lotto3[0] == 7 && lotto3[1] == 9  && lotto3[2] == 11
            && lotto3[3] == 21 && lotto3[4] == 30 && lotto3[5] == 35){     
          
            var J=0;
            var time4 =  setInterval(()=>{
                var gb = false;
                var isCallback4 = callback4(lotto ,lotto2 ,lotto3 , gb);
                if(!isCallback4){
                    gb = true;
                    callback4(lotto ,lotto2 ,lotto3 , gb);
                    clearInterval(time4);
                }else{
                    J++;
                    if(J%10 == 0){
                        console.clear();
                    }
                }
            },10);
        }else{
            return true;
        }
    }else{
        return true;
    }
  }
  function callback4(lotto , lotto2 , lotto3 , gb){
    Math.random(45)+1;
    var lotto4 = [];
    for(var i=0; i<6; i++){
        var num4 = Math.floor(Math.random()* 45)+1;
        for(var j=0; j<lotto4.length; j++){
            if(lotto4[j] == num4){
                num4 = Math.floor(Math.random()* 45)+1;
            }
        }
        lotto4.push(num4);

        lotto4 = [...new Set(lotto4)];
    }
    lotto4.sort((a,b)=>{
        return a-b;
    });

    if(lotto4.length == 6){
        
      console.log('2주전 : ' + lotto4);
       if(lotto4[0] == 3 && lotto4[1] == 7  && lotto4[2] == 15
            && lotto4[3] == 16 && lotto4[4] == 19 && lotto4[5] == 43){     
          
            var J=0;
            var time5 =  setInterval(()=>{
                var gb = false;
                var isCallback5 = callback5(lotto ,lotto2 ,lotto3,lotto4 , gb);
                if(!isCallback5){
                    gb = true;
                    callback5(lotto ,lotto2 ,lotto3,lotto4 , gb);
                    clearInterval(time5);
                }else{
                    J++;
                    if(J%10 == 0){
                        console.clear();
                    }
                }
            },10);
        }else{
            return true;
        }
    }else{
        return true;
    }
  }
  function callback5(lotto , lotto2 , lotto3 , lotto4, gb){
      Math.random(45)+1;
      var lotto5 = [];
      for(var i=0; i<6; i++){
          var num5 = Math.floor(Math.random()* 45)+1;
          for(var j=0; j<lotto5.length; j++){
              if(lotto5[j] == num5){
                num5 = Math.floor(Math.random()* 45)+1;
              }
          }
          lotto5.push(num5);

          lotto5 = [...new Set(lotto5)];
      }
      lotto5.sort((a,b)=>{
          return a-b;
      });

      if(lotto5.length == 6){
          
          if(gb){
            console.log('번호추천 : ' + lotto5);  
          } else{
            console.log('5주전 : ' + lotto);
            console.log('4주전 : ' + lotto2);
            console.log('3주전 : ' + lotto3);  
            console.log('2주전 : ' + lotto4);  
            console.log('1주전 : ' + lotto5);  
          }
         if(lotto5[0] == 3 && lotto5[1] == 16  && lotto5[2] == 18
            && lotto5[3] == 24 && lotto5[4] == 40 && lotto5[5] == 44){     
            
              return false;
          }else{
              return true;
          }
      }else{
          return true;
      }
  }
     