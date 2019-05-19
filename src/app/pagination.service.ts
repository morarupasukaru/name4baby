import { Injectable, EventEmitter, Output } from '@angular/core';
import { Firstname } from './firstname';

export class PageChangedEvent {
  selectedPage: number;
}

@Injectable()
export class PaginationService {

  pageSize = 10;
  @Output() pageChanged: EventEmitter<PageChangedEvent> = new EventEmitter();

  constructor() { }

  selectPage(page) {
    this.pageChanged.emit({ selectedPage: page });
  }

  getPage(pageNumber: number, firstnames: Firstname[]): Firstname[] {
    const start = pageNumber * 10;
    let end = start + this.pageSize;
    if (end > firstnames.length) {
      end = firstnames.length;
    }
    return firstnames.slice(start, end);
  }

  getPageCount(resultCount: number): number {
    return Math.floor(resultCount / this.pageSize) + (resultCount % this.pageSize !== 0 ? 1 : 0);
  }
}
