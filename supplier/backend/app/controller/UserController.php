<?php

namespace app\controller;
use app\model\User;
use app\functions\CreateUserToken;

class UserController
{

    public function post($action = '')
    {

        if($action === "register")
        {
          return $this->register();
        }
        else if($action === "login")
        {
            return $this->login();
        }
        
    }

    public function update()
    {

    }

    public function login()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $response = User::loginUser($data);

        return $this->authUser($response);

    }

    public function register()
    {
            
        $data = json_decode(file_get_contents('php://input'), true);
        $response = User::create($data);

        return $this->authUser($response);
    }

    public function authUser($response)
    {
        $password = '';

        if($response["status"] === "success")
        {
            foreach ($response['data'] as $key => $value) {
                if( $key === "id")
                {
                    $id = $value;
                }
                if($key === "name")
                {
                    $user = $value;
                }
               
                if($key === "password")
                {
                    $password = $value;
                }
            }

            $userTokern  = CreateUserToken::createUserToken($user, $id, $password);

            return [
                "user" => [$id, $user],
                "token" => $userTokern,
                "message" => $response["message"],
                "status" => $response["status"]
            ];
        }
        else
        {
            return [
                "user" => [],
                "message" => $response["message"],
                "status" => $response["status"]
            ];
        }

    }

}