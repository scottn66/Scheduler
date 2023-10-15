<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    global $connection;
    
    $dbhost = "testmysql.haydencrabbs.lmu.build";
    $dbuser = "";
    $dbpass = "";
    $dbname = "haydencr_testmysql";
    
    $connection = mysqli_connect( $dbhost, $dbuser, $dbpass, $dbname );
    
    $method = $_SERVER['REQUEST_METHOD'];
    
    // if( $connection ) {
    //     print "CONNECTED to the database...<br />";
    // } else {
    //     print "Connection to the database FAILED...<br />" . mysqli_connect_error();
    // }
    
    switch ($method) {
        case 'GET':
            $query = "SELECT * FROM `table-01`";
            break;
        case 'POST':
            $request_body = file_get_contents('php://input');
            $data = json_decode($request_body, true);

            $ID = $data['ID'];
            $Name = $data['Name']; 
            $Events = $data['Events'];
            
            $query = "REPLACE INTO `table-01` (`ID`, `Name`, `Events`) VALUES ('$ID', '$Name','$Events')";
            
            break;
    }
    
    $result = mysqli_query($connection,$query);
    
    // if( !$result ) {
    //     print  "DATABASE QUERY FAILED...<br />" . mysqli_error($connection);
    // } else {
    //     print  "QUERY SUCCEEDED!!<br />";
    // }
    
    // if ($result -> num_rows > 0) {
    //     while ($row = $result->fetch_assoc()){
    //         print "id: " . $row["ID"]. " - Name: " . $row["FirstName"]. " " . $row["LastName"]. "Events: " . $row["Events"] . "<br />";
    //     }
    // }
    
    if ($method == 'GET') {
        while ($row = $result->fetch_assoc()){
            $json[] = $row;
        }
        echo json_encode($json);
    } elseif ($method == 'POST') {
        echo json_encode($result);
    }

    $connection->close();
    
    