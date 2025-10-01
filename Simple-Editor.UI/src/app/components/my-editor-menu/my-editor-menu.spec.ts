import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEditorMenu } from './my-editor-menu';

describe('MyEditorMenu', () => {
  let component: MyEditorMenu;
  let fixture: ComponentFixture<MyEditorMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEditorMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyEditorMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
