class Pizza {
    constructor(
        public puree: string,
        public salami: string,
        public cheese?: boolean,
        public dough?: boolean
    ) {
    }
}

class PizzaBuilder {
    private puree: string = "tomato";
    private salami: string = "chorizo";
    private cheese: boolean = "false";
    private dough: boolean = "false";

    setPuree(puree: string): PizzaBuilder {
        this.puree = puree;
        return this;
    }

    setSalami(salami: string): PizzaBuilder {
        this.salami = salami;
        return this;
    }

    addCheese(): PizzaBuilder {
        this.cheese = true;
        return this;
    }

    addDough(): PizzaBuilder {
        this.dough = true;
        return this;
    }

    build(): Pizza {
        return new Pizza(this.puree, this.salami, this.cheese, this.dough);
    }
}

const pizza = new PizzaBuilder()
    .setPuree("tomato")
    .setSalami("chorizo")
    .addCheese()
    .addDough()
    .build();
