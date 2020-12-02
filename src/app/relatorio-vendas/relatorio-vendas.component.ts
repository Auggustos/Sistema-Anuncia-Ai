import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/services/api.service';
import { PedidoProduto } from '../classes/pedidoProduto.class';
import { Usuario } from '../classes/usuario.class';
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog/dialog.service'

export interface Vendas {
  criado_em: Date,
  id: string,
  pedido_produtos: PedidoProduto[],
  status: number,
  usuario: Usuario,
  valor_final: number,
}
@Component({
  selector: 'app-relatorio-vendas',
  templateUrl: './relatorio-vendas.component.html',
  styleUrls: ['./relatorio-vendas.component.css']
})
export class RelatorioVendasComponent {
  public chartData: ChartDataSets[] = [{ data: [], label: 'Histórico de temperatura' }];
  public chartType: ChartType = 'line';
  public chartLabels: Label[]
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  constructor(private httpClient: HttpClient,private apiService: ApiService, private authService: AuthService,private dialogService: DialogService) {
    this.loadData();
  }
  chart: Chart;
  loadData() {


    let vendas: Vendas[] = [];
    this.apiService.getVendas(this.authService.token).subscribe(response => {
      vendas = response;
      console.log(vendas);
      this.chartLabels = [];
      this.chartData[0].data = [];

      for (let i = 0; i < vendas.length; i++) {
        const date: Date = new Date(vendas[i].criado_em);
        this.chartLabels.push(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
        this.chartData[0].data.push(vendas[i].valor_final);
      }
    }, error => {
      this.dialogService.showError(`Erro ao obter dados das vendas`, "Erro!")
    })
  }
}
