import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
let hat = {
  name: "Hat",
  price: 100
};

let boots = {
  name: "Boots",
  price: 100,
  category: "Snow Gear"
}

function printDetails(product : { name: string, price: number, 
      category?: string}) {
  if (product.category != undefined) {
      console.log(`Name: ${product.name}\nPrice: ${product.price}\n` 
          + `Category: ${product.category}`);    
  } else {
      console.log(`Name: ${product.name}, Price: ${product.price}`);    
  }
}

printDetails(hat);
printDetails(boots);

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));


