import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
    selector: 'app-root',
    template: `
        <div uk-root></div>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    constructor(private upgrade: UpgradeModule) {
    }

    ngOnInit(): void {
        this.upgrade.bootstrap(document.documentElement, ['upkeep']); // , {strictDi: true}
    }
}
