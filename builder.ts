class Pizza {
    constructor(
        public puree: string,        // omáčka na pizzu
        public salami: string,       // Druh salámu
        public cheese?: boolean,     // Rozhodování jestli přidat sýr
        public dough?: boolean       // Rozhodování jestli přidat těsto
    ) {
    }
}

class PizzaBuilder {
    private puree: string = "tomato";     // Výchozí omáčka: rajčatová
    private salami: string = "chorizo";   // Výchozí salám: chorizo
    private cheese: boolean = false;      // Výchozí: bez sýra
    private dough: boolean = false;       // Výchozí: bez těsta

    setPuree(puree: string): PizzaBuilder {   // Nastvení typu omáčky
        this.puree = puree;
        return this;                           // Vrací builder
    }

    setSalami(salami: string): PizzaBuilder { // Nastavení druhu salámu
        this.salami = salami;
        return this;
    }

    addCheese(): PizzaBuilder {               // Přidání sýra
        this.cheese = true;
        return this;
    }

    addDough(): PizzaBuilder {                // Přidání těsta
        this.dough = true;
        return this;
    }

    build(): Pizza {
        return new Pizza(this.puree, this.salami, this.cheese, this.dough);
    }
}


const pizza = new PizzaBuilder()
    .setPuree("tomato")      // Volání metod builderu
    .setSalami("chorizo")
    .addCheese()
    .addDough()
    .build();                // Zavolání build()
