import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {

  entities: Entity[] = [];
  selectedId?: number = 1;

  ngOnInit(): void {
    this.entities = [
      {
        id: 1,
        name: 'Item 1',
      },
      {
        id: 2,
        name: 'Item 2',
      },
      {
        id: 3,
        name: 'Item 3',
      },
      {
        id: 4,
        name: 'Item 4',
      },
    ];
  }
}

interface Entity {
  id: number;
  name: string;
}
