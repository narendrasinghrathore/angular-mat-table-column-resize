import { NgModule } from '@angular/core';
import { MatTableGridComponent } from './mat-table-grid/mat-table-grid.component';
import { CustomMatTheme } from '../themes/mat.theme';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterColumnsPipe } from './filter-columns.pipe';
import { TableModule } from 'primeng/table';
import { PrimengTableGridComponent } from './primeng-table-grid/primeng-table-grid.component';
import { TableColumnResizerDirective } from './directives/table-column-resizer.directive';
@NgModule({
    imports: [CommonModule, CustomMatTheme, ReactiveFormsModule, TableModule],
    declarations: [MatTableGridComponent, FilterColumnsPipe, PrimengTableGridComponent, TableColumnResizerDirective],
    exports: [MatTableGridComponent, PrimengTableGridComponent, FilterColumnsPipe, TableColumnResizerDirective]
})
export class SharedModule { }
