<?php include_once('includes/header.php'); ?>

	<div data-role="page" data-title="Customize courses">

		<div data-role="main" class="ui-content customize-courses">
			<div class="ui-body ui-body-a ui-corner-all ui-mini">
			    <p>Pick colors to customize courses</p>
			</div>
			
			<ul data-role="listview" data-inset="true" data-shadow="false">
				<li data-role="scp-trigger">
					<div class="color-box" style="background-color: red;"></div>
					<div class="course-name">Graphical Application Programming</div>
				</li>
				<li data-role="scp-trigger">
					<div class="color-box" style="background-color: red;"></div>
					<div class="course-name">ICT Mathematics</div>
				</li>
			</ul>

			<a href="search-courses.php?courses_added=true" class="ui-btn ui-btn-inline ui-corner-all ui-shadow">Complete editing</a>
		</div><!--.ui-content-->
		<div id="simple-color-picker"></div>
	</div><!--page-->

<?php include_once('includes/footer.php'); ?>