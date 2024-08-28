import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  producto : string = '';
  route = inject(ActivatedRoute);

  ngOnInit(){
    this.route.params.subscribe(param => {
      this.producto = param['idProduct']
    });
  }

}
