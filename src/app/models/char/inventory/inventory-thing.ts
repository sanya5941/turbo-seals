import { Skills } from "../skills";

export class InventoryThing {
    private title: string;
    private maxGroupItems: number;
    private active: boolean;
    private skills: Skills;
    private imgPath: string;

    protected constructor(
        title: string, 
        maxGroupItems: number = 1, 
        skills: Skills = new Skills() 
    ) {
        this.title = title;
        this.maxGroupItems = maxGroupItems;
        this.skills = skills;
        this.active = false;
        this.imgPath = '';
    }

    public getTitle(): string {
        return this.title;
    }

    public isActive(): boolean {
        return this.active;
    }

    public activate(): void {
        this.active = true;
    }

    public disactivate(): void {
        this.active = false;
    }

    public getSkills(): Skills {
        return this.skills;
    }
}