import * as $ from "jquery";
import { Species } from "./gameLogic";

export class ScreenUpdater{
    constructor() { };
    update(species: Species[]) {
        for (let i = 0; i < species.length; i++) {
            $("#p" + i).text(species[i].populationSize);
        }
    }
}