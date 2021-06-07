<?php
error_reporting(E_ALL & ~E_STRICT);
ini_set("display_errors", 1);
set_error_handler("HandleError", E_ALL & ~E_STRICT); //handle error
$log = array("info" => "./logs/info.html","error" => "./logs/error.html","success" => "./logs/success.html");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Content-Type: application/xml; charset=utf-8");
header('Content-Type: application/json');

$DEBUG=true;
define("DEFAULT_DATETIME_EMPTY", "0000-00-00 00:00:00");
define("DEFAULT_DATETIME_NOW", gmdate("Y-m-d H:i:s"));//Greenwich Time
define("DEFAULT_DATE_EMPTY", "0000-00-00");
define("DEFAULT_DATE_NOW", gmdate("Y-m-d"));//Greenwich Time
define("NONE", "");
$DATA_FOLDER="../sounds/main/";
$TIMENOW=gmdate("YmdHis");//Greenwich Time

$METHOD=$_REQUEST;
//var_dump($GLOBALS);


$NAME = "data";
$PAYLOAD = $METHOD["payload"];

file_put_contents($DATA_FOLDER.$NAME.".json", $PAYLOAD);

print_success($NAME);

//gestisce gli errori
function HandleError($errno, $errstr, $errfile, $errline, $errcontext){
    print_error("<b>Error:</b> [$errno] $errstr sulla linea $errline",$errline);
}

//stampa errore
function print_error($msg,$line=""){
 //   header('Content-Type: application/json');
    global $log;    
    global $DEBUG;
    global $current_server;
    error_log(date('j/n/Y G:i:s')." from ".$_SERVER['REMOTE_ADDR']."(".__FILE__."): ".$msg."<br/>", 3, $log["error"]);
    
    $output=array();
    $output["message"]=$msg;
    $output["status"]="error";
    $output["datetime"]=DEFAULT_DATETIME_NOW;
    
    if($DEBUG) {
        $output["line"]=$line;
        $output["server"]=$current_server;
    }

    echo json_encode($output); 

    exit();
}

//stampa errore
function print_warning($line,$code,$msg=null){
   // header('Content-Type: application/json');
    global $log;    
    global $DEBUG;
    global $current_server;
    
    $output=array();
    
    $output["status"]="warning";
    $output["code"]=$code;
    $output["datetime"]=DEFAULT_DATETIME_NOW;
    if($DEBUG) {
        $output["line"]=$line;
        $output["server"]=$current_server;
    }
    if($msg !== null) {
        $output["message"]=$msg;
    }
    echo json_encode($output);    
    exit();
}


//ritorna successo
function print_success($msg,$line=""){
    //header('Content-Type: application/json');
    global $DEBUG;
    global $current_server;
    global $gamification;
    $output=array();
    $output["message"]=$msg;
    $output["status"]="success";
    $output["datetime"]=DEFAULT_DATETIME_NOW;
    if($DEBUG) {
        $output["line"]=$line;
        $output["server"]=$current_server;
    }
    echo json_encode($output);
    exit();
}

function print_success_modified($msg,$line=""){
    //header('Content-Type: application/json');
    global $DEBUG;
    global $current_server;
    $output=array();
    $output=$msg;
    $output["status"]="success";
    $output["datetime"]=DEFAULT_DATETIME_NOW;
    if($DEBUG) {
        $output["line"]=$line;
        $output["server"]=$current_server;
    }
    echo json_encode($output);
}

function print_success_fast($msg,$line=""){
  //  header('Content-Type: application/json');
    global $DEBUG;
    global $current_server;
    $output=array();
    $output["msg"]=$msg;
    $output["status"]="success";
    $output["datetime"]=DEFAULT_DATETIME_NOW;
    if($DEBUG) {
        $output["line"]=$line;
        $output["server"]=$current_server;
    }
    echo json_encode($output);
    exit();
}

function log_success($msg){

    global $log;
    error_log(date('j/n/Y G:i:s')." from ".$_SERVER['REMOTE_ADDR']."(".__FILE__."): ".$msg."<br/>", 3, $log["success"]);

}

function log_info($msg){
    global $log;

    error_log(date('j/n/Y G:i:s')." from ".$_SERVER['REMOTE_ADDR']."(".__FILE__."): ".$msg."<br/>", 3, $log["info"]);
}

?>