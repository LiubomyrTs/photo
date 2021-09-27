import { Component, OnInit} from "@angular/core";
import { ExperimentalService } from 'src/app/experimental.sevice';

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  content = '';
  constructor(private experimentalService: ExperimentalService) {}

  loadContent() {
    this.content = this.experimentalService.fetch() || '';
    console.log(this.content);
  }

  ngOnInit(): void {
    this.loadContent();
  }
}
