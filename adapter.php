<?php

class OldPrinter
{
    public function printOld(string $text)
    {
        echo "OLD: $text";
    }
}


interface Printer
{
    public function print(string $text): void;
}

// Adaptér
class PrinterAdapter implements Printer
{
    public function __construct(private OldPrinter $oldPrinter)
    {
    }

    public function print(string $text): void
    {
        $this->oldPrinter->printOld($text);
    }
}


$adapter = new PrinterAdapter(new OldPrinter());
$adapter->print("Hello World");