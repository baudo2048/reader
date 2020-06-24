export default function tab() {
var tabRoot = document.createElement('div');
var btn1 = document.createElement('button');
btn1.style.backgroundColor = 'white';
var textNode_3 = document.createTextNode('tab 1');
btn1.append(textNode_3);
btn1.className = 'BUTTON_YMA';
btn1.onclick = ev => {toggleTab(event, tab1)};;
var btn2 = document.createElement('button');
btn2.style.backgroundColor = '#DDDDDD';
var textNode_8 = document.createTextNode('tab 2');
btn2.append(textNode_8);
btn2.className = 'BUTTON_YMA';
btn2.onclick = ev => {toggleTab(event, tab2)};;
var btn3 = document.createElement('button');
btn3.style.backgroundColor = '#DDDDDD';
var textNode_13 = document.createTextNode('tab 3');
btn3.append(textNode_13);
btn3.className = 'BUTTON_YMA';
btn3.onclick = ev => {toggleTab(event, tab3)};;
var tab1 = document.createElement('div');
tab1.style.display = 'block';
var tab2 = document.createElement('div');
tab2.style.display = 'none';
var textNode_20 = document.createTextNode('tab 2');
tab2.append(textNode_20);
var tab3 = document.createElement('div');
tab3.style.display = 'none';
var div_23 = document.createElement('div');
div_23.id = 'chart_div';
function toggleTab(ev, tabName){
    btn1.style.backgroundColor = '#DDDDDD';
    btn2.style.backgroundColor = '#DDDDDD';
    btn3.style.backgroundColor = '#DDDDDD';
    tab1.style.display = 'none';
    tab2.style.display = 'none';
    tab3.style.display = 'none';
    tabName.style.display = 'block';
    ev.target.style.backgroundColor = 'white';
}
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);
        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
return tabRoot;}