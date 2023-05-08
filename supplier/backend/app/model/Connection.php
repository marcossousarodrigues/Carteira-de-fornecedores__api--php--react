<?php

namespace app\model;

class Connection
{

    public static function connect()
    {
        $connPdo = new \PDO(DBDRIVE.':host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);
        return $connPdo;
    }
}