import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleformComponent } from './scheduleform.component';

describe('ScheduleformComponent', () => {
  let component: ScheduleformComponent;
  let fixture: ComponentFixture<ScheduleformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
