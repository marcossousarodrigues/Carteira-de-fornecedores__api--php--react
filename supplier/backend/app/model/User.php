<?php

namespace app\model;
use app\model\Connection;

class User
{
    private static $table = "tb_user";

    public static function create($data)
    {   
        if(self::existEmail($data["email"]))
        {  
            return [
                "status" => "error",
                "message" => "Email já cadastrado"
            ];
        }

        $conn = Connection::connect();
        $sql = "INSERT INTO ". self::$table. " VALUES (default, :name, :email, :password) "; 


        $stmt = $conn->prepare($sql);

        $stmt->bindParam(":name", $data["name"]);
        $stmt->bindParam(":email", $data["email"]);
        $stmt->bindParam(":password", $data["password"]);

        try
        {
            $stmt->execute();

            $findDataByEmail = self::findIdByEmail($data["email"]);

            return array(
                "status" => "success",
                "data" => $findDataByEmail,
                "message" => "Cadastro realizado com sucesso"
            );
        }
        catch(\Exception $error)
        {
            return array(
                "status" => "error",
                "data" => [],
                "message" => "Ocorreram erros durante o processo"
            );
        }
       

    }

    public static function update()
    {
        
    }

    public static function loginUser($user)
    {
        $findUserByEmail = self::findIdByEmail($user["email"]);

            if( isset($findUserByEmail['password']) && $findUserByEmail['password'] === $user['password'])
            {
                
                return array(
                    "status" => "success",
                    "data" => $findUserByEmail,
                    "message" => "Login realizado com sucesso"
                );
            }
            else
            {
                return array(
                    "status" => "error",
                    "data" => [],
                    "message" => "Usuário ou senha invalido"
                );
            }
    }


    public static function findIdByEmail($email)
    {
        $conn = Connection::connect();
        $sql = "SELECT * FROM " .self::$table. " WHERE email = :email";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":email", $email);
        $stmt->execute();

        if($stmt->rowCount() > 0)
        {
            return $stmt->fetch(\PDO::FETCH_ASSOC);
        }
        else
        {
            return ["message" => "Usuário invalido"];
        }

    }

    public static function existEmail($email)
    {
        $conn = Connection::connect();
        $sql = "SELECT * FROM " .self::$table. " WHERE email = :email";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":email", $email);
        $stmt->execute();

        if($stmt->rowCount() > 0)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

}