<html>
	<head>
		<title>Form</title>
		<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>
		<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-auth.js"></script>
		<script src="form.js"></script>
		<script src='https://www.google.com/recaptcha/api.js'></script>
	</head>
	<body>
		<h1> Form</h1>
		<div id="formContainer">
			<div id="header"></div>
			<input type="email" placeholder = "email" id="email"/>
			<input type="password" placeholder="password" id="password"/>
			
			<button onclick="signUp()" id="signUp">Sign Up </button>
			<button onclick="signIn()" id="signIn">Sign In </button>
			<button onclick="signOut()" id="signUp">Sign Out</button>
		</div>
		<div class="g-recaptcha" data-sitekey="6LeC294UAAAAAKW2HDIIbHQyMcCGCY67cGvrWeM1 ></div>
	</body>
</html>
