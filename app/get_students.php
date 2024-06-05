<?php
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP GET, POST, y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("conection.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    //verificar la conexion de la base de datos
    if ($conn->connect_error) {
        die("Error de conexion de la base de datos" . $conn->connect_error);
    }
    $query = "SELECT id,nombre,edad,genero,email,facultad,password,mat1,mat2,mat3 FROM estudiantes";

    $stmt = $conn->prepare($query);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = array(
                "id" => $row["id"],
                "nombre" => $row["nombre"],
                "edad" => $row["edad"],
                "genero" => $row["genero"],
                "email" => $row["email"],
                "facultad" => $row["facultad"],
                "password" => $row["password"],
                "mat1" => $row["mat1"],
                "mat2" => $row["mat2"],
                "mat3" => $row["mat3"]
            );
        }
        echo json_encode(array("success" => true, "data" => $data));
    } else {
        echo json_encode(array("success" => false, "error" => "No se encontraron los datos"));
    }

    $stmt->close();
} else {
    echo json_encode(array("success" => false, "error" => "Solicitud no valida"));
}

$conn->close();
