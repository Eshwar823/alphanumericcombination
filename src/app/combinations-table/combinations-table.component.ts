import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PeriodicElement} from './combinations-table.interface'
@Component({
  selector: 'app-combinations-table',
  templateUrl: './combinations-table.component.html',
  styleUrls: ['./combinations-table.component.scss']
})
export class CombinationsTableComponent implements OnInit {
  displayedColumns: string[] = ['number'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input('combinationList') public set combinationList(data) {
    this.dataSource.data = data;
  }
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
