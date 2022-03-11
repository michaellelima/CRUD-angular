import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers!: number[];
  @Input('myForUsando') texto!: string;


  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) { }

  ngOnInit(): void {

    for(let number of this.numbers){
      //criando um template para cada repetição e deixando o numero como implicito
      this.container.createEmbeddedView(this.template, {$implict: number})
    }
    throw new Error('Method not implemented.');
  }

}
