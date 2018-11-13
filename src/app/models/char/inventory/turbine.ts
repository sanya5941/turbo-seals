import { InventoryThing } from "./inventory-thing";
import { Skills } from "../skills";

export class Turbine extends InventoryThing {
    constructor(title: string, agility: number) {
        let skills: Skills = new Skills();
        skills.agility = agility;

        super(title, 1, skills);
    }
}