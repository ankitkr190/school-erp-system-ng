import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-pactivity",
  templateUrl: "./pactivity.component.html",
  styleUrls: ["./pactivity.component.css"]
})
export class PactivityComponent implements OnInit {
  constructor(private obj: HttpClient) {}
  id: string;

  ngOnInit() {
    this.id = localStorage.getItem("id");
    this.getactivity();
  }

  showemp: boolean = true;
  hideshow(status: string) {
    if (status == "new") {
      this.showemp = false;
    } else if (status == "list") {
      this.showemp = true;
    }
  }
  activitylist: any[] = [];
  getactivity() {
    var url = "https://sbic.in/app/dashboard/getactivity";
    var input = {
      schoolid: this.id
    };

    this.obj.post(url, input).subscribe(response => {
      this.activitylist = response as string[]; //reload list
    });
  }
  name: string;
  fromdate: string;
  todate: string;
  details: string;
  head: string;

  saveactivity() {
    var url = "https://sbic.in/app/dashboard/saveactivity";
    var input = {
      name: this.name,
      fromdate: this.fromdate,
      todate: this.todate,
      details: this.details,
      head: this.head,

      schoolid: this.id
    };

    this.obj.post(url, input).subscribe(response => {
      this.getactivity();
      this.showemp = true;
      this.name = "";
      this.fromdate = "";
      this.todate = "";
      this.details = "";
      this.head = "";
    });
  }

  color: any[] = ["primary", "danger", "info", "warning", "success", "default"];
}
