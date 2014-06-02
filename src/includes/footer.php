<?php if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) ||
	strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') { ?>
	
	<div data-role="footer" id="footer-navbar" data-position="fixed" class="ui-page-theme-a" data-tap-toggle="false">
	    <div data-role="navbar" data-iconpos="left">
	        <ul>
	            <li><a href="#" data-icon="calendar" class="ui-btn-lessons">Lessons</a></li>
	            <li><a href="#" data-icon="star" class="ui-btn-events">Events</a></li>
	        </ul>
	    </div><!-- /navbar -->
	</div><!-- /footer -->

</body>
</html>
<?php } ?>