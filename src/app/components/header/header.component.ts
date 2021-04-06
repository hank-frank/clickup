import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public isMenuOpen = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    onSidenavClick(): void {
        this.isMenuOpen = false;
    }
}
