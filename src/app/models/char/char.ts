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

    public getAvatarPath(): string {
        return this.avatarPath;
    }
}
