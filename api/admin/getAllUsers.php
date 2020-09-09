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
                isset($obj["page_no"]) && isset($obj["no_of_items_per_page"])
            ){   
                //set json data into local variables
                $pageNo=$obj["page_no"];
                $noOfItemsPerPage=$obj["no_of_items_per_page"];
            }
	        // Get data
			if(
                !empty($pageNo) && !empty($noOfItemsPerPage)
            ){
				$sql = "SELECT user_id,first_name,last_name,email,created,date_of_birth,phone,country,citizenship,investment_amount,status FROM user  ";
                $sql .=" LIMIT ".($pageNo-1).",".$noOfItemsPerPage;
                //echo $sql;
                $countSql = "SELECT COUNT(*) as total_count  FROM transaction ";


                if($countQur = mysqli_query($conn,$countSql))
                {
                    while($row = mysqli_fetch_assoc($countQur)){
                        $totalCount = $row["total_count"];
                    }

				if($qur = mysqli_query($conn,$sql))
				{
					$res=array();
					
                        if(mysqli_num_rows($qur)>0){
                            while($res[]=mysqli_fetch_assoc($qur))
                            {
                                $error["error_status"]=0;
						        $json = array("error" =>$error ,"user"=>$res,"total_count"=>$totalCount );
                            } 
                            
                        }else{
                            $error["error_status"]=1;
                            $error["error_msg"]="User not found";		
                            $json = array("error" =>$error ,"user"=>$res );
                        }
						
					
				}else{
					$error["error_msg"]=mysqli_error($conn);
					$json = array("error" =>$error);
                }
            }else{
                $error["error_msg"]=mysqli_error($conn);
                $json = array("error" =>$error);
            } 
			}else{
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