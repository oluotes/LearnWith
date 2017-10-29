import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

import { AppComponent } from '../../../../../src/com/dotComIt/learnWith/main/app.component';


describe('AppComponent', function () {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let location: Location;
    let router: Router;

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            // create components before setting up the router
            // this is an important order of operations because router has issues if the router-outlet component is not defined
            fixture = TestBed.createComponent(AppComponent);
            comp = fixture.componentInstance;

            // set up router
            router = TestBed.get(Router);
            router.initialNavigation();
            location = TestBed.get(Location);
        });
    }));

    it('should create component', () => expect(comp).toBeDefined() );

    it('default router navigation', () => {
        expect(location.path()).toBe('/login');
    });

});
