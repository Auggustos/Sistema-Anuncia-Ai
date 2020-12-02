import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js'
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
  selector: 'app-chart-vendas',
  templateUrl: './chart-vendas.component.html',
  styleUrls: ['./chart-vendas.component.css']
})
export class ChartVendasComponent implements OnInit {

  constructor(private httpClient: HttpClient, private apiService: ApiService, private authService: AuthService, private dialogService: DialogService) {
  }
  public chartData: ChartDataSets[] = [{ data: [], label: 'Histórico de temperatura' }];
  public chartType: ChartType = 'line';
  public chartLabels: Label[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public objChart: { valor: number[], data: string[] } = { valor: [], data: [] };

  ngOnInit(): void {
    this.loadData()
  }
  loadData() {
    let vendas: Vendas[] = [];
    this.apiService.getVendas(this.authService.token).subscribe(response => {
      vendas = response;
      console.log(vendas);
      this.chartLabels = [];
      this.chartData[0].data = [];

      for (let i = 0; i < vendas.length; i++) {
        const date: Date = new Date(vendas[i].criado_em);
        if (this.objChart.data.indexOf(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`) == -1) { //caso não exista essa data
          this.objChart.valor.push(vendas[i].valor_final);
          this.objChart.data.push(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
        } else {
          const position = this.objChart.data.indexOf(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
          var valor = this.objChart.valor[position];
          valor += vendas[i].valor_final;
          this.objChart.valor[position] = valor;
        }
      }


      var myChart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: this.objChart.data,
          datasets: [{
            label: 'Valor Vendido por dia',
            data: this.objChart.valor,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
      , error => {
        this.dialogService.showError(`Erro ao obter Relatório das vendas`, "Erro!")
      })
  }

}
