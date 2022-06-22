'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">xbox_server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' : 'data-target="#xs-controllers-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' :
                                            'id="xs-controllers-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' : 'data-target="#xs-injectables-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' :
                                        'id="xs-injectables-links-module-AppModule-d04d5844cf920c948f0261ff5a77ad175e63a6d82167bcf1ff87ee222c4995355806feafa7e21f8d945323949ecf514b9af5925d5075c84e9ed001c10e835400"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-77da71595d3d1edf8178ad679ccafb64fbe895438d6af634c7c7a6cb1b18dd5cacc8ac0c5919ee5551117794944e1ce75633da2e3814735d1278435e6faa6e9a"' : 'data-target="#xs-controllers-links-module-AuthModule-77da71595d3d1edf8178ad679ccafb64fbe895438d6af634c7c7a6cb1b18dd5cacc8ac0c5919ee5551117794944e1ce75633da2e3814735d1278435e6faa6e9a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-77da71595d3d1edf8178ad679ccafb64fbe895438d6af634c7c7a6cb1b18dd5cacc8ac0c5919ee5551117794944e1ce75633da2e3814735d1278435e6faa6e9a"' :
                                            'id="xs-controllers-links-module-AuthModule-77da71595d3d1edf8178ad679ccafb64fbe895438d6af634c7c7a6cb1b18dd5cacc8ac0c5919ee5551117794944e1ce75633da2e3814735d1278435e6faa6e9a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-77da71595d3d1edf8178ad679ccafb64fbe895438d6af634c7c7a6cb1b18dd5cacc8ac0c5919ee5551117794944e1ce75633da2e3814735d1278435e6faa6e9a"' : 'data-target="#xs-injectables-links-module-AuthModule-77da71595d3d1edf8178ad679ccafb64fbe895438d6af634c7c7a6cb1b18dd5cacc8ac0c5919ee5551117794944e1ce75633da2e3814735d1278435e6faa6e9a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-77da71595d3d1edf8178ad679ccafb64fbe895438d6af634c7c7a6cb1b18dd5cacc8ac0c5919ee5551117794944e1ce75633da2e3814735d1278435e6faa6e9a"' :
                                        'id="xs-injectables-links-module-AuthModule-77da71595d3d1edf8178ad679ccafb64fbe895438d6af634c7c7a6cb1b18dd5cacc8ac0c5919ee5551117794944e1ce75633da2e3814735d1278435e6faa6e9a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0dc7e5b149cf8b5a5488c79ac1b02d002864cbb810eb1d75c047211818a2c80512b0c902dfee2f10eaaf4a3b5c9f2aa4f4edbf46dbeb9378752bed005623036c"' : 'data-target="#xs-injectables-links-module-PrismaModule-0dc7e5b149cf8b5a5488c79ac1b02d002864cbb810eb1d75c047211818a2c80512b0c902dfee2f10eaaf4a3b5c9f2aa4f4edbf46dbeb9378752bed005623036c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0dc7e5b149cf8b5a5488c79ac1b02d002864cbb810eb1d75c047211818a2c80512b0c902dfee2f10eaaf4a3b5c9f2aa4f4edbf46dbeb9378752bed005623036c"' :
                                        'id="xs-injectables-links-module-PrismaModule-0dc7e5b149cf8b5a5488c79ac1b02d002864cbb810eb1d75c047211818a2c80512b0c902dfee2f10eaaf4a3b5c9f2aa4f4edbf46dbeb9378752bed005623036c"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-7ccffd4f9267fb9c3b094cd5384bfd1d94d1d5264e767260a2d9b08a3c4b2045defb242af285e9685c79cda82e9301a09351aeb5339cf887200917684305e168"' : 'data-target="#xs-controllers-links-module-UsersModule-7ccffd4f9267fb9c3b094cd5384bfd1d94d1d5264e767260a2d9b08a3c4b2045defb242af285e9685c79cda82e9301a09351aeb5339cf887200917684305e168"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-7ccffd4f9267fb9c3b094cd5384bfd1d94d1d5264e767260a2d9b08a3c4b2045defb242af285e9685c79cda82e9301a09351aeb5339cf887200917684305e168"' :
                                            'id="xs-controllers-links-module-UsersModule-7ccffd4f9267fb9c3b094cd5384bfd1d94d1d5264e767260a2d9b08a3c4b2045defb242af285e9685c79cda82e9301a09351aeb5339cf887200917684305e168"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-7ccffd4f9267fb9c3b094cd5384bfd1d94d1d5264e767260a2d9b08a3c4b2045defb242af285e9685c79cda82e9301a09351aeb5339cf887200917684305e168"' : 'data-target="#xs-injectables-links-module-UsersModule-7ccffd4f9267fb9c3b094cd5384bfd1d94d1d5264e767260a2d9b08a3c4b2045defb242af285e9685c79cda82e9301a09351aeb5339cf887200917684305e168"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-7ccffd4f9267fb9c3b094cd5384bfd1d94d1d5264e767260a2d9b08a3c4b2045defb242af285e9685c79cda82e9301a09351aeb5339cf887200917684305e168"' :
                                        'id="xs-injectables-links-module-UsersModule-7ccffd4f9267fb9c3b094cd5384bfd1d94d1d5264e767260a2d9b08a3c4b2045defb242af285e9685c79cda82e9301a09351aeb5339cf887200917684305e168"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});