class car {
    freeze() { console.log("Car build"); }                // Příprava auta na start
    execute() { console.log("Car execute"); }             // Provedení akce auta po startu
}

class Lights {
    load(position: number, data: string) {
        console.log(`Memory load ${data} at ${position}`);
    }                                                      // Načtení dat
}

class carStarter {
    read(start: number, size: number): string {
        return `Data from ${start} to ${start + size}`;
    }                                                      // Čte data pro spuštění auta
}

class carFacade {
    private car = new car();                              // Instancuje třídu auta
    private memory = new Lights();                        // Instancuje světla
    private hardDrive = new carStarter();                 // Instancuje startér

    start() {
        this.car.freeze();                                // Zamrazí (připraví) auto
        const data = this.hardDrive.read(0, 100);         // Načte startovací data
        this.memory.load(0, data);                        // Načte data do světel
        this.car.execute();                               // Spustí auto
    }
}

const myCar = new carFacade();                         // Vytvoří fasádu pro řízení auta
myCar.start();                                         // Spustí celý proces startu
