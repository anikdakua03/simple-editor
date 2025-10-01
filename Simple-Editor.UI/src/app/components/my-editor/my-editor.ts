import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { TiptapEditorDirective } from 'ngx-tiptap';
import { MyEditorMenu } from "../my-editor-menu/my-editor-menu";

@Component({
  selector: 'app-my-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, TiptapEditorDirective, MyEditorMenu],
  templateUrl: './my-editor.html',
  styleUrls: ['./my-editor.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MyEditor implements OnInit, OnDestroy {

  editor: Editor | null = null;

  value = '<p>Hello, Tiptap!</p>'; // Can be HTML or JSON

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.editor = new Editor({
        content: this.value,
        extensions: [StarterKit],
        injectCSS: true,
        editorProps: {
          attributes: {
            // class: 'p-2 m-6 border-black focus:border-blue-700 border-2 h-80 w-280 bg-amber-300 rounded-md outline-hidden',
            class: 'p-2 m-6 border-black focus:border-blue-700 border-2 bg-amber-300 rounded-md outline-hidden',
          },
        },
      });
    }
  }

  check() {
    console.log('Editor text value : ', this.value);

  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
