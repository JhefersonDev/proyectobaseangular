import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadercomponentComponent } from './loadercomponent.component';

describe('LoadercomponentComponent', () => {
  let component: LoadercomponentComponent;
  let fixture: ComponentFixture<LoadercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
