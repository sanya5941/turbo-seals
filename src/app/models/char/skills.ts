export class Skills {
    public power: number;
    public strength: number;
    public agility: number;
    public fireRate: number;
    public accuracy: number;

    constructor(power: number = 0, strength: number = 0, agility: number = 0, fireRate: number = 0, accuracy: number = 0) {
        this.power = power;
        this.strength = strength;
        this.agility = agility;
        this.fireRate = fireRate;
        this.accuracy = accuracy;
    }

    public add(skills: Skills): void {
        this.power += skills.power;
        this.strength += skills.strength;
        this.agility += skills.agility;
        this.fireRate += skills.fireRate;
        this.accuracy += skills.accuracy;
    }
}