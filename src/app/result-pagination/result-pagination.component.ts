import { Component, Input, OnChanges } from '@angular/core';
import { PaginationService } from '../pagination.service';

// TODO remove not needed css

@Component({
  selector: 'app-result-pagination',
  templateUrl: './result-pagination.component.html',
  styleUrls: ['./result-pagination.component.css']
})
export class ResultPaginationComponent implements OnChanges {

  @Input() resultCount;
  paginationService: PaginationService;
  pageCount: number;
  displayPagesCount = 4;
  currentPageIndex = 1;
  pages = [];
  displayNext = false;
  displayPrevious = false;

  constructor(paginationService: PaginationService) {
    this.paginationService = paginationService;
  }

  ngOnChanges() {
    this.reload();
  }

  reload() {
    this.pageCount = this.paginationService.getPageCount(this.resultCount);
    this.currentPageIndex = 1;
    this.computePages();
  }

  onPrevious() {
    this.currentPageIndex--;
    if (this.currentPageIndex < 1) {
      this.currentPageIndex = 1;
    }
    this.computePages();
  }

  onNext() {
    this.currentPageIndex++;
    if (this.currentPageIndex > this.pageCount) {
      this.currentPageIndex = this.pageCount;
    }
    this.computePages();
  }

  onSelectedPage(page: number) {
    this.currentPageIndex = page;
    this.computePages();
  }

  computePages() {
    // TODO center active page
    const firstPage = this.currentPageIndex;
    let lastPage = this.currentPageIndex + this.displayPagesCount - 1;
    if (lastPage > this.pageCount) {
      lastPage = this.pageCount;
    }
    this.pages = [];
    for (let i = firstPage; i <= lastPage; i++) {
      this.pages.push(i);
    }
    this.displayNext = lastPage < this.pageCount;
    this.displayPrevious = firstPage > 1;
    this.paginationService.selectPage(this.currentPageIndex);
  }

  isCurrentPage(page) {
    return page === this.currentPageIndex;
  }
}
