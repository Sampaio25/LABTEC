<?php

    include('../connection/conn.php');

    if(isset($_POST['submit'])){

        $name = mysqli_real_escape_string($conn,$_POST['nome']);
        $email = mysqli_real_escape_string($conn,$_POST['email']);
        $pass = md5($_POST['senha']);
        $vpass = md5($_POST['verif-senha']);
        $user_type = $_POST['user_type'];

        $select = " SELECT * FROM form_sign_up WHERE EMAIL = '$email' && PASSWORD = '$pass' ";

        $result = mysqli_query($conn, $select);

        if(mysqli_num_rows($result) > 0){

            $error[] = 'Este Usuário já existe';

        }else{

            if($pass != $vpass){
                $error[] = 'Senha incorreta';
            }else{
                $insert = "INSERT INTO form_sign_up(NAME, EMAIL, PASSWORD, USER_TYPE) VALUES('$name','$email', '$pass', '$user_type')";
            }

        }
        

    };
?>