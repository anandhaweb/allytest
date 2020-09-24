import {Component, OnInit, ElementRef, Input} from '@angular/core';

import { Store } from "@ngrx/store";
import * as $ from 'jquery';

@Component({
    selector: 'app-throbber',
    templateUrl: 'throbber.component.html',
    styleUrls: ['throbber.component.scss']
})
export class ThrobberComponent implements OnInit {
    @Input() overlay;
    @Input() background;
    public settings = {};

    constructor(public ele: ElementRef, public store: Store<{}>) {
       
    }

    ngOnInit() {
        $(this.ele.nativeElement)
            .parent()
            .css({
                position: $(this.ele.nativeElement).parent().css("position") == "static" && "relative"
            })
            .find(".throbber")
            .css({
                height: $(this.ele.nativeElement).parent().outerHeight(),
                width: $(this.ele.nativeElement).parent().outerWidth()
            });
    }

}
