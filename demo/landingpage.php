<?php ob_start(); ?>
<!doctype html>
<html>
	<head>
		
		<link rel="stylesheet" href="style.css"/>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script src="ajaxbrowser.js"></script>
	</head>
	<body>
		<nav>
			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="landingpage.php">Landing Page</a></li>
			</ul>
		</nav>
		<!-- start ajax -->
		<div id="container">
		<h1>Landing Page</h1>
		<p>And this is how we it looks after you clicked. </p>
		
		</div>
		<!-- end ajax -->
	</body>
</html>
<?php
  if(
    !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
    strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
  ) {
      $html = ob_get_clean();
      echo preg_replace("/^.+". preg_quote("<!-- start ajax -->") . "(.+)". preg_quote("<!-- end ajax -->") .".+$/is","$1", $html);
  }
?>