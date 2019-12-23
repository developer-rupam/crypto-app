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
                isset($obj["email"])
            ){   
                //set json data into local variables
                $email=$obj["email"];
            }
	        // Get data
			if(
                !empty($email) 
            ){
				$sql = "SELECT user_id FROM user WHERE";
				$sql .=" email='".mysqli_real_escape_string($conn,$email)."'";
				if($qur = mysqli_query($conn,$sql))
				{
					$res=array();
					
                        if(mysqli_num_rows($qur)>0){
                            $error["error_status"]=0;
                            $error["error_msg"]="Email Already Exist";
						    $json = array("error" =>$error ,"user"=>$res );
                        }else{
                            $error["error_status"]=1;
                            $error["error_msg"]="Email Does not Exist";		
                            $json = array("error" =>$error ,"user"=>$res );
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