<?php
if ($_FILES["image"]["error"] === UPLOAD_ERR_OK) {
    $temp_name = $_FILES["image"]["tmp_name"];
    $file_name = $_FILES["image"]["name"];
    $destination = "uploads/" . $file_name;

    if (move_uploaded_file($temp_name, $destination)) {
        echo json_encode(array("success" => true, "filename" => $file_name));
    } else {
        echo json_encode(array("success" => false, "message" => "Error moving uploaded file."));
    }
} else {
    echo json_encode(array("success" => false, "message" => "Error uploading file."));
}
?>
