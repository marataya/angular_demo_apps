import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

function writeVal(val: string, ...extras: string[]) {
  console.log(`Value: ${val} Extras: ${extras}} typeof: ${typeof(extras)}`);
  
}

writeVal("London", "asdfasdf")
writeVal("Aha")

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));


