<?php

class Database
{
    public $username;
    public $password;

    private static $instance;

    private function _constructor($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    public static function getInstance()
    {
        if (!static::$instance) {
            static::$instance = new Database("root", "");
        }
        return static::$instance;
    }
}

$db = Database::getInstance();
echo $db->username;
$db->username = "root";
echo "\n";
$db = Database::getInstance();
echo $db->username;