import { Injectable } from '@angular/core';
import { Firstname } from './firstname';

@Injectable()
export class PaginationService {

  pageSize = 10;

  constructor() { }

  getPage(pageNumber: number, firstnames: Firstname[]): Firstname[] {
    pageNumber = pageNumber - 1;
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

  isPaginationDisplayed(resultCount: number): boolean {
    return resultCount > this.pageSize;
  }
}
