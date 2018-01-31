import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('textBox') textBox: ElementRef;
  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() updateValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateForBox( newValue: number ) {

    this.progreso = newValue;
    // console.log('valor -', this.progreso);
    if ( this.progreso < 0 ) {
      this.progreso = 0;
    }
    if ( this.progreso > 100 ) {
      this.progreso = 100;
    }
    if ( this.progreso === null ) {
      this.progreso = 0;
    }

    this.updateValue.emit( this.progreso);
    this.textBox.nativeElement.value = this.progreso;
  }
  updateProg( valor: number ) {
    this.progreso += valor;
    if ( this.progreso < 0 ) {
      this.progreso = 0;
    }
    if ( this.progreso > 100 ) {
      this.progreso = 100;
    }

    this.updateValue.emit( this.progreso);
    this.textBox.nativeElement.focus();
  }
}
