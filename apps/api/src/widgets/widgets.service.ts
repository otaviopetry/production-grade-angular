import { Widget } from '@fem/api-interfaces';
import { Injectable } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { uuidv4 } from 'uuid';

@Injectable()
export class WidgetsService {
  protected mockWidgets: Widget[] = [
    { id: '1', title: 'Nest Widget FTW 00!', description: 'Pending...' },
    { id: '2', title: 'Nest Widget FTW 01!', description: 'Pending...' },
    { id: '3', title: 'Nest Widget FTW 02!', description: 'Pending...' },
    { id: '4', title: 'Nest Widget FTW 03!', description: 'Pending...' },
  ]

  findAll() {
    return this.mockWidgets;
  }

  create(widget: Widget) {
    this.mockWidgets = [
      ...this.mockWidgets,
      Object.assign({ }, widget, { id: uuidv4() })
    ];

    return this.mockWidgets;
  }

  findOne(id: string) {
    return this.mockWidgets.find((widget) => widget.id === id);
  }

  update(id: string, updateWidget: Widget) {
    this.mockWidgets = this.mockWidgets.map((widget) => (widget.id === id ? updateWidget : widget));

    return this.mockWidgets;
  }

  remove(id: string) {
    this.mockWidgets = this.mockWidgets.filter((widget) => widget.id !== id);

    return this.mockWidgets;
  }
}
