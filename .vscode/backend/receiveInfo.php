<?php 
    
    // Kết nối với cơ sở dữ liệu
    $connect = mysqli_connect('localhost', 'root', '', 'my_database');

    // Kiểm tra kết nối
    if ($connect === false) {
        die('Không thể kết nối với cơ sở dữ liệu:' .mysqli_connect_error());
    }

    // Thêm thông tin người dùng vào cơ sở dữ liệu
    $sql = "INSERT INTO users (name, email, text) VALUES ('$name', '$email','$text')";
 
    $result = mysqli_query($connect, $sql);

    // Kiểm tra kết quả
    if ($result === false) {
        die('Không thể thêm thông tin người dùng vào cơ sở dữ liệu: ' .mysqli_error($connect));
    }

    // Ngắt kết nối với cơ sở dữ liệu
    mysqli_close($conn);

    // Thông báo thành công
    echo 'Thêm thông tin người dùng thành công!';

    // Lấy thông tin người dùng từ biểu mẫu
    $name = $_POST['Name'];
    $email = $_POST['Emali'];
    $discription = $_POST['discription'];

      // In thông tin người dùng
      echo 'Name: '.ucfirst($name);
      echo '<br>';
      echo 'Email: '.$email;
      echo '<br>';
      echo 'discription: '.$discription;

?>