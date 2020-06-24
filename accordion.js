export default function accordion() {
var root = document.createElement('div');
var a3 = document.createElement('button');
a3.className = 'accordion';
var textNode_3 = document.createTextNode('Project');
a3.append(textNode_3);
var panelPrj = document.createElement('div');
root.appendChild(a3);
panelPrj.className = 'panel';
var h5Tab = document.createElement('h5');
var textNode_7 = document.createTextNode('tab');
h5Tab.append(textNode_7);
var h5page1 = document.createElement('h5');
panelPrj.appendChild(h5Tab);
var textNode_9 = document.createTextNode('page1');
h5page1.append(textNode_9);
var a1 = document.createElement('button');
panelPrj.appendChild(h5page1);
root.appendChild(panelPrj);
a1.className = 'accordion';
var textNode_12 = document.createTextNode('Components');
a1.append(textNode_12);
var div_13 = document.createElement('div');
root.appendChild(a1);
div_13.className = 'panel';
var p0 = document.createElement('p');
p0.draggable = 'true';
p0.component = 'div';
var textNode_18 = document.createTextNode('div');
p0.append(textNode_18);
var p1 = document.createElement('p');
div_13.appendChild(p0);
p1.draggable = 'true';
p1.component = 'accordion';
var textNode_22 = document.createTextNode('accordion');
p1.append(textNode_22);
var p2 = document.createElement('p');
div_13.appendChild(p1);
p2.draggable = 'true';
p2.component = 'tab';
var textNode_26 = document.createTextNode('tab');
p2.append(textNode_26);
var p3 = document.createElement('p');
div_13.appendChild(p2);
p3.draggable = 'true';
p3.component = 'window';
var textNode_30 = document.createTextNode('window');
p3.append(textNode_30);
var a2 = document.createElement('button');
div_13.appendChild(p3);
root.appendChild(div_13);
a2.className = 'accordion';
var textNode_33 = document.createTextNode('CJ Hub');
a2.append(textNode_33);
var div_34 = document.createElement('div');
root.appendChild(a2);
div_34.className = 'panel';
var textNode_36 = document.createTextNode('CJ Hub');
div_34.append(textNode_36);
root.appendChild(div_34);
var acc = []
acc.push(a1)
acc.push(a2)
acc.push(a3)
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
p1.ondragstart = ev => {
  ev.dataTransfer.setData('component', ev.target.component)
}
p2.ondragstart = ev => {
  ev.dataTransfer.setData('component', ev.target.component)
}
p3.ondragstart = ev => {
  ev.dataTransfer.setData('component', ev.target.component)
}
root.panelPrj = panelPrj
h5Tab.ondblclick = ev => {
  document.eventManager('test')
}
h5page1.ondblclick = ev => {
  document.eventManager('accordion.test', 'hello')
}
function h5Response (ev) {
  console.log("response: " + ev.detail)
}
document.registerDefault(h5Response)
document.register('h5Response2', ev => {
  console.log('got it.')
})
return root;}