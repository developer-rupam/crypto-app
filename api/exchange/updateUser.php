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
                isset($obj["email"]) && isset($obj["user_id"]) 
            ){   
                //set json data into local variables
                $firstname=$obj["firstname"];
                $lastname=$obj["lastname"];
                $email=$obj["email"];
                $userId=$obj["user_id"];
                $phone=$obj["phone"];
                $dateOfBirth=$obj["date_of_birth"];
                $country=$obj["country"];
                $citizenship=$obj["citizenship"];
                $investment_amount=$obj["investment_amount"];
            }
            // Get data
			if(
                !empty($firstname) &&  !empty($lastname) &&
                !empty($email) &&   !empty($userId)
            ){
				$sql = "UPDATE user SET";
				$sql .= " first_name='".mysqli_real_escape_string($conn,$firstname)."', last_name='".mysqli_real_escape_string($conn,$lastname)."',";
                $sql .=" email='".mysqli_real_escape_string($conn,$email)."',phone='".mysqli_real_escape_string($conn,$phone)."',";
                $sql .=" country='".mysqli_real_escape_string($conn,$country)."',citizenship='".mysqli_real_escape_string($conn,$citizenship)."',";
                $sql .=" date_of_birth='".mysqli_real_escape_string($conn,$dateOfBirth)."',investment_amount='".mysqli_real_escape_string($conn,$investment_amount)."' ";
                $sql .= "WHERE user_id = '".$userId."'";


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
					$error["error_msg"]="User data update failed";
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