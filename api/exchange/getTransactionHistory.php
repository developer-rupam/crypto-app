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
                isset($obj["user_id"]) && isset($obj["page_no"]) && isset($obj["no_of_items_per_page"])
            ){   
                //set json data into local variables
                $userId=$obj["user_id"];
                $pageNo=$obj["page_no"];
                $noOfItemsPerPage=$obj["no_of_items_per_page"];
            }
	        // Get data
			if(
                !empty($userId) && !empty($pageNo) && !empty($noOfItemsPerPage)
            ){
				$sql = "SELECT txn_id,txn_no,in_amount,out_amount,created,in_currency,out_currency,txn_type,description,status FROM transaction WHERE";
                $sql .=" user_id='".mysqli_real_escape_string($conn,$userId)."' LIMIT ".($pageNo-1).",".$noOfItemsPerPage;

                $countSql = "SELECT COUNT(*) as total_count  FROM transaction WHERE user_id='".mysqli_real_escape_string($conn,$userId)."'";
                //echo $countSql;
                if($countQur = mysqli_query($conn,$countSql))
                {
                    echo mysqli_num_rows($countQur);
                    $totalCount = mysqli_num_rows($countQur);
                    if($qur = mysqli_query($conn,$sql))
                    {
                        $res=array();
                            if(mysqli_num_rows($qur)>0){
                                while($res[]=mysqli_fetch_assoc($qur))
                                {
                                    //print_r($res2);
                                    $error["error_status"]=0;
                                    $json = array("error" =>$error ,"transaction"=>$res,"total_count"=>$totalCount );
                                } 
                            }else{
                                $error["error_status"]=1;
                                $error["error_msg"]="No Data Exist";		
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