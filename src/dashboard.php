<?php include_once('includes/header.php'); ?>

	<div data-role="page" data-title="Dashboard">

		<div data-role="main" class="ui-content dashboard">

		<div class="ui-grid-a">
			<div class="ui-block-a">
				<a href="search-courses.php" class="ui-shadow ui-btn ui-mini ui-corner-all ui-icon-plus ui-btn-icon-left">Add course</a>
			</div>
		    <div class="ui-block-b">
		    	<a class="ui-shadow ui-btn ui-mini ui-corner-all ui-icon-calendar ui-btn-icon-left">Add event</a>
		    </div>
			
		</div>

		<div class="lessons ui-body ui-body-a ui-corner-all">
			<h3>Upcoming lessons</h3>
			<ul data-role="listview" data-inset="true" data-corners="false">
				<li data-role="list-divider">Tuesday, 01.04.2014</li>
				<li data-course-color="red">
					<a href="#">
						<div class="course-color"></div>
						<div class="list-item-name">Math</div>
						<div class="lesson-description">Sta 10 - E210</div>
						<div class="lesson-description">08:00-11:00</div>
					</a>
				</li>
				<li data-course-color="green">
					<a href="#">
						<div class="course-color"></div>
						<div class="list-item-name">Graphical Application Programming</div>
						<div class="lesson-description">Sta 10 - E210</div>
						<div class="lesson-description">08:00-11:00</div>
					</a>
				</li>
			</ul>
		</div>

		<div class="events ui-body ui-body-a ui-corner-all">
			<h3>Upcoming events</h3>
			<p>
				1 upcoming event(s) today.<br />
				5 total upcoming events.
			</p>
		</div>

	</div>
</div>

<?php include_once('includes/footer.php'); ?>