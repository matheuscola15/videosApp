import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UmLugarSilenciosoPage } from './um-lugar-silencioso.page';

describe('UmLugarSilenciosoPage', () => {
  let component: UmLugarSilenciosoPage;
  let fixture: ComponentFixture<UmLugarSilenciosoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UmLugarSilenciosoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UmLugarSilenciosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
