<?php 
    session_start();


    // Lưu thông tin người dùng vào session
    $_SESSION['Name'] = ucfirst($name);
    $_SESSION['Email'] = $email;
    $_SESSION['discription'] = $discription;

    // Tạo cookie mới
    setcookie('Name', $name, time() + 3600);
    setcookie('Email', $email, time() + 3600);
    setcookie('discription', $discription, time() + 3600);

  
?>
