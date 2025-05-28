class Elevator {
    constructor() {
        this.currentFloor = 1; 
        this.isMoving = false; 
    }

    moveToFloor(targetFloor) {
        
        if (this.isMoving) {
            this.updateScreen("Elevator is moving, please wait...");
            return;
        }

        
        if (targetFloor < 1 || targetFloor > 100) {
            this.updateScreen("Invalid floor! Choose between 1 - 100.");
            return;
        }

        
        this.isMoving = true;
        this.updateScreen(`Elevator is now going to floor: ${targetFloor}`);

        
        const travelTime = Math.abs(targetFloor - this.currentFloor) * 100;
        setTimeout(() => {
            this.currentFloor = targetFloor;
            this.isMoving = false;
            this.updateScreen(`Elevator is now in floor: ${this.currentFloor}`);
        }, travelTime);
    }

    updateScreen(message) {
        document.getElementById("elevator-screen").textContent = message;
    }
}


const elevator = new Elevator();


function goToFloor(floor) {
    elevator.moveToFloor(floor);
}


document.getElementById("go-button").addEventListener("click", () => {
    const floor = parseInt(document.getElementById("floor-input").value);
    goToFloor(floor);
});