//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onReadyStateChange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //take some action
            if(request.status==200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }
        }
        //not done yet
    };
    
    //Make a request
    request.open('GET','http://divyats.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
  //make a request to server 
  //caputure the list of names and render it as a list
  var names=['name1','name2','name3','name4'];
  var list='';
  for(var i=0;i<names.length;i++){
      list+='<li>'+names[i]+'</li>';
  }
  val ul=document.getElementById('namelist');
  ul.innerHTML=list;
};