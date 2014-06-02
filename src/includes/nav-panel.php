		<nav  data-role="panel" id="navPanel" data-display="overlay" data-position-fixed="true">
			<ul>
				<li>
					<a href="/dashboard.php">Dashboard</a>
				</li>
				<li>
					<?php /* for multi-page template we can't use ajax page load
							 since it loads only first page */ ?>
					<a href="/daily-schedule.php" data-ajax="false">Daily Schedule</a>
				</li>
				<li>
					<a class="ui-disabled"  href="#">Weekly Schedule</a>
				</li>
				<li>
					<a href="/monthly-schedule.php">Monthly Schedule</a>
				</li>
				<li>
					<a class="ui-disabled" href="#">My Courses</a>
				</li>
				<li>
					<a href="/search-courses.php">Search for courses</a>
				</li>
			</ul>
		</nav>