import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';


@NgModule({
    declarations: [
      ProdutoDashboardComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
      
    ]
})
export class ProdutoModule{

}