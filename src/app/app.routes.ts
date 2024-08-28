import { Routes } from '@angular/router';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
    {path: 'admin', component: AdminComponent, children: [
        {path: 'inventario',  component: InventarioComponent},
        {path: 'inventario/:idProduct', component: DetalleComponent}
    ]}
];
