import { createBasicClass } from '@factories/index';

export const carouselData = [
  {
    title: 'Basic Carousel',
    tag: `<assaf-carousel [data]="images" [numVisible]="3" [numScroll]="3">
    <ng-template let-item>
    <section class="m-6">
        <figure class="px-2 py-4">
            <img
                src="assets/image/{{ item.image }}"
                [alt]="item.name"
                class="rounded-md mb-2"
            />
            <article class="space-y-1">
                <h4>{{ item.name }}</h4>
                <h5 class="text-yellow-400">{{ item.price }}</h5>
                <h6 [class]="item.inventoryStatus.toLowerCase()">{{item.inventoryStatus}}</h6>
            </article>
        </figure>
        <section class="text-center space-x-8">
            <assaf-button severity="success" btnIcon="pi-search"></assaf-button>
            <assaf-button severity="warning" btnIcon="pi-star-fill"></assaf-button>
            <assaf-button severity="danger" btnIcon=" pi-cog"></assaf-button>
        </section>
    </section
    ></ng-template>
</assaf-carousel>`,
    ts: createBasicClass(
      [],
      `<span><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; images</span>:<span style="color: rgb(65, 168, 95);"> any[] </span>= [<br>&nbsp; &nbsp; {<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">id</span>: 1,<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">name</span>: &apos;Galleria&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">image</span>: &apos;galleria.jpg&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">inventoryStatus</span>: &apos;Racing Galleria&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">price</span>: 800<br>&nbsp; &nbsp; }<br><span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; //other objects<br>&nbsp; &nbsp; //.<br>&nbsp; &nbsp; //.</span><br>&nbsp; &nbsp; ]</span>`
    ),
  },
  {
    title: 'Responsive Carousel',
    tag: `<assaf-carousel [data]="images" [responsiveOptions]="responsiveOptions" [numVisible]="6" [numScroll]="2">
    <ng-template let-item>
        <section class="m-6">
            <figure class="px-2 py-4">
                <img
                    src="assets/image/{{ item.image }}"
                    [alt]="item.name"
                    class="rounded-md mb-2"
                />
                <article class="space-y-1">
                    <h4>{{ item.name }}</h4>
                    <h5 class="text-yellow-400">{{ item.price }}</h5>
                    <h6 [class]="item.inventoryStatus.toLowerCase()">{{item.inventoryStatus}}</h6>
                </article>
            </figure>
            <section class="text-center space-x-8">
                <assaf-button severity="success" btnIcon="pi-search"></assaf-button>
                <assaf-button
                severity="warning"
                btnIcon="pi-star-fill"
                ></assaf-button>
                <assaf-button severity="danger" btnIcon=" pi-cog"></assaf-button>
            </section>
        </section
    ></ng-template>
</assaf-carousel>`,
    ts: createBasicClass(
      [
        {
          import: 'CarouselResponsiveOption',
          from: '@assaf-garage/assaf-core-library/components/@carousel',
        },
      ],
      `<p><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; images</span>:<span style="color: rgb(65, 168, 95);"> any[] </span>= [<br>&nbsp; &nbsp; {<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">id</span>: 1,<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">name</span>: &apos;Galleria&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">image</span>: &apos;galleria.jpg&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">inventoryStatus</span>: &apos;Racing Galleria&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">price</span>: 800<br>&nbsp; &nbsp; }<br><span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; //other objects<br>&nbsp; &nbsp; //.<br>&nbsp; &nbsp; //.</span><br>&nbsp; &nbsp; ]</p>
    <span><span style="color: #169179;">&nbsp; &nbsp; responsiveOptions</span> : <span style="color: #169179;">Array &lt;</span><span style="color: rgb(85, 57, 130);">CarouselResponsiveOption</span><span style="color: #169179;">&gt;</span> =&nbsp;<br>&nbsp; &nbsp; [&nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">breakpoint</span>: &apos;1366px&apos;,<span style="color:rgb(61, 142, 185);">numVisible</span>: 3 ,<span style="color:rgb(61, 142, 185);">numScroll</span>: 1 },&nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">breakpoint</span>: &apos;1120px&apos;,<span style="color:rgb(61, 142, 185);">numVisible</span>: 2 ,<span style="color:rgb(61, 142, 185);">numScroll</span>: 1 },&nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">breakpoint</span>: &apos;690px&apos;,<span style="color:rgb(61, 142, 185);">numVisible</span>: 1 ,<span style="color:rgb(61, 142, 185);">numScroll</span>: 1 },&nbsp;<br>&nbsp; &nbsp; ]</span>`
    ),
  },
  {
    title: 'Autoplay Carousel',
    tag: `<assaf-carousel [data]="images" [autoplayInterval]="2000" [circular]="true" [showIndicators]="true">
    <ng-template let-item>
        <section class="m-6">
            <figure class="px-2 py-4">
                <img
                src="assets/image/{{ item.image }}"
                [alt]="item.name"
                class="rounded-md mb-2"
                />
                <article class="space-y-1">
                    <h4>{{ item.name }}</h4>
                    <h5 class="text-yellow-400">{{ item.price }}</h5>
                    <h6 [class]="item.inventoryStatus.toLowerCase()">{{
                    item.inventoryStatus
                    }}</h6>
                </article>
            </figure>
            <section class="text-center space-x-8">
            <assaf-button severity="success" btnIcon="pi-search"></assaf-button>
            <assaf-button
                severity="warning"
                btnIcon="pi-star-fill"
            ></assaf-button>
            <assaf-button severity="danger" btnIcon=" pi-cog"></assaf-button>
            </section>
        </section
    ></ng-template>
</assaf-carousel>`,
    ts: createBasicClass(
      [],
      `<span><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; images</span>:<span style="color: rgb(65, 168, 95);"> any[] </span>= [<br>&nbsp; &nbsp; {<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">id</span>: 1,<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">name</span>: &apos;Galleria&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">image</span>: &apos;galleria.jpg&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">inventoryStatus</span>: &apos;Racing Galleria&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">price</span>: 800<br>&nbsp; &nbsp; }<br><span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; //other objects<br>&nbsp; &nbsp; //.<br>&nbsp; &nbsp; //.</span><br>&nbsp; &nbsp; ]</span>`
    ),
  },
  {
    title: 'Vertical Scrolling Carousel',
    tag: `<assaf-carousel [data]="images"  
[numScroll]="1" [numVisible]="1" 
orientation="vertical"
verticalViewPortHeight="410px"  
    [circular]="true">
      <ng-template let-item>
        <section class=" lg:w-1/2 mx-auto ">
          <figure class="lg:w-3/5 lg:h-3/4 mx-auto">
            <img
              src="assets/image/{{ item.image }}"
              [alt]="item.name"
              class="rounded-md w-full"
            />
            <article>
                <h4>{{ item.name }}</h4>
                <h5 class="text-yellow-400">{{ item.price }}</h5>
                <h6 [class]="item.inventoryStatus.toLowerCase()">{{
                  item.inventoryStatus
                }}</h6>
            </article>
          </figure>
        <section class="text-center space-x-8">
          <assaf-button severity="success" btnIcon="pi-search"></assaf-button>
          <assaf-button
            severity="warning"
            btnIcon="pi-star-fill"
          ></assaf-button>
          <assaf-button severity="danger" btnIcon=" pi-cog"></assaf-button>
        </section>
        </section
      ></ng-template>
</assaf-carousel>`,
    ts: createBasicClass(
      [],
      `<span><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; images</span>:<span style="color: rgb(65, 168, 95);"> any[] </span>= [<br>&nbsp; &nbsp; {<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">id</span>: 1,<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">name</span>: &apos;Galleria&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">image</span>: &apos;galleria.jpg&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(41, 105, 176);">inventoryStatus</span>: &apos;Racing Galleria&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">price</span>: 800<br>&nbsp; &nbsp; }<br><span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; //other objects<br>&nbsp; &nbsp; //.<br>&nbsp; &nbsp; //.</span><br>&nbsp; &nbsp; ]</span>`
    ),
  },
];
