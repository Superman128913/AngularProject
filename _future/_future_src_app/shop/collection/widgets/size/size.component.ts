import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../product/shared/product.model';

@Component({
    selector: 'app-size',
    templateUrl: './size.component.html',
    styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

    @Input() products: Product[] = [];
    @Input() size: any[] = [];

    @Output() sizeFilter: EventEmitter<any> = new EventEmitter<any>();

    public collapse: boolean = true;

    constructor() {
    }

    get filterbysize() {
        const uniqueSize = [];
        this.products.filter((product) => {
            product.variants.filter((variant) => {
                if (variant.size) {
                    const index = uniqueSize.indexOf(variant.size);
                    if (index === -1) uniqueSize.push(variant.size)
                }
            })
        });
        return uniqueSize
    }

    ngOnInit(): void {
    }

    appliedFilter(event) {
        let index = this.size.indexOf(event.target.value);  // checked and unchecked value
        if (event.target.checked)
            this.size.push(event.target.value); // push in array cheked value
        else
            this.size.splice(index, 1);  // removed in array unchecked value

        let size = this.size.length ? {size: this.size.join(",")} : {size: null};
        this.sizeFilter.emit(size);
    }

    // check if the item are selected
    checked(item) {
        if (this.size.indexOf(item) != -1) {
            return true;
        }
    }

}
