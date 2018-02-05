import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Title } from '@angular/platform-browser';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';
  constructor(
    private router: Router,
    public tittulo: Title,
    public meta: Meta
  ) {

    this.getData()
    .subscribe(evento => {

        this.label = evento.titulo;
        this.tittulo.setTitle( this.label );
        let metaTag: MetaDefinition = {
          name: 'description',
          content: this.label
        };

        this.meta.updateTag( metaTag);
    });

  }

  ngOnInit() {

  }


  getData() {
    return this.router.events
    .filter( evento => evento instanceof ActivationEnd )
    .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null)
    .map( (evento: ActivationEnd) => evento.snapshot.data)

  }
}
