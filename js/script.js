//visage
var Canvas1 = document.getElementById('canvas1');
var context1 = Canvas1.getContext('2d');
context1.beginPath();
context1.lineWidth = '5'; //taille du tracé
context1.fillStyle = '#ffe6e6'; //couleur de la forme
context1.arc(300,300,125,0,2*Math.PI);
context1.fill();

//yeux
var Canvas1 = document.getElementById('canvas1');
var context2 = Canvas1.getContext('2d');
context2.beginPath();
context2.lineWidth = '5';
context2.fillStyle = 'black';
context2.arc(250,270,20,0,2*Math.PI);
context2.fill();

var Canvas1 = document.getElementById('canvas1');
var context3 = Canvas1.getContext('2d');
context3.beginPath();
context3.lineWidth = '5';
context3.fillStyle = 'black';
context3.arc(350,270,20,0,2*Math.PI);
context3.fill();

//blanc des yeux
var Canvas1 = document.getElementById('canvas1');
var context8 = Canvas1.getContext('2d');
context8.beginPath();
context8.lineWidth = '5';
context8.fillStyle = 'white';
context8.arc(255,280,6,0,2*Math.PI);
context8.fill();

var Canvas1 = document.getElementById('canvas1');
var context7 = Canvas1.getContext('2d');
context7.beginPath();
context7.lineWidth = '5';
context7.fillStyle = 'white';
context7.arc(356,280,6,0,2*Math.PI);
context7.fill();

//sourire
var Canvas1 = document.getElementById('canvas1');
var context4 = Canvas1.getContext('2d');
context4.beginPath();
context4.lineWidth = '10';
context4.strokeStyle = 'black';
context4.arc(300,350,55,0,Math.PI);
context4.stroke();

//chapeau
var Canvas1 = document.getElementById('canvas1');
var context5 = Canvas1.getContext('2d');
context5.fillStyle = '#008000';
context5.fillRect(160,160,280,60);

var Canvas1 = document.getElementById('canvas1');
var context6 = Canvas1.getContext('2d');
context6.fillStyle = '#008000';
context6.fillRect(225,100,150,80);

//cou
var Canvas1 = document.getElementById('canvas1');
var context9 = Canvas1.getContext('2d');
context9.fillStyle = '#ffe6e6';
context9.fillRect(270,422,60,40);

//corps
var Canvas1 = document.getElementById('canvas1');
var context10 = Canvas1.getContext('2d');
context10.fillStyle = '#003cb3';
context10.fillRect(160,462,280,138);

//vetements
var Canvas1 = document.getElementById('canvas1');
var context11 = Canvas1.getContext('2d');
context11.fillStyle = '#ffe6e6';
context11.moveTo(270,462);
context11.lineTo(300,580);
context11.lineTo(330,462);
context11.lineTo(270,462);
context11.fill();
