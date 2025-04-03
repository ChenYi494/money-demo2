import { Component } from '@angular/core';
// moment
import moment from 'moment';
// service
import { CenterService } from '../../services/center.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  backURL = 'https://money-demo2.onrender.com';
  now = '';

  constructor(
    private centerSVC: CenterService,
    private http: HttpClient
  ) {
    let weekday = this.centerSVC.week_type[moment().weekday()];
    this.now = moment().format('YYYY年MM月DD日') + ` 星期${weekday}`;

    this.http.get<any>(this.backURL + '/api/spec', {
      // withCredentials: true,
      // headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => console.error('API 錯誤：', error)
    });
  }

  ngOnInit(): void {
  }

  getWeek() {
  }

}
