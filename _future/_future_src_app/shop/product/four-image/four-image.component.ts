import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../shared/product.model';
import {ProductService} from '../../../../_future_src_app_services/product.service';
import {SizeModalComponent} from '../../../../_future_src_app_shared/components/modal/size-modal/size-modal.component';

@Component({
    selector: 'app-four-image',
    templateUrl: './four-image.component.html',
    styleUrls: ['./four-image.component.scss']
})
export class FourImageComponent implements OnInit {

    public product: Product = {};
    public counter: number = 1;
    public activeSlide: any = 0;
    public selectedSize: any;

    @ViewChild("sizeChart") SizeChart: SizeModalComponent;

    constructor(private route: ActivatedRoute, private router: Router,
                public productService: ProductService) {
        this.route.data.subscribe(response => this.product = response.data);
    }

    ngOnInit(): void {
    }

    // Get Product Color
    Color(variants) {
        const uniqColor = [];
        for (let i = 0; i < Object.keys(variants).length; i++) {
            if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
                uniqColor.push(variants[i].color)
            }
        }
        return uniqColor
    }

    // Get Product Size
    Size(variants) {
        const uniqSize = [];
        for (let i = 0; i < Object.keys(variants).length; i++) {
            if (uniqSize.indexOf(variants[i].size) === -1 && variants[i].size) {
                uniqSize.push(variants[i].size)
            }
        }
        return uniqSize
    }

    selectSize(size) {
        this.selectedSize = size;
    }

    // Increament
    increment() {
        this.counter++;
    }

    // Decrement
    decrement() {
        if (this.counter > 1) this.counter--;
    }

    // Add to cart
    async addToCart(product: any) {
        product.quantity = this.counter || 1;
        const status = await this.productService.addToCart(product);
        if (status)
            this.router.navigate(['/shop/cart']);
    }

    // Buy Now
    async buyNow(product: any) {
        product.quantity = this.counter || 1;
        const status = await this.productService.addToCart(product);
        if (status)
            this.router.navigate(['/shop/checkout']);
    }

    // Add to Wishlist
    addToWishlist(product: any) {
        this.productService.addToWishlist(product);
    }

}