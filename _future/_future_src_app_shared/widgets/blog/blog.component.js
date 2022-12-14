"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogComponent = void 0;
var core_1 = require("@angular/core");
var slider_1 = require("../../data/slider");
var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        this.blogs = [];
        this.BlogSliderConfig = slider_1.BlogSlider;
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        (0, core_1.Input)()
    ], BlogComponent.prototype, "blogs", void 0);
    BlogComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-blog',
            templateUrl: './blog.component.html',
            styleUrls: ['./blog.component.scss']
        })
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
