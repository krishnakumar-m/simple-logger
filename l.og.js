var l = {
enable : true,
ert : function(msg) {
 if(l.enable) {
  alert(msg);
 }
},
og : function(msg) {
if(l.enable) {
	this.showMsg(msg);
 }
},
clear : function() {
  var logdiv = document.getElementById('log-div');
   var msgs = logdiv.getElementsByTagName('pre');
// NodeList so fix like this
while(msgs[0]) { 
logdiv.removeChild(msgs[0]);
}
},
showMsg : function(msg) {
 var msgObj = {
 	type : 'pre',
  content : msg
 };
 if(document.getElementById('log-div')) {
 document.getElementById('log-div').style.display = 'block';
 document.getElementById('log-div').appendChild(newElm(msgObj));
  
 } else {
 var minBox = {
    type : 'div',
    id : 'log-min',
    content : ':'
  };
  document.body.appendChild(newElm(minBox));
   var closeBox = {
    type : 'div',
    id : 'log-close',
    content : 'X'
  };
  var clearBox = {
    type : 'div',
    id : 'log-clear',
    content : 'Clear'
  };
  var logDivObj = {
   type : 'div',
   id : 'log-div',
   content : [closeBox,clearBox,msgObj]
  };
  document.body.appendChild(newElm(logDivObj));
  document.getElementById('log-close').addEventListener('click',function(){
   document.getElementById('log-div').style.display = 'none';
     document.getElementById('log-min').style.display = 'block';
  });
  
    document.getElementById('log-clear').addEventListener('click',function(){
 l.clear();
  });
  
    document.getElementById('log-min').addEventListener('click',function(){
   document.getElementById('log-min').style.display = 'none';
    document.getElementById('log-div').style.display = 'block';
  });
  
 }
 
 var element = document.getElementById('log-div');
element.scrollTop = element.scrollHeight;
 
}
};
