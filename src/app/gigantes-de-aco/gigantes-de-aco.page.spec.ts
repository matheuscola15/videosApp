import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GigantesDeAcoPage } from './gigantes-de-aco.page';

describe('GigantesDeAcoPage', () => {
  let component: GigantesDeAcoPage;
  let fixture: ComponentFixture<GigantesDeAcoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GigantesDeAcoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigantesDeAcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
