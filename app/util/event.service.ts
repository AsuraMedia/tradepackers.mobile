import { Injectable } from '@angular/core'
import * as Rx from 'rxjs/Rx'


@Injectable()
export class EventsService {

    public events: Rx.Observable<{}>
    public listeners: Object = {}
    public eventsSubject: Rx.Subject<{}>

    constructor() {

        this.eventsSubject = new Rx.Subject();

        this.events = Rx.Observable.from(this.eventsSubject);

        this.events.subscribe(
            ( param: any ) => {
                if (this.listeners[param.name]) {
                    for (let listener of this.listeners[param.name]) {
                        listener(...param.args);
                    }
                }
            });
    }

    on ( name, listener ) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }

        this.listeners[name].push(listener);
    }

    broadcast ( name, ...args ) {
        this.eventsSubject.next({
            name,
            args
        });
    }
}