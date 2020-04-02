import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HEROES } from '../Mock-Heroes';
let HeroesComponent = class HeroesComponent {
    constructor() {
        this.heroes = HEROES;
    }
    ngOnInit() {
    }
    onSelect(hero) {
        this.selectedHero = hero;
        console.log(this.selectedHero);
    }
};
HeroesComponent = __decorate([
    Component({
        selector: 'app-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.scss']
    })
], HeroesComponent);
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map