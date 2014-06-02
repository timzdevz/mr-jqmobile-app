<?php include_once('includes/header.php'); ?>
	
	<?php 

	$i = 0; // used for assignments numbers
	foreach(array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday') as $day): ?>
	<div data-role="page" 
		data-title="Daily schedule - <?php echo $day; ?>" id="<?php echo strtolower($day) ?>">

		<div data-role="main" class="ui-content daily-schedule">

		<div class="lessons-list">
			<?php if (in_array($day, array('Tuesday', 'Thursday'))) : ?>
				<ul data-role="listview" data-inset="true" data-corners="false">
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
			<?php else: ?>
				<div class="ui-body ui-body-a ui-corner-all">No lessons on <?php echo $day; ?></div>
			<?php endif; ?>

			</div><!--.lessons-list-->

			<div class="events-list">
			<?php if (in_array($day, array('Monday', 'Friday'))) : $i++; ?>
				<ul data-role="listview" data-inset="true" data-corners="false">
					<li data-course-color="red">
						<a href="#">
							<div class="course-color"></div>
							<div class="list-item-name">Assignment #<?php echo $i; ?></div>
							<div class="lesson-description">10:00</div>
							<div class="lesson-description">Graphical Application programming</div>
						</a>
					</li>
					<li data-course-color="green">
						<a href="#">
							<div class="course-color"></div>
							<div class="list-item-name">Assignment #<?php echo $i+3; ?></div>
							<div class="lesson-description">22:00</div>
							<div class="lesson-description">Maths</div>
						</a>
					</li>

				</ul>
			<?php else: ?>
				<div class="ui-body ui-body-a ui-corner-all">No events on <?php echo $day; ?></div>
			<?php endif; ?>
			</div><!--.events-list-->
		</div>
	</div><!--page <?php echo $day ?>-->
<?php endforeach; ?>

<?php include_once('includes/footer.php'); ?>