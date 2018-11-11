import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from './mocks/router-link-directive-stub';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Component, DebugElement, CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;
let routerLinks: RouterLinkDirectiveStub[];
let linkDes: DebugElement[];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent,
        RouterOutletStubComponent,
        RouterLinkDirectiveStub
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      
    }).compileComponents();
  }));
  //tests();
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));

  it('can instantiate the component', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      //const compiled = fixture.debugElement.nativeElement;
      // find DebugElements with an attached RouterLinkStubDirective
      linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkDirectiveStub));

      // get attached link directive instances
      // using each DebugElement's injector
      routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
      expect(comp).not.toBeNull();
    }));

  // it('can get RouterLinks from template', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   linkDes = fixture.debugElement
  //   .queryAll(By.directive(RouterLinkDirectiveStub));

  //   routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  //     expect(routerLinks.length).toBe(0, 'should have 1 routerLink');
  //     expect(routerLinks[0].linkParams).toBe('/');
  //   }); 
  
  it('should have a link to /', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
      const index = debugElements.findIndex(de => {
        return de.properties['href'] === '/';
      });
      expect(index).toBe(-1);
  });  
});

