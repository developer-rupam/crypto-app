


<?php
// Include database connection.php
include_once('../includes/connection.php');
header('Content-type: application/json');



$url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
$parameters = [
  'start' => '1',
  'limit' => '5000',
  'convert' => 'USD'
];

$headers = [
  'Accepts: application/json',
  'X-CMC_PRO_API_KEY: c0e4fd74-5e5d-4fc1-8c2a-a7d73bd07f16'
];
$qs = http_build_query($parameters); // query string encode the parameters
$request = "{$url}?{$qs}"; // create the request URL


$curl = curl_init(); // Get cURL resource
// Set cURL options
curl_setopt_array($curl, array(
  CURLOPT_URL => $request,            // set the request URL
  CURLOPT_HTTPHEADER => $headers,     // set the headers 
  CURLOPT_RETURNTRANSFER => 1         // ask for raw response instead of bool
));

$response = curl_exec($curl); // Send the request, save the response
//print_r(json_decode($response)); // print json decoded response
curl_close($curl); // Close request

$res = json_decode($response,true);
$error=array("error_status"=>1,"error_msg"=>"");
$error["error_status"] = $res["status"]["error_code"];
$error["error_msg"] = $res["status"]["error_message"];
$json = array("error" =>$error ,"data"=>$res["data"] );

header('Content-type: application/json');
echo json_encode($json);

?>
