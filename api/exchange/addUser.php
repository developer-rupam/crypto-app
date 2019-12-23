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
                isset($obj["firstname"]) && isset($obj["lastname"]) &&
                isset($obj["email"]) && isset($obj["password"]) 
            ){   
                //set json data into local variables
                $firstname=$obj["firstname"];
                $lastname=$obj["lastname"];
                $email=$obj["email"];
                $password=$obj["password"];
            }
	        // Get data
			if(
                !empty($firstname) &&  !empty($lastname) &&
                !empty($email) &&   !empty($password)
            ){
				$sql = "INSERT INTO user SET";
				$sql .= " first_name='".mysqli_real_escape_string($conn,$firstname)."', last_name='".mysqli_real_escape_string($conn,$lastname)."',";
				$sql .=" email='".mysqli_real_escape_string($conn,$email)."',password='".mysqli_real_escape_string($conn,$password)."',created=now(),status=0,two_factor_auth_status=3 ";
				if($qur = mysqli_query($conn,$sql))
				{
					$last_id = $conn->insert_id;
					$res=array();
					if($qur)
					{
						$error["error_status"]=0;
						$res["user_id"]=$last_id;
						$json = array("error" =>$error ,"data"=>$res );
					}
					else{
					$error["error_msg"]="Deal Insertion Failed";
					$json = array("error" =>$error,"data"=>$res );
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