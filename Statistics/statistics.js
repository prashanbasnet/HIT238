//chart data
console.log(sessionStorage.getItem('work_hour'));
console.log(sessionStorage.getItem('exercise_hour'));
console.log(sessionStorage.getItem('sleep_hour'));
console.log(sessionStorage.getItem('extra_hour'));

var work_hour=sessionStorage.getItem('work_hour');
var exercise_hour=sessionStorage.getItem('exercise_hour');
var sleep_hour=sessionStorage.getItem('sleep_hour');
var extra_hour=sessionStorage.getItem('extra_hour');

var chartjson = {
  "title": "My Statistics",
  "data": [{
    "name": "Work",
    "score": work_hour
  }, {
    "name": "Exercise",
    "score": exercise_hour
  }, {
    "name": "Sleep",
    "score": sleep_hour
  }, {
    "name": "Extra",
    "score": extra_hour
  }],
  "xtitle": "Hours",
  "ytitle": "Works",
  "ymax": 100,
  "xmax": 100,
  "ykey": 'score',
  "xkey": "name",
  "prefix": "%"
}

//chart colors
var colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];

//constants
var TROW = 'tr',
  TDATA = 'td';

var chart = document.createElement('div');
//create the chart canvas
var barchart = document.createElement('table');
//create the title row
var titlerow = document.createElement(TROW);
//create the title data
var titledata = document.createElement(TDATA);
//make the colspan to number of records
titledata.setAttribute('colspan', chartjson.data.length + 1);
titledata.setAttribute('class', 'charttitle');
titledata.innerText = chartjson.title;
titlerow.appendChild(titledata);
barchart.appendChild(titlerow);
chart.appendChild(barchart);

//create the bar row
var barrow = document.createElement(TROW);

//lets add data to the chart
for (var i = 0; i < chartjson.data.length; i++) {
  barrow.setAttribute('class', 'bars');
  var prefix = chartjson.prefix || '';
  //create the bar data
  var bardata = document.createElement(TDATA);
  var bar = document.createElement('div');
  bar.setAttribute('class', colors[i]);
  bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.innerText = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.appendChild(bar);
  barrow.appendChild(bardata);
}

//create legends
var legendrow = document.createElement(TROW);
var legend = document.createElement(TDATA);
legend.setAttribute('class', 'legend');
legend.setAttribute('colspan', chartjson.data.length);

//add legend data
for (var i = 0; i < chartjson.data.length; i++) {
  var legbox = document.createElement('span');
  legbox.setAttribute('class', 'legbox');
  var barname = document.createElement('span');
  barname.setAttribute('class', colors[i] + ' xaxisname');
  var bartext = document.createElement('span');
  bartext.innerText = chartjson.data[i][chartjson.xkey];
  legbox.appendChild(barname);
  legbox.appendChild(bartext);
  legend.appendChild(legbox);
}
barrow.appendChild(legend);
barchart.appendChild(barrow);
barchart.appendChild(legendrow);
chart.appendChild(barchart);
document.getElementById('chart').innerHTML = chart.outerHTML;

function goBack()
  {
  window.history.back()
  }
;
