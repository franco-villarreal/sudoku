//'use strict'
var FPS = 60;
var rows = 9;
var columns = 9;
var table = new Array(rows);
var win = false;
var started = false;
var totalLine = 45;
var cells = document.getElementsByClassName('column');
var btnResolve = document.getElementById('btn_resolve');
var btnRefresh = document.getElementById('btn_refresh');
var btnSelect = document.getElementById('selectDifficulty');
var title1 = document.getElementById('title1');
/*btnResolve.onclick = function(){
  started = false;
  randomResolved();
}*/
btnRefresh.onclick = function(){
  initialize();
  randomize(btnSelect.value);
  started = true;
  reset();
}

function initialize(){
  var i = 0;
  for(var y=0;y<rows;y++){
    table[y] = new Array(columns);
    for(var x=0;x<columns;x++){
      table[y][x] = cells[i];
      table[y][x].className = 'column';
      table[y][x].innerHTML = '';
      i++;
    }
  }
}
function randomize(maxRandom){
  var random1 = 0;
  var random2 = 0;
  var repeatedNum = false;
  for(var y = 0;y<table.length;y++){
    for(var x = 0;x<table[0].length;x++){
      random1 = Math.round((Math.random()*maxRandom));
      if(random1 == maxRandom){
        do{
          random2 = Math.round((Math.random()*8));
        } while(checkRowNum(y,random2+1) || checkColumnNum(x,random2+1));
        repeatedNum = checkSquareNum(y,x,random2+1);
        if(!repeatedNum){
          table[y][x].className = 'column columnBlocked';
          table[y][x].innerHTML = random2 + 1;
        }
      }
    }
}
}
function randomResolved(){
  var random1 = 0;
  var repeatedNum1 = false;
  var repeatedNum2 = false;
  var repeatedNum3 = false;
  for(var y = 0;y<table.length;y++){
    for(var x = 0;x<table[0].length;x++){
      if(table[y][x].innerHTML == ''){
        random1 = 0;
        do{
          random1++;
          repeatedNum1 = checkSquareNum(y,x,random1);
          repeatedNum2 = checkRowNum(y,random1);
          repeatedNum3 = checkColumnNum(x,random1);
          console.log(repeatedNum1);
          console.log(repeatedNum2);
          console.log(repeatedNum3);
        } while((repeatedNum1 || repeatedNum2 || repeatedNum3) && random1<9);
        if(!repeatedNum1 && !repeatedNum2 && !repeatedNum3){
          console.log('NUMERO ' + random1 + ' EN ('+y+';'+x+')');
          table[y][x].innerHTML = random1;
        }
      }
      }
    }
    started = true;
}
function checkColumnNum(x,num){
  var repeated = false;
  var repeatedNum = 0;
  var actualNum = 0;
  for(var y=0;y<table.length;y++){
    actualNum = parseInt(table[y][x].innerHTML);
    if(!isNaN(actualNum)){
      if(actualNum == num){
        repeatedNum++;
      }
    }
  }
  if(repeatedNum>0){
    repeated = true;
  }
  return repeated;
}
function checkRowNum(y,num){
  var repeated = false;
  var repeatedNum = 0;
  var actualNum = 0;
  for(var x=0;x<table[0].length;x++){
    actualNum = parseInt(table[y][x].innerHTML);
    if(!isNaN(actualNum)){
      if(actualNum == num){
        repeatedNum++;
      }
    }
  }
  if(repeatedNum>0){
    repeated = true;
  }
  return repeated;
}
function checkSquareNum(y,x,num){
  var repeated = false;
  var repeatedNum = 0;
  var actualNum = 0;
  if(y<3 && x<3){
    console.log('square 1');
    for(var newY = 0;newY<3;newY++){
      for(var newX = 0;newX<3;newX++){
        actualNum = parseInt(table[newY][newX].innerHTML);
        if(!isNaN(actualNum)){
          if(actualNum == num){
            repeatedNum++;
          }
        }
      }
    }
  } else if(y<3 && x>=3 && x<6){
    console.log('square 2');
    for(var newY = 0;newY<3;newY++){
      for(var newX = 3;newX<6;newX++){
        actualNum = parseInt(table[newY][newX].innerHTML);
        if(!isNaN(actualNum)){
          if(actualNum == num){
            repeatedNum++;
          }
        }
      }
    }
  } else if(y<3 && x>=6 && x<9){
    console.log('square 3');
    for(var newY = 0;newY<3;newY++){
      for(var newX = 6;newX<9;newX++){
        actualNum = parseInt(table[newY][newX].innerHTML);
        if(!isNaN(actualNum)){
          if(actualNum == num){
            repeatedNum++;
          }
        }
      }
    }
  } else if(y>=3 && y<6 && x<3){
    console.log('square 4');
    for(var newY = 3;newY<6;newY++){
      for(var newX = 0;newX<3;newX++){
        actualNum = parseInt(table[newY][newX].innerHTML);
        if(!isNaN(actualNum)){
          if(actualNum == num){
            repeatedNum++;
          }
        }
      }
    }
  } else if(y>=3 && y<6 && x<6 && x>=3){
    console.log('square 5');
    for(var newY = 3;newY<6;newY++){
      for(var newX = 3;newX<6;newX++){
        actualNum = parseInt(table[newY][newX].innerHTML);
        if(!isNaN(actualNum)){
          if(actualNum == num){
            repeatedNum++;
          }
        }
      }
    }
  } else if(y>=3 && y<6 && x<9 && x>=6){
    console.log('square 6');
    for(var newY = 3;newY<6;newY++){
      for(var newX = 6;newX<9;newX++){
        actualNum = parseInt(table[newY][newX].innerHTML);
        if(!isNaN(actualNum)){
          if(actualNum == num){
            repeatedNum++;
          }
        }
      }
    }
  } else if(y>=6 && y<9 && x<3){
    console.log('square 7');
    for(var newY = 6;newY<9;newY++){
      for(var newX = 0;newX<3;newX++){
        actualNum = parseInt(table[newY][newX].innerHTML);
        if(!isNaN(actualNum)){
          if(actualNum == num){
            repeatedNum++;
          }
        }
      }
    }
  } else if(y>=6 && y<9 && x<6 && x>=3){
    console.log('square 8');
    for(var newY = 6;newY<9;newY++){
      for(var newX = 3;newX<6;newX++){
        actualNum = parseInt(table[newY][newX].innerHTML);
        if(!isNaN(actualNum)){
          if(actualNum == num){
            repeatedNum++;
          }
        }
      }
    }
  } else if(y>=6 && y<9 && x<9 && x>=6){
    console.log('square 9');
    for(var newY = 6;newY<9;newY++){
      for(var newX = 6;newX<9;newX++){
        actualNum = parseInt(table[newY][newX].innerHTML);
        if(!isNaN(actualNum)){
          if(actualNum == num){
            repeatedNum++;
          }
        }
      }
    }
  }
  if(repeatedNum>0){
    repeated = true;
  }
  return repeated;
}
function checkRows(){
  var y = 0;
  var x = 0;
  var i = 1;
  var notWin = false;
  while(i<10 && !notWin){
    y = 0;
    while(y<table.length && !notWin){
      x = 0;
      var lineValues = 0;
      while(x<table[0].length && !notWin){
        var num = parseInt(table[y][x].innerHTML);
        if(isNaN(num)){
          notWin = true;
        } else{
          lineValues += num;
        }
        x++;
      }
      if(lineValues == totalLine){
      } else {
        notWin = true;
      }
      y++;
      }
      i++;
  }
  return notWin;
}
function checkColumns(){
  var y = 0;
  var x = 0;
  var i = 1;
  var notWin = false;
  while(i<10 && !notWin){
    y = 0;
    while(x<table.length && !notWin){
      y = 0;
      var lineValues = 0;
      while(y<table[0].length && !notWin){
        var num = parseInt(table[y][x].innerHTML);
        if(isNaN(num)){
          notWin = true;
        } else{
          lineValues += num;
        }
        y++;
      }
      if(lineValues == totalLine){
      } else {
        notWin = true;
      }
      x++;
      }
      i++;
  }
  return notWin;
}
function checkSquares(){
  var y = 0;
  var x = 0;
  var auxX = 0;
  var auxY = 0;
  var notWin = false;
  var lineValues = 0;
  while(auxY<9 && !notWin){
    lineValues = 0;
    auxX=3;
    auxY+=3;
    while(y<auxY && !notWin){
      x = 0;
      while(x<auxX && !notWin){
        var num = parseInt(table[y][x].innerHTML);
        if(isNaN(num)){
          notWin = true;
        } else{
          lineValues += num;
        }
        x++;
      }
      y++;
    }
    if(lineValues == totalLine){
    } else {
      notWin = true;
    }
  }
  auxY = 0;
  y = 0;
  while(auxY<9 && !notWin){
    lineValues = 0;
    auxX=6;
    auxY+=3;
    while(y<auxY && !notWin){
      x = 3;
      while(x<auxX && !notWin){
        var num = parseInt(table[y][x].innerHTML);
        if(isNaN(num)){
          notWin = true;
        } else{
          lineValues += num;
        }
        x++;
      }
      y++;
    }
    if(lineValues == totalLine){
    } else {
      notWin = true;
    }
  }
  auxY = 0;
  y = 0;
  while(auxY<9 && !notWin){
    lineValues = 0;
    auxX=9;
    auxY+=3;
    while(y<auxY && !notWin){
      x = 6;
      while(x<auxX && !notWin){
        var num = parseInt(table[y][x].innerHTML);
        if(isNaN(num)){
          notWin = true;
        } else{
          lineValues += num;
        }
        x++;
      }
      y++;
    }
    if(lineValues == totalLine){
    } else {
      notWin = true;
    }
  }


  return notWin;
}
function reset(){
  win = false;
}
initialize();
// CLICK LISTENER
for (var y in table){
	for (var x in table[0]){
		(function(y,x){
	    table[y][x].onclick = function(){
        if(table[y][x].className == 'column' && started && !win){
          var num = parseInt(table[y][x].innerHTML);
          if(isNaN(num)){
            num = 0;
          }
          if(num>9){
            num = '';
          } else if(num == 9){
            num = '';
          } else {
            num++;
          }
          table[y][x].innerHTML = num;
        }
			}
    }) (y,x);}
}
var counter = 0;
var delay = 10;
function animateTittle(){
  if(counter>=delay){
    counter = 0;
    if(title1.style.color == 'white'){
      title1.style.color = 'red';
    } else if(title1.style.color == 'red'){
      title1.style.color = 'green';
    } else {
      title1.style.color = 'white';
    }
  } else {
    counter++;
  }

}
setInterval(function(){
  if(win){
    title1.innerHTML = 'HAS GANADO';
  } else {
    title1.innerHTML = 'S U D O K U';
  }
  if(!win && started){
    animateTittle();
    if(!checkRows() && !checkColumns() && !checkSquares()){
      win = true;
      console.log('WIN');
    } else {
      console.log('NOT WIN');
    }
  }
}, 1000/FPS);
