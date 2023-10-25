<?php 
$price = 250;
$result = $price*10;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Day 10 - Form Submission</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">	
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<?php
	echo "Welcome to my website" . "<br>";
	echo "<br> The current year is " . 2023 . "<br>";
	echo $result;
	?>

	<!-- Underscore "_" can be the first character of a variable (or the last) -->


	<div class="container">
		<?php echo "<h2>I am a title</h2>"; ?>

		<div class="row">
			<div class="col-12">
				<form>
					<h2 class="text-center mb-5">
					<?php echo "Sign up Form"; ?>

							
						</h2>
					
					<!-- Gender -->
					<div class="d-flex my-2">
						<label class="form-label me-2" for="male">Gender:</label>
						<div>
							<input type="radio" name="gender" id="male" value="male" class="radio-male">
							<label for="male" style="width: 127px;">Male</label>
						</div>
						<div>
							<input type="radio" name="gender" id="female" value="female" class="radio-female">
							<label for="female" style="width: 127px;">Female</label>
						</div>
						<div>
							<span></span>
						</div>
						
					</div>

					<!-- Last Name -->
					<div class="d-flex my-2">
						<label class="form-label me-2" for="lname">Last Name:</label><input type="text" name="lname" id="lname" class="form-control"><span></span>
					</div>

					<!-- First Name -->
					<div class="d-flex my-2">
						<label class="form-label me-2" for="fname">First Name:</label><input type="text" name="fname" id="fname" class="form-control"><span></span>
					</div>

					<!-- Age -->
					<div class="d-flex my-2">
						<label class="form-label me-2" for="age">Age:</label><input type="number" name="age" id="age" class="form-control"><span></span>
					</div>

					<!-- Username -->
					<div class="d-flex my-2">
						<label class="form-label me-2" for="username">Username:</label><input type="text" name="username" id="username" class="form-control"><span></span>
					</div>

					<!-- Password -->
					<div class="d-flex my-2">
						<label class="form-label me-2" for="password">Password:</label><input type="password" name="password" id="password" class="form-control"><span></span>
					</div>


					<!-- Confirm password -->
					<div class="d-flex my-2">
						<label class="form-label me-2" for="passwordCnf">Password (confirmation):</label><input type="password" name="passwordCnf" id="passwordCnf" class="form-control"><span></span>
					</div>

					<!-- Country -->
					<div class="d-flex my-2">
						<label class="form-label me-2" for="country">Country:</label>
						<div>
							<select name="country" id="country" class="form-select">
								<option value="">Select a country</option>
								<option value="Canada">Canada</option>
								<option value="United States">United States</option>
								<option value="Mexico">Mexico</option>
								<option value="Peru">Peru</option>
								<option value="Iran">Iran</option>
								<option value="France">France</option>
								<option value="Germany">Germany</option>
								<option value="Japan">Japan</option>
							</select>
						</div>
						<span></span>
					</div>

					<!-- Newsletter -->
					<div class="my-4 text-center">
						<input type="checkbox" name="newsletter" id="newsletter" class="form-check-input">
						<label class="form-check-label" for="newsletter">Subscribe to our newsletter</label>
					</div>


					<!-- Submit and Reset buttons -->
					<div class="my-4 text-center">
						<input type="submit" value="Submit" class="btn btn-primary">
						<input type="reset" value="Reset" class="btn btn-success" id="reset">
					</div>
				</form>
			</div>
		</div>

	</div>



	<script src="js/bootstrap.bundle.js"></script>
	<script src="js/jquery.js"></script>
	<script src="js/custom.js"></script>
</body>
</html>