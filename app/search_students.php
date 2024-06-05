<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("conection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $studentName = $_POST["nombre"];

    $query = "SELECT id, nombre, edad, genero, email, facultad, mat1, mat2, mat3 FROM estudiantes WHERE nombre LIKE ?";
    $stmt = $conn->prepare($query);
    $searchTerm = "%" . $studentName . "%";
    $stmt->bind_param("s", $searchTerm);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode(array("success" => true, "data" => $data));
    } else {
        echo json_encode(array("success" => false, "error" => "No se encontraron registros"));
    }

    $stmt->close();
    $conn->close();
}
