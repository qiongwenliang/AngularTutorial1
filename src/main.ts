import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //it's like the program.cs in WebApi, application start from the main method in program.cs, and here the main.ts is the same. it's going to bootstrap, means initially starting.
  //there's bootstrap function, and it's gonna tell which module it's going to bootstrap. You can change any module to startup module here.  