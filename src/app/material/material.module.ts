import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatAutocompleteModule, 
  MatFormFieldModule, 
  MatInputModule
} from '@angular/material';

import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule, 
    MatFormFieldModule, 
    MatInputModule,
	MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule, 
    MatFormFieldModule, 
    MatInputModule,
	MatSidenavModule
  ]
})
export class MaterialModule {}