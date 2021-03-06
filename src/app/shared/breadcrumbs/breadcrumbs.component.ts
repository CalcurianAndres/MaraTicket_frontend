import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

    public titulo:any;
    public tituloSubs$:Subscription;

  constructor(private router:Router) {
    this.tituloSubs$ = this.getArgumentosRuta()
                      .subscribe(data =>{
                          this.titulo = data.titulo;
                          if(this.titulo){
                            document.title = `Soporte Técnico | ${data.titulo}`
                          }else{
                            document.title = `Soporte Técnico`
                          }
                      });    
  }
  
  ngOnDestroy():void{
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){
    return this.router.events
    .pipe(
      filter<any>( event => event instanceof ActivationEnd ),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data),
    )
    
  }


}
