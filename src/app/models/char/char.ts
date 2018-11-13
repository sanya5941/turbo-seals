import { Inventory } from "./inventory/inventory";
import { Skills } from "./skills";

export class Char {
    private readonly EXPERIENCE_FIRST_LEVEL: number = 50;

    private name: string;
    private level: number;
    private money: number;
    private experience: number;
    private maxHealth: number;
    private health: number;
    private inventory: Inventory;
    private skills: Skills;
    private avatarPath: string;

    constructor(name: string, avatarPath: string) {
        this.name = name;
        this.level = 1;
        this.money = 10;
        this.experience = 0;
        this.maxHealth = 100;
        this.setMaxHealth();
        this.health = this.maxHealth;
        this.inventory = new Inventory();
        this.skills = new Skills(1, 1, 1, 1, 1);
        this.avatarPath = avatarPath;
    }

    public getName(): string {
        return this.name;
    }

    public getLevel(): number {
        return this.level;
    }

    public setLevel(level: number) {
        this.level = level;
    }

    private levelUp(): void {
        ++this.level;

        this.setMaxHealth();
    }

    public getMoney(): number {
        return this.money;
    }

    public addMoney(money: number): void {
        this.money += money;
    }

    public getExperience(): number {
        return this.experience;
    }

    public getExperienceNextLevel(): number {
        return this.level * this.level * this.EXPERIENCE_FIRST_LEVEL;
    }

    public addExperience(experience: number): void {
        this.experience += Math.round(experience);

        if (this.experience >= this.getExperienceNextLevel()) {
            this.levelUp();
        }
    }

    public getMaxHealth(): number {
        return this.maxHealth;
    }

    private setMaxHealth(): void {
        this.maxHealth = 100 + this.level - 1;
    }

    public getHealth(): number {
        return this.health;
    }

    public reduceHealth(value: number): boolean {
        if (this.health <= 0) {
            this.health = 0;
            return false;
        }

        this.health = Math.round(this.health - value);
        return true;
    }

    public setHealth(health: number) {
        this.health = Math.floor(this.health + health);

        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
    }

    public getInventory(): Inventory {
        return this.inventory;
    }

    public getSkills(): Skills {
        return this.skills;
    }

    public getTotalSkills(): Skills {
        let skills = new Skills();
        skills.add(this.getSkills());
        skills.add(this.getInventory().getSkills());

        return skills;
    }

    public getAvatarPath(): string {
        return this.avatarPath;
    }

    public kick(enemy: Char): number {
        // enemySkills = new Skills(4, 5, 1, 4, 3);
        // this.skills = new Skills(1, 0, 50, 1, 1);

        let damage: number = 0;

        let enemySkills = enemy.getTotalSkills();
        let skills = this.getTotalSkills();

        let power = enemySkills.power;
        power += enemySkills.accuracy;
        let protection = skills.strength ? skills.strength : 1;
        let punch = Math.ceil(power / protection);

        let dodge = skills.agility * this.getHealth() / this.getMaxHealth() / 2;
        if (dodge <= Math.random() * 100) {
            damage += punch;
            this.reduceHealth(punch);
            this.addExperience(1);
        }

        let secondPunch = enemySkills.agility + enemySkills.fireRate;
        if (secondPunch >= Math.random() * 100) {

            let dodge = skills.agility * this.getHealth() / this.getMaxHealth() / 2;
            if (dodge <= Math.random() * 100) {
                damage += punch;
                this.reduceHealth(punch);
                this.addExperience(1);
            }
        }

        return damage;
    }
}
