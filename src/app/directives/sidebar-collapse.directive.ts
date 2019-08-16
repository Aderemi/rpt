import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebarCollapse]'
})
export class SidebarCollapseDirective {

  @Input('appSidebarCollapse') appSidebarCollapse: HTMLElement;
  collapseToggle: boolean = false;
  constructor(private el: ElementRef, private rnd: Renderer2) { }




  @HostListener('click') collapseSideBar() {
    let listGroup = this.appSidebarCollapse.querySelector("#itemsDiv");
    let h2section = this.appSidebarCollapse.querySelector("#sectionDiv");
    let fixedSideBar = this.appSidebarCollapse.querySelector("#fixed-side-container")
    let ico = this.appSidebarCollapse.querySelector("#ico")
    if (!this.collapseToggle) {
      this.rnd.setStyle(listGroup, 'display', 'none')
      this.rnd.setStyle(h2section, 'display', 'none')
      this.rnd.setStyle(fixedSideBar, 'width', 'auto')
     // this.rnd.setStyle(fixedSideBar, 'border', '3px solid grey')
      this.rnd.removeClass(ico, 'fa-arrow-left')
      this.rnd.addClass(ico, 'fa-bars')
      this.rnd.removeClass(this.appSidebarCollapse, 'col-md-3')
      this.rnd.addClass(this.appSidebarCollapse, 'col-md-1')

      this.collapseToggle = true;
    } else {
      this.rnd.setStyle(listGroup, 'display', 'block')
      this.rnd.setStyle(h2section, 'display', 'block')
      this.rnd.setStyle(fixedSideBar, 'border', 'none')
     // this.rnd.setStyle(fixedSideBar, 'transition', '0.5s');
      this.rnd.setStyle(fixedSideBar, 'width', '19%')
      
      this.rnd.removeClass(ico, 'fa-bars')
      this.rnd.addClass(ico, 'fa-arrow-left')
      this.rnd.removeClass(this.appSidebarCollapse, 'col-md-1')
      this.rnd.addClass(this.appSidebarCollapse, 'col-md-3')
      this.collapseToggle = false;
    }

  }

}
