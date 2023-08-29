import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Band, BandService } from '../band.service';


@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.css']
})
export class BandFormComponent implements OnInit {
  errors: string = '';

    constructor(private bandService: BandService) { }

    @Output()
    bandAdded: EventEmitter<Band> = new EventEmitter<Band>();

    ngOnInit() {
    }

    addBand(name: any) {
        this.bandService
            .addBand({
                name: name,
            })
            .subscribe(
                band => {
                    this.bandAdded.emit(band);
                },
                error => {
                    this.errors = error.json().errors;
                }
            );
    }
}
