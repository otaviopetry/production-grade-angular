import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';

@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(
    private widgetsService: WidgetsService,
  ) {
    //
  }

  public loadWidgets() {
    this.widgetsService
      .all()
      .subscribe((widgets: Widget[]) => this.allWidgets.next(widgets));
  }

  public selectWidget(widget: Widget) {
    this.selectedWidget.next(widget);
  }
}
