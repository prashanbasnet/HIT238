//script for calculation of total work time
var cal_work = document.querySelector("#cal_work");
cal_work.addEventListener('click',function(event){
  event.preventDefault();
var worktime=document.getElementById("worktime");
var workendtime=document.getElementById("workendtime");
var workdifference= document.getElementById("workdifference");
splitStartTime = worktime.value.split(":");
splitEndTime= workendtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}
var result = h +":"+ m;
workdifference.value=result;
sessionStorage.setItem('work_hour', h);
});

//script for calculation of total exercise time
var cal_exercise = document.querySelector("#cal_exercise");
cal_exercise.addEventListener('click',function(event){
  event.preventDefault();
var exercisetime=document.getElementById("exercisetime");
var exerciseendtime=document.getElementById("exerciseendtime");
var exercisedifference= document.getElementById("exercisedifference");
splitStartTime = exercisetime.value.split(":");
splitEndTime= exerciseendtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}
var result = h +":"+ m;
exercisedifference.value=result;
sessionStorage.setItem('exercise_hour', h);
});

//script for calculation of total sleep time
var cal_sleep = document.querySelector("#cal_sleep");
cal_sleep.addEventListener('click',function(event){
  event.preventDefault();
var sleeptime=document.getElementById("sleeptime");
var sleependtime=document.getElementById("sleependtime");
var sleepdifference= document.getElementById("sleepdifference");
splitStartTime = sleeptime.value.split(":");
splitEndTime= sleependtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}
var result = h +":"+ m;
sleepdifference.value=result;
sessionStorage.setItem('sleep_hour', h);
});

//script for calculation of total extra time
var cal_extra = document.querySelector("#cal_extra");
cal_extra.addEventListener('click',function(event){
  event.preventDefault();
var extratime=document.getElementById("extratime");
var extraendtime=document.getElementById("extraendtime");
var extradifference= document.getElementById("extradifference");
splitStartTime = extratime.value.split(":");
splitEndTime= extraendtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}

//script for calculation of total study time
var result = h +":"+ m;
studydifference.value=result;
sessionStorage.setItem('study_hour', h);
});

var cal_extra = document.querySelector("#cal_study");
cal_extra.addEventListener('click',function(event){
  event.preventDefault();
var extratime=document.getElementById("studytime");
var extraendtime=document.getElementById("studyendtime");
var extradifference= document.getElementById("studydifference");
splitStartTime = studytime.value.split(":");
splitEndTime= studyendtime.value.split(":");
var h;
var m;
if(splitStartTime[1]>splitEndTime[1]){
   var hr=splitEndTime[0]-1;
   //console.log(hr);
   var min=parseInt(splitEndTime[1])+60;
   //console.log(min);
  h = hr-splitStartTime[0];
  m = min-splitStartTime[1];
}else{
  h = splitEndTime[0]-splitStartTime[0];
  m = splitEndTime[1]-splitStartTime[1];
}

var result = h +":"+ m;
studydifference.value=result;
sessionStorage.setItem('study_hour', h);
});

//script for "Go back" button
function goBack()
  {
  window.history.back()  //goes straight back to the history
  }
;
