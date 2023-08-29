// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Band, BandService } from '../band.service';
// import 'rxjs/Rx';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  bands: Band[] = [];
  errorMessage!: string;
  isLoading: boolean = true;
  users = ['Pato','Wes','Ben'];

  constructor(private bandService: BandService) {}

  ngOnInit() {
      this.getBands();
  }

  getBands() {
      this.bandService
          .getBands()
          .subscribe(
            bands => {
              this.bands = bands;
              this.isLoading = false;
          },
              error => this.errorMessage = <any>error
          );
  }

  appendBand(band: Band) {
    this.bands.push(band);
}

}
