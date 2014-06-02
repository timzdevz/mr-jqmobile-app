<?php include_once('includes/header.php'); ?>

	<div data-role="page" data-title="Monthly Schedule">

		<div data-role="main" class="ui-content monthly-schedule">
			<input type="text" id="monthly-datepicker" data-inline="true">
	

			<div class="collapsibles-list">
				<div data-role="collapsible" class="lessons-list" data-corners="false">
				    <h4>Lessons</h4>
				    <ul data-role="listview" id="date-lessons-list">
				    </ul>
				</div> <!-- collapsible -->	
				
				<div data-role="collapsible" data-corners="false" class="events-list">
				    <h4>Events</h4>
				    <ul data-role="listview" id="date-events-list">
				    </ul>
				</div> <!-- collapsible -->
					</div>
			</div>



	</div><!--page-->

<?php include_once('includes/footer.php'); ?>