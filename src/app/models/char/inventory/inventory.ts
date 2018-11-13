import { InventoryThing } from "./inventory-thing";
import { Skills } from "../skills";

export class Inventory {
    private things: InventoryThing[];

    constructor() {
        this.things = [];
    }

    public addThing(thing: InventoryThing): void {
        this.things.push(thing);
    }

    public getSkills(): Skills {
        let skills = new Skills();

        for (let i = 0; i < this.things.length; i++) {
            let thing = this.things[i];

            skills.add(thing.getSkills());
        }

        return skills;
    }
}