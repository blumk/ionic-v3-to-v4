# Ionic v3 to v4

A demo project to display the migration from Ionic v3 to v4

## Components

This demo app/repo contains only a couple of components which gonna be migrated respectively

* Side menu
* Navbar
* Button
* Action sheet
* Navigation

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

### Tooling

[Ionic cli - Tooling introduction](https://github.com/ionic-team/ionic-cli/issues/3019)

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)
