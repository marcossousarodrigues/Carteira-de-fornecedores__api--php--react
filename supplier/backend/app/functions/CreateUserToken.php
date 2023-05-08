<?php

namespace app\functions;

class CreateUserToken
{
    public static function createUserToken($user, $id, $password)
    {
        $key = $password;

        $header = [
            'tpy' => 'jwt',
            'alg' => 'HS256'
        ];

        $payload = [
            'userid' => $id,
            'name' => $user
        ];

        $header = json_encode($header);
        $payload = json_encode($payload);

        $header = base64_encode($header);
        $payload = base64_encode($payload);

        $sign = hash_hmac('sha256', $header.".".$payload, $key, true);
        $sign = base64_encode($sign);

        $token = $header . '.' . $payload . "." . $sign;

        return $token;
    }
}