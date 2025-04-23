<?php

class OldPrinter
{
    public function printOld(string $text)    // Pojmenování metody
    {
        echo "OLD: $text";                   // Vypíše text "OLD:"
    }
}

interface Printer
{
    public function print(string $text): void;
}


class PrinterAdapter implements Printer
{
    public function __construct(
        private OldPrinter $oldPrinter          // Vložení instance
    ) {
    }

    public function print(string $text): void   // Nová metoda print()
    {
        $this->oldPrinter->printOld($text);     // Přesměruje volání na starou metodu
    }
}

$adapter = new PrinterAdapter(new OldPrinter()); // Vytvoření adaptéru
$adapter->print("Hello World");                   // Zavolá print(), adaptér použije printOld()
