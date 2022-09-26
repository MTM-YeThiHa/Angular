import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'; import { Observable, of, range, from, fromEvent } from 'rxjs'; 
import { ajax } from 'rxjs/ajax'; 
import { filter, map, catchError, take, combineAll, delay, startWith } from 'rxjs/operators'; 
import { interval, concat, empty } from 'rxjs';
import 'lodash';
declare var _: any;
import { defer, timer, merge, generate, throwError } from 'rxjs';
import { switchMap, scan, takeWhile, mapTo } from 'rxjs/operators';
import { tap, mergeMap, concatMap, exhaustMap, retry} from 'rxjs/operators';

generate (
   2,
   x => x <= 38,
   x => x + 3,
   x => '*'.repeat(x)
).subscribe(console.log);

@Component({ 
   selector: 'app-root', 
   templateUrl: './app.component.html', 
   styleUrls: ['./app.component.scss'] 
}) 
export class AppComponent implements OnInit {
   title(title: any) {
     throw new Error('Method not implemented.');
   } 
   // title = 'Reactive programming concept'; 
   // numbers : number[] = []; 
   // val1 : number = 0; 
   // filteredNumbers : number[] = []; 
   // val2 : number = 0; 
   // processedNumbers : number[] = []; 
   // val3 : number = 0; 
   // apiMessage: string[]=[]; 
   // counter: any
  
  //  counter : number = 0;
  //  @ViewChild("counter") counterRef!: ElementRef;
   ngOnInit() { 
      //testing lodash
      console.log(_.chunk(['a', 'b', 'c', 'd'],2)); //lodash fuction
      console.log(_.random(1, 100)); //lodash function

      // // Observable stream of data Observable<number>
      // // const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
      // // const numbers$ = range(1,10); 
      // const numbers$ = from([1,2,3,4,5,6,7,8,9,10]); 
      // // observer 
      // const observer = { 
      //    next: (num: number) => {this.numbers.push(num); this.val1 += num }, 
      //    error: (err: any) => console.log(err), 
      //    complete: () => console.log("Observation completed") 
      // }; 
      // numbers$.subscribe(observer); 
      // const filterFn = filter( (num : number) => num > 5 ); 
      // const filteredNumbers = filterFn(numbers$); 
      // filteredNumbers.subscribe( (num : number) => {this.filteredNumbers.push(num); this.val2 += num } ); 
      // const mapFn = map( (num : number) => num + num ); 
      // const processedNumbers$ = numbers$.pipe(filterFn, mapFn); 
      // processedNumbers$.subscribe( (num : number) => {this.processedNumbers.push(num); this.val3 += num } ); 
      // const api$ = ajax({ 
      //    url: 'https://httpbin.org/delay/1', 
      //    method: 'POST', 
      //    headers: {'Content-Type': 'application/text' }, 
      //    body: "Hello" 
      // }); 
      // api$.subscribe((res: any) => this.apiMessage = res.response.data);
      // // const counterRef = document.getElementById('counter'): HTMLElement;
      // const clickEvent$ = fromEvent(document.getElementById("counter") as HTMLElement, 'click');
      // clickEvent$.subscribe(() => this.counter++);

      // const hello = Observable.create(function(observer: { next: (arg0: string) => void; }) {
      //    observer.next('Hello');
      //    observer.next('World');
      // });
      // const subscribe = hello.subscribe((val: any) => console.log(val));

      const evenNumbers = Observable.create(function (observer: { next: (arg0: number) => void; }) {
         let value = 0;
         const interval = setInterval(() => {
            if (value % 2 === 0 ) {
               observer.next(value);
            }
            value++;
         }, 1000);

         return () => clearInterval(interval);
      });
      //output: 0...2...4...6...8
      const subscribe = evenNumbers.subscribe((val: any) => console.log(val));
      // unsubscribe after 10 seconds

      setTimeout(() => {
         subscribe.unsubscribe();
      }, 10000);

      const s1 = of(new Date()); //will capture current date time
      const s2 = defer(() => of(new Date())); //will capture date time at the moment of subscription

      console.log(new Date());

      timer(2000)
      .pipe(switchMap(_ => merge(s1, s2)))
      .subscribe(console.log);
      //output: 'Complete!'

      //emit array as a sequence of values
      // const arraySource = from ([1, 2, 3, 4, 5]);
      // emit result of promise
      // const promiseSource = from(new Promise (resolve => resolve('Hello World')));
      // output: 'Hello World'
      // const show = promiseSource.subscribe(val => console.log(val));
      //output: 1,2,3,4,5
      // const show = arraySource.subscribe(val => console.log(val));

      //emit string as a sequence
      // const source = from('Hello World');

      //output: 'H','e','l','l','o',' ','W','o','r','l','d'
      // const show = source.subscribe(val => console.log(val));

      //create observable that emits click events
      // const source = fromEvent(document, 'click');

      // map to string with given event timestamp
      // const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
      
      //output (example): 'Event time: 7276.390000001'
      // const show = example.subscribe(val => console.log(val));

      // const source = interval (2000);
      //output: 0,1,2,3,4,5....
      // const show = source.subscribe(val => console.log(val));

      //emits an error with specified value on subscription
      const source = throwError('This is an error!');
      //output: 'Error: This is an error!'
      const show = source.subscribe({
         next: val => console.log(val),
         complete: () => console.log('Complet!'),
         error: val => console.log(`Error: ${val}`)
      });
      
      const fakeRequest$ = of().pipe(
         tap(_ => console.log('fakeRequest')),
         throwError
      );

      const iWillContinueListening$ = fromEvent(
         document.getElementById('continued') as HTMLElement, 'click'
      ).pipe(
         switchMap(_ => fakeRequest$.pipe(catchError(_ => of('keep on clicking!!!'))))
      );

      const iWillStopListening$ = fromEvent(
         document.getElementById('stopped') as HTMLElement, 'click'
      ). pipe(
         switchMap(_ => fakeRequest$),
         catchError(_ => of ('no more requests!!!'))
      );

      iWillContinueListening$.subscribe(console.log);
      iWillStopListening$.subscribe(console.log);
      
      const inter = interval(1000);
      const examp = inter.pipe(
         mergeMap(val => {
            if(val > 5) {
               return throwError('Error!');
            }
            return of (val);
         }),
         retry(2)
      ) ;

      const sub = examp.subscribe({
         next: val => console.log(val),
         error: val => console.log(`${val}: Retried 2 times then quit!`)
      });

   } 
}