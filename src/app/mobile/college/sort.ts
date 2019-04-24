import { PipeTransform, Pipe } from '@angular/core';
@Pipe({name:"sort"})
export class sort implements PipeTransform{
    transform(a:any[],col:string,ord:boolean)
    {
    let result:any[]; 
     if(col==undefined)
     return a;
    if(ord)
    result =this.ascending(a,col);
    else
    result=a;
    return result;
    }
 ascending(b:any[],col:string)
 {
 b.sort((x:any,y:any)=>
    {
     if(x[col]>y[col])
   {
     return 1;
   }
     return -1;
    });
 return b;
    }
}
