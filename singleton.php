<?php

class Database
{
    public $username;                // Uživatelské jméno pro připojení
    public $password;                // Heslo pro připojení

    private static $instance;        // Drží jedinou instanci třídy Database

    private function _constructor($username, $password) { // Konstruktor
        $this->username = $username; // Nastaví username
        $this->password = $password; // Nastaví password
    }

    public static function getInstance() {                // Vrací instanci
        if (!static::$instance) {                         // Pokud instance neexistuje
            static::$instance = new Database("root", ""); // Vytvoří novou instanci s default údaji
        }
        return static::$instance;                         // Vrací instanci
    }
}

$db = Database::getInstance();    // Získání instance
echo $db->username;               // Vypíše výchozí uživatelské jméno ("root")
$db->username = "root";           // Změníme username (ukázka, že instance je stejná)
echo "\n";
$db = Database::getInstance();    // Znovu získáme stejnou instanci
echo $db->username;               // Vypíše opět "root"
