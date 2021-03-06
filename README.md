# Ionic v3 to v4

A demo project to display the migration from Ionic v3 to v4

## Components

This demo app contains a couple of components of **ionic-angular** which are going to be migrated respectively

* Navbar
* Button
* Action sheet
* Navigation

And an example of a **ionic-native** wrapper which will be migrated too, respectively

* Camera wrapper 

## Branchs

* master: Ionic v3
* ionic-v4: Ionic v4

## Ionic v4 CLI installation

To create the Ionic v4 project structure, I used the Ionic cli v4. To install it not globally, you could proceed like following

    mkdir /pathtomyalternatecli/
    cd /pathtomyalternatecli/
    npm install ionic@rc

then edit `start.js` 

    cd node_modules/ionic/dist/commands/
    vim start.js

search `STARTER_TEMPLATES` and edit the return value in order to not filter according the global variable respectively

     return STARTER_TEMPLATES;

we are all set, we could now create a Ionic v4 angular project using your 2nd cli
                
     cd /somewhereelse/
     /pathtomyalternatecli/node_modules/ionic/bin/ionic start 

## Resources

### Breaking changes

[Ionic v4 - List of breaking changes](https://github.com/ionic-team/ionic/blob/master/angular/BREAKING.md)

### Migration

[Ionic v4-migration-tslint](https://github.com/ionic-team/v4-migration-tslint)

### Router

[Josh Morony's blog post about Ionic v4 routing](https://www.joshmorony.com/using-angular-routing-with-ionic-4/)

or

[Josh Morony's blog post about converting a Push/Pop routing](https://www.joshmorony.com/converting-ionic-3-push-pop-navigation-to-angular-routing-in-ionic-4/)

### Tooling

[Ionic cli - Tooling introduction](https://github.com/ionic-team/ionic-cli/issues/3019)

### Ionic native

[Ionic Native - Blog post v5 beta](https://blog.ionicframework.com/help-test-ionic-native-5/)

### Plugins

[cordova-plugin-ionic-webview - Beta for Ionic v4 compatibility](https://github.com/ionic-team/cordova-plugin-ionic-webview) 

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)
