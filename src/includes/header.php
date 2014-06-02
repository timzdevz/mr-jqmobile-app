<?php if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) ||
	strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') { ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1">
	<title>Mobile Ressu</title>
	
	<link rel="stylesheet" href="/assets/css/jquery.mobile-1.4.2.min.css">
	<link rel="stylesheet" href="/assets/css/jquery.mobile.datepicker.css" />
	<link rel="stylesheet" href="/assets/css/jquery.mobile.simplecolorpicker.css" />
	<link rel="stylesheet" href="/assets/css/styles.css">

	<script src="/assets/js/jquery-1.10.2.min.js"></script>
	<script src="/assets/js/jquery.mobile-1.4.2.js"></script>

	<script src="/assets/js/jquery.ui.datepicker.js"></script>
	<script src="/assets/js/jquery.mobile.datepicker.js"></script>
	<script src="/assets/js/jquery.mobile.simplecolorpicker.js"></script>

	<script src="/assets/js/mobile-ressu.js"></script>
	<script src="/assets/js/mobile-ressu.monthly-schedule.js"></script>

	<?php /* <script src="http://192.168.43.1:35729/livereload.js" async defer></script> */ ?>

</head>
<body>
	<div data-role="header" data-id="header" data-position="fixed">
		<a class="ui-icon-bars ui-btn-icon-notext ui-btn-inline ui-btn" href="#navPanel"></a>
		<a class="ui-icon-gear ui-btn-icon-notext ui-btn-inline ui-btn ui-btn-icon-right" href="#navPanel"></a>
		<h1></h1>

		<div class="ui-page-theme-a">
			<div id="header-navbar" data-role="navbar">
		        <ul>
		           <li><a class="ui-btn-active" href="#monday">MON</a></li>
		           <li><a href="#tuesday">TUE</a></li>
		           <li><a href="#wednesday">WED</a></li>
		           <li><a href="#thursday">THU</a></li>
		           <li><a href="#friday">FRI</a></li>
		       </ul>
		   </div>
		</div>

	</div>

	<?php include_once('includes/nav-panel.php'); ?>
	<?php } ?>