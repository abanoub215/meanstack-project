import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
allTitles:any[]=[];
allData: any[] = this.allTitles;

constructor(){

}
ngOnInit(): void{

}

private searchval: string = '';

set searchValue(value: string) {
  this.searchval = value;
  this.searchall(value);
}





  searchall(title: string) {
    if (title == '') {
      this.allTitles = this.allData;
    } else {
      this.allTitles = this.allTitles.filter((title) => {
        if (
          title.title
            .toLocaleLowerCase()
            .includes(title.toLocaleLowerCase())
        ) {
          return title;
        }
      });
    }
  }
}
