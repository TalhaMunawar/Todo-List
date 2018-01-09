
var count=0;
var id=0;
var list={};


var taskData = document.getElementById("taskData");
taskData.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    var data={};
    var key="id"+id;
    var text=document.getElementById("taskData").value;
    document.getElementById("taskData").value="";
        data.text=text;
        data.id=key;
        data.status="active";

    list[key]=data;
    id++;
 //  alert(list[key].text);

  var div = document.createElement("div");
  div.classList.add('row');
  div.classList.add('custom-padding');

    var div1= document.createElement("div");
    div1.classList.add('col-lg-1');

    var checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.id="checkbox"+key;
    checkbox.classList.add("toggle");
    checkbox.addEventListener("click",function(){
        changeStatus(this.id);
    } );
    div1.appendChild(checkbox);




    var div11= document.createElement("div");
    div11.classList.add('col-lg-11');

    div11.innerHTML=list[key].text;
    div.id=list[key].id;
    div.appendChild(div1);
    div.appendChild(div11);
    document.getElementById('divdata').appendChild(div);
  
    updateItemsCount();




    }
});

function showAllTasks() {

    document.getElementById("activeTask").classList.remove("custom-button-selected");
    document.getElementById("completedTask").classList.remove("custom-button-selected");
    document.getElementById("allTask").classList.add("custom-button-selected");

    removeAllTaskData();    
    for(var key in list)
    {
          displayTaskObject(list[key]);
      //  alert(list[key]);
    }

}

function updateItemsCount(){
    var items=document.getElementById("itemsLeft");
    var itemsNum=countItemsLeft();
    items.innerHTML= itemsNum==1? itemsNum+" item left": itemsNum+" items left";
}

function showActiveTasks() {

    document.getElementById("activeTask").classList.add("custom-button-selected");
    document.getElementById("completedTask").classList.remove("custom-button-selected");
    document.getElementById("allTask").classList.remove("custom-button-selected");


    removeAllTaskData();    
    for(var key in list)
    {
          if(list[key].status=="active")
          displayTaskObject(list[key],"active");
      //  alert(list[key]);
    }

}
function showCompletedTasks() {

    document.getElementById("activeTask").classList.remove("custom-button-selected");
    document.getElementById("completedTask").classList.add("custom-button-selected");
    document.getElementById("allTask").classList.remove("custom-button-selected");


    removeAllTaskData();    
    for(var key in list)
    {
          if(list[key].status=="completed")
          displayTaskObject(list[key]);
      //  alert(list[key]);
    }

}

function clearCompletedTasks(){
    for(var key in list)
    {
          if(list[key].status=="completed")
          {
            delete list[key];
          }
        
     
    }
    showAllTasks();
}

function countItemsLeft(){
   
        var length = 0;
        for( var key in list ) {
            if( list[key].status=="active" ) {
                length++;
            }
        }
        return length;


}

function displayTaskObject(obj){
     
    var div = document.createElement("div");
    div.classList.add('row');
    div.classList.add('custom-padding');
  
      var div1= document.createElement("div");
      div1.classList.add('col-lg-1');
  
      var checkbox=document.createElement("input");
      checkbox.type="checkbox";
      checkbox.id="checkbox"+obj.id;
      checkbox.classList.add("toggle");
      obj.status=="completed"? checkbox.checked=true:checkbox.checked=false;
      checkbox.addEventListener("click",function(){
          changeStatus(this.id);
      } );
      div1.appendChild(checkbox);
  
  
  
  
      var div11= document.createElement("div");
      div11.classList.add('col-lg-11');
  
      div11.innerHTML=obj.text;
      div.id=obj.id;
      div.appendChild(div1);
      div.appendChild(div11);
      document.getElementById('divdata').appendChild(div);
     

}

function removeAllTaskData()
{
    var myNode = document.getElementById("divdata");//this will remove all the previous data
    while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
    }
}
function changeStatus(checkboxId){
//alert(checkboxId.substring(8));

   if(document.getElementById(checkboxId).checked)
   {
    list[checkboxId.substring(8)].status="completed";
   }
   else
   {
    list[checkboxId.substring(8)].status="active";
   }
   updateItemsCount();
}