import { Component, AfterViewChecked } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendario-modal',
  templateUrl: './calendario-modal.page.html',
  styleUrls: ['./calendario-modal.page.scss'],
})
export class CalendarioModalPage implements AfterViewChecked {
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  modalReady = false;

  constructor(private modalCtrl: ModalController) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }

  ngAfterViewChecked() {
    
  }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  save() {
    this.modalCtrl.dismiss({event: this.event});
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    this.event.startTime = new Date(ev.selectedTime);
  }

}
