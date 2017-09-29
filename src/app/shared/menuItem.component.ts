import { Component, Input } from '@angular/core';

@Component({
  selector: '[shared-menu-item]',
  template: `
    <a *ngIf="!menuItemData.url"
       [ngClass]="{'has-arrow': !!menuItemData.children && menuItemData.children.length > 0}">
      <i class="{{menuItemData.icon}}" *ngIf="menuItemData.icon && !menuItemData.hasImage"></i>
      <img src="{{menuItemData.icon}}" *ngIf="menuItemData.icon && menuItemData.hasImage" />
      <span *ngIf="menuItemData.text">{{menuItemData.text}}</span>
    </a>
    <a href="{{menuItemData.url}}" target="_blank"
       *ngIf="menuItemData.url && menuItemData.isExternal">
      <i class="{{menuItemData.icon}}" *ngIf="menuItemData.icon && !menuItemData.hasImage"></i>
      <img src="{{menuItemData.icon}}" *ngIf="menuItemData.icon && menuItemData.hasImage" />
      <span *ngIf="menuItemData.text">{{menuItemData.text}}</span>
    </a>
    <a [routerLink]="menuItemData.url" routerLinkActive="active"
       [ngClass]="{'has-arrow': !!menuItemData.children && menuItemData.children.length > 0}"
       *ngIf="menuItemData.url && !menuItemData.isExternal">
      <i class="{{menuItemData.icon}}" *ngIf="menuItemData.icon && !menuItemData.hasImage"></i>
      <img src="{{menuItemData.icon}}" *ngIf="menuItemData.icon && menuItemData.hasImage" />
      <span *ngIf="menuItemData.text">{{menuItemData.text}}</span>
    </a>
  `,
})

export class SharedMenuItem {
  @Input()
  public menuItemData: any;
}
