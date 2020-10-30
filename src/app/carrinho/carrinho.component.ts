import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Transaction {
  id: number,
  item: string,
  cost: number
}
const ELEMENT_DATA: Transaction[] = [
  { id: 1, item: 'Beach ball', cost: 4 },
  { id: 2, item: 'Towel', cost: 5 },
  { id: 3, item: 'Frisbee', cost: 2 },
  { id: 4, item: 'Sunscreen', cost: 4 },
  { id: 5, item: 'Cooler', cost: 25 },
  { id: 6, item: 'Swim suit', cost: 15 },
];

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  displayedColumns: string[] = ['item', 'preco', 'quantidade', 'acao'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return ELEMENT_DATA.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  constructor() { }

  @Output() badge = new EventEmitter();

  ngOnInit(): void {
    this.badge.emit({valor: ELEMENT_DATA.length});
  }
  goBack() {
    window.history.back();
  }
  removeItem(idItem) {
    ELEMENT_DATA.forEach(
      produto => {
        if (produto.id == idItem) {
          ELEMENT_DATA.splice(ELEMENT_DATA.indexOf(produto), 1)
        }
      }
    )
    this.dataSource.data = ELEMENT_DATA;
    this.badge.emit({valor: ELEMENT_DATA.length});

  }

  finalizaCompra(){
    console.log(ELEMENT_DATA.length);
    this.badge.emit({valor: ELEMENT_DATA.length});
  }

}
