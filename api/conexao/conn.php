<?php

    $conn = mysqli_connect('localhost:3308', 'root', 'ubsw', 'labtec');


    $hostname = 'localhost:3308'; //Onde está o nosso banco de dados
    $dbname = 'labtec'; //Qual banco de dados que iremos trabalhar
    $username = 'root'; //Usuário de acesso ao banco de dados
    $password = 'usbw'; //Senha de acesso ao banco de dados

    try {
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo 'Conexão com o banco '.$dbname.', foi realizada com sucesso';
    } catch (PDOException $e) {
        echo 'Erro: '.$e->getMessage();
    } */