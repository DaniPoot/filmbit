import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchMobile') searchMobile?: ElementRef;
  @ViewChild('input') input?: ElementRef;
  private isSearchEnable: Boolean = false;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  activeBar(): void{
    const input = this.input?.nativeElement;
    const search = this.searchMobile?.nativeElement;

    if(this.isSearchEnable){
      this.render.addClass(search, 'disabled')
    }else{
      this.render.removeClass(search, 'disabled')
      input.focus()
    }
    this.isSearchEnable = !this.isSearchEnable
  }

}
