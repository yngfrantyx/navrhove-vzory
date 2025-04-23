class car {
    freeze() {
        console.log("Car build");
    }

    execute() {
        console.log("Car execute");
    }
}

class Lights {
    load(position: number, data: string) {
        console.log(`Memory load ${data} at ${position}`);
    }
}

class carStarter {
    read(start: number, size: number): string {
        return `Data from ${start} to ${start + size}`;
    }
}


class carFacade {
    private car = new car();
    private memory = new Lights();
    private hardDrive = new carStarter();

    start() {
        this.car.freeze();
        const data = this.hardDrive.read(0, 100);
        this.memory.load(0, data);
        this.car.execute();
    }
}


const myCar = new carFacade();
myCar.start();

