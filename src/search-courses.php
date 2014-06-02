<?php include_once('includes/header.php'); ?>

	<div data-role="page" data-title="Search courses">


	<div data-role="main" class="ui-content search-page">

		<form method="post" action="search-results.php">

			<div class="ui-body ui-body-a ui-corner-all">
				<label for="search_type">Search by:</label>
				<select name="type" id="search_type" data-native-menu="false">
					<option value="course_name">Course name</option>
					<option value="course_id">Course ID</option>
					<option value="teacher_name">Teacher name</option>
				</select>
				<label for="search_keyword">Search keyword:</label>
				<input name="search_keyword" id="search_keyword" />
			</div>
				
			<div class="ui-body ui-body-a ui-corner-all course-date">
				<h3>Search by course period</h3>
				
				<div class="ui-grid-a">
					<div class="ui-block-a">
						<label for="start_date">
							<span class="ui-btn ui-btn-icon-right ui-icon-calendar  ui-btn-inline ui-corner-all ui-mini">Start date:</span>
						</label>
					</div>
					<div class="ui-block-b">
						<input id="start_date" name="start_date" type="text"
						data-role="date" data-inline="false" readonly="readonly" />
					</div>
					<div class="ui-block-a">
						<label for="end_date">
							<span class="ui-btn ui-btn-icon-right ui-icon-calendar ui-btn-inline ui-corner-all ui-mini">End date:</span>
						</label>
					</div>
					<div class="ui-block-b">
						<input id="end_date" name="end_date" type="text"
						data-role="date" data-inline="false" readonly="readonly" />
					</div>
				</div>

			</div>
			<input type="submit" data-inline="true"  value="Search" class="submit" />

		</form>

	</div><!--.ui-content-->
	</div>

<?php include_once('includes/footer.php'); ?>