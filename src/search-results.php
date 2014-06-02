<?php include_once('includes/header.php'); ?>

	<div data-role="page" data-title="Search results">

		<div data-role="main" class="ui-content search-results">

			<form action="customize-courses.php" method="post">

				<ul data-role="listview">
					<li>
						<label>
							<input type="checkbox" /> 
							<div class="course-name">Graphical Application Programming</div>
							<div class="course-details"><span>Course ID:</span> GAP012014</div>
							<div class="course-details"><span>Course period:</span> 10.09.2014 - 20.12.2014</div>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" /> 
							<div class="course-name">ICT Mathematics</div>
							<div class="course-details"><span>Course ID:</span> MATH012014</div>
							<div class="course-details"><span>Course period:</span>10.09.2013 - 20.12.2015</div>
						</label>
					</li>
				</ul>
				<input type="submit" value="Add courses" data-inline="true" />
			</form>

			<div data-role="popup" id="searchActionMenu">
			    <ul data-role="listview" data-inset="true" style="min-width:210px;">
			        <li data-role="list-divider">Choose an action</li>
			        <li><a href="#">View course details</a></li>
			    </ul>
			</div>


		</div><!--.ui-content-->

	</div><!--page-->

<?php include_once('includes/footer.php'); ?>