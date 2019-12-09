import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// npm i -s @angular/flex-layout @angular/cdk


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatExpansionModule
  ]
})
export class UtilModule { }
