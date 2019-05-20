import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { PaginationService } from '../pagination.service';

export class PageChangedEvent {
  selectedPage: number;
}

@Component({
  selector: 'app-result-pagination',
  templateUrl: './result-pagination.component.html',
  styleUrls: ['./result-pagination.component.css']
})
export class ResultPaginationComponent implements OnChanges {

  @Input() resultCount;
  @Output() pageChanged = new EventEmitter<PageChangedEvent>();
  currentPageIndex = 1;
  pageCount: number;
  displayPagesCount = 3;
  pages = [];
  displayNext = false;
  displayPrevious = false;
  displayThreePoints = false;
  previousDisabled: boolean;
  nextDisabled: boolean;

  constructor(private paginationService: PaginationService) {
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
    let firstPage = this.currentPageIndex - this.displayPagesCount + 1;
    if (firstPage < 1) {
      firstPage = 1;
    }
    let lastPage = firstPage + this.displayPagesCount - 1;
    if (lastPage > this.pageCount) {
      lastPage = this.pageCount;
    }
    this.pages = [];
    for (let i = firstPage; i <= lastPage; i++) {
      this.pages.push(i);
    }

    this.displayNext = this.pageCount > this.displayPagesCount;
    this.previousDisabled = this.currentPageIndex === 1;
    this.displayPrevious = this.pageCount > this.displayPagesCount;
    this.nextDisabled = this.currentPageIndex === this.pageCount;
    this.displayThreePoints = lastPage < this.pageCount;
    this.selectPage(this.currentPageIndex);
  }

  isCurrentPage(page) {
    return page === this.currentPageIndex;
  }

  selectPage(page) {
    this.pageChanged.emit({ selectedPage: page });
  }
}
