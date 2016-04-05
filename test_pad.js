var tessel = require('tessel');

var rowPIN_1 = tessel.port['A'].pin['G1'];
var rowPIN_2 = tessel.port['A'].pin['G2'];
var rowPIN_3 = tessel.port['B'].pin['G1'];
var rowPIN_4 = tessel.port['B'].pin['G2'];
var colPIN_1 = tessel.port['C'].pin['G1'];
var colPIN_2 = tessel.port['C'].pin['G2'];
var colPIN_3 = tessel.port['D'].pin['G1'];
var colPIN_4 = tessel.port['D'].pin['G2'];
var rowPIN = [rowPIN_1,rowPIN_2, rowPIN_3, rowPIN_4];
var colPIN = [colPIN_1,colPIN_2, colPIN_3, colPIN_4];

var pad = require('Pad').use(rowPIN, colPIN);

pad.on('ready', function(){
	pad.start(100);
	pad.on('1', function(){console.log('ITS 1');});
	pad.on('2', function(){console.log('ITS 2');});
	pad.on('3', function(){console.log('ITS 3');});
	pad.on('A', function(){console.log('ITS A');});
	pad.on('4', function(){console.log('ITS 4');});
	pad.on('5', function(){console.log('ITS 5');});
	pad.on('6', function(){console.log('ITS 6');});
	pad.on('B', function(){console.log('ITS B');});
	pad.on('7', function(){console.log('ITS 7');});
	pad.on('8', function(){console.log('ITS 8');});
	pad.on('9', function(){console.log('ITS 9');});
	pad.on('C', function(){console.log('ITS C');});
	pad.on('*', function(){console.log('ITS *');});
	pad.on('0', function(){console.log('ITS 0');});
	pad.on('#', function(){console.log('ITS #');});
	pad.on('D', function(){console.log('ITS D');});
/*
	setTimeout(function(){
		pad.stop();
	}, 10000);
*/
})
