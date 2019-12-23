<?php 
/** Production Server **/
/* $servername = "docstopdb.czy3ehh6ckiv.us-east-2.rds.amazonaws.com";
$username = "docstop_dba";
$password = "dba12345";
$db_name = "docstop_db"; */

/** Development Server **/
  $servername = "localhost";
  $username = "root";
  $password = "";
  $db_name="crypto_database";
  
  header('Content-Type: text/html; charset=utf-8');
  $conn = mysqli_connect($servername, $username, $password)or die("Unable to connect to MySQL"); // Create connection
  $selected = mysqli_select_db($conn,$db_name) or die("Could not select vespac");	//select a database to work with
  mysqli_set_charset($conn,'utf8' );
  
?>