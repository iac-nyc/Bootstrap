# Bootstrap
Responsive design using Bootstrap

->Setting up the Bootstrap 
To download Bootstrap:
 
Go to the Bootstrap website http://getbootstrap.com and click on the download button to download the zip file containing Bootstrap files.
 
Set up <head>:
 
<meta charset="utf-8">
 
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    
<meta name="viewport" content="width=device-width, initial-scale=1">
 
 <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
 
Add the following code in the head after the title. This will include Bootstrap CSS into web page.
 
 <!-- Bootstrap -->
   
 <link href="css/bootstrap.min.css" rel="stylesheet">
  
  <link href="css/bootstrap-theme.min.css" rel="stylesheet">
  
  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
   
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
   
   <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
 
 The default Bootstrap typography sets the font to Helvetica Neue and selects the appropriate font size based on the choice of the heading style and paragraph style for the content.
At the bottom of the page, just before the end of the body tag, add the following code to include the JQuery library and Bootstrap's Javascript plugins. Bootstrap by default uses the JQuery Javascript library for its Javascript plugins. Hence the need to include JQuery library in the web page.
 
 
   <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

