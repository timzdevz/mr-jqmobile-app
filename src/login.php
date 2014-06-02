<?php include_once('includes/header.php'); ?>

	<div data-role="page" data-title="Login">

		<div data-role="main" class="ui-content">

			<div class="login-page">
				<img class="logo" src="/assets/images/lamk-logo.png" />
				<form method="post" action="dashboard.php">
					<label for="account" class="ui-hidden-accessible">Student Account:</label>
					<input type="text" placeholder="Student Account" name="student_account" id="student_account" />

					<label for="student_password" class="ui-hidden-accessible">Student Password:</label>
					<input type="password" placeholder="Password" name="student_password" id="student_password"/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
		
	</div>

<?php include_once('includes/footer.php'); ?>