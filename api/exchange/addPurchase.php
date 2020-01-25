<?php
// Include database connection.php
include_once('../includes/connection.php');
header('Content-type: application/json');

$error=array("error_status"=>1,"error_msg"=>"");

if($_SERVER['REQUEST_METHOD'] == "POST" ){
			//decode json data
			$obj=json_decode(file_get_contents('php://input'), true);
            //var_dump($obj);
			if(
                isset($obj["in_amount"]) && isset($obj["out_amount"]) && isset($obj["user_id"]) &&
                isset($obj["in_currency"]) && isset($obj["out_currency"]) 
            ){   
                //set json data into local variables
                $inAmount=$obj["in_amount"];
                $outAmount=$obj["out_amount"];
                $userId=$obj["user_id"];
                $inCurrency=$obj["in_currency"];
                $outCurrency=$obj["out_currency"];
                $txnNo = "PUR".time();
                $status = 8; //Approved
            }
	        // Get data
			if(
                !empty($inAmount) &&  !empty($outAmount) && !empty($userId) &&
                !empty($inCurrency) &&   !empty($outCurrency)
            ){
				$sql = "INSERT INTO purchase SET";
				$sql .= " in_amount='".mysqli_real_escape_string($conn,$inAmount)."', out_amount='".mysqli_real_escape_string($conn,$outAmount)."',";
                $sql .= " user_id='".mysqli_real_escape_string($conn,$userId)."',out_currency='".mysqli_real_escape_string($conn,$outCurrency)."',";
                $sql .= " in_currency='".mysqli_real_escape_string($conn,$inCurrency)."',";
                $sql .= " created=now(),status='".$status."' ";

				if($qur = mysqli_query($conn,$sql))
				{
					$last_id = $conn->insert_id;
					$res=array();
					
                    /* $error["error_status"]=0;
                    $res["user_id"]=$last_id;
                    $json = array("error" =>$error ,"data"=>$res ); */
                    $sqlTxn = "INSERT INTO transaction SET";
                    $sqlTxn .= " in_amount='".mysqli_real_escape_string($conn,$inAmount)."', out_amount='".mysqli_real_escape_string($conn,$outAmount)."',";
                    $sqlTxn .= " user_id='".mysqli_real_escape_string($conn,$userId)."',out_currency='".mysqli_real_escape_string($conn,$outCurrency)."',";
                    $sqlTxn .= " in_currency='".mysqli_real_escape_string($conn,$inCurrency)."',txn_no='".$txnNo."',";
                    $sqlTxn .= " txn_type_id='".$last_id."',txn_type='5',";
                    $sqlTxn .= " created=now(),status='".$status."' ";

                    if($qurTxn = mysqli_query($conn,$sqlTxn)){
                        $error["error_status"]=0;
                        $res["user_id"]=$last_id;
                        $json = array("error" =>$error ,"data"=>$res );
                    }else{
                        $error["error_msg"]=mysqli_error($conn);
					    $json = array("error" =>$error);
                    }
					
				}else{
					$error["error_msg"]=mysqli_error($conn);
					$json = array("error" =>$error);
				}
			}
			else{
				$error["error_msg"]="all fields must be filled with values";
			$json = array("error" =>$error);
			}
}else{
	$error["error_msg"]="Request method not accepted";
	$json = array("error" =>$error);
}
   mysqli_close($conn);
/* Output header */
	header('Content-type: application/json');
	echo json_encode($json);
?>