import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RepositoryService } from 'src/app/shared/repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { Owner } from 'src/app/interface/owner';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'];

  public dataSource = new MatTableDataSource<Owner>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllOwners = () => {
    this.repoService.getData('api/owner')
    .subscribe(res => {
      this.dataSource.data = res as Owner[];
    })
  }

  public customSort = (event: any) => {
    console.log(event)
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {

  }

  public redirectToUpdate  = (id: string) => {

  }

  public redirectToDelete = (id: string) => {
    
  }

}
