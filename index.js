'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')

$('#box1').text('X')
$('#box2').text('O')
$('#box3').text('X')
$('#box4').text('O')
$('#box5').text('X')
$('#box6').text('O')
$('#box7').text('X')
$('#box8').text('O')
$('#box9').text('X')
