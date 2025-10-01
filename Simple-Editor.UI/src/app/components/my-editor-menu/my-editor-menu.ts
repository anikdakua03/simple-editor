import { CommonModule, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Editor } from '@tiptap/core';

@Component({
  selector: 'app-my-editor-menu',
  imports: [NgClass, CommonModule],
  templateUrl: './my-editor-menu.html',
  styleUrl: './my-editor-menu.scss'
})
export class MyEditorMenu {
  readonly editor = input.required<Editor>();

}
