import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pago, PagosService } from 'src/app/core/services/pagos.service';

@Component({
  selector: 'app-add-pago',
  templateUrl: './add-pago.component.html',
  styleUrls: ['./add-pago.component.scss']
})
export class AddPagoComponent implements OnInit{

  formAddPago!: FormGroup
  constructor(private _pago: PagosService){

  }

  ngOnInit(){

    this.formAddPago =  new FormGroup({
      expired_date: new FormControl({
        validators:[Validators.required]
      }),
      service: new FormControl({
        validators:[Validators.required]
      }),
      amount: new FormControl({
        validators:  [Validators.required]
      })
    })
  }

  save(body: Pago){
    console.log(body)
    this._pago.createPago(body).subscribe({
      next: rpta=>{
        console.log(rpta)
      },
      error: err=>{
        console.log(err)
      }
    })
  }
}
