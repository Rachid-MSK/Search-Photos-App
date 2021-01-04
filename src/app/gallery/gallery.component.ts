import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos;
  currentPage= 1;
  motCle: string="";
  size= 20;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch(dataForm){
    this.httpClient.get("https://pixabay.com/api/?key=18547474-681bf176d39f606c500f4b41e&q="+dataForm.motCle+"&image_type=photo&pretty=true&per_page="+this.size+"&page=1"+this.currentPage)
    .subscribe(data =>{
    this.pagePhotos= data;
    
    })
  }
  

}
