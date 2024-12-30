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
                    <a href="index.html" data-type="index-link">nestjs-blog documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-35daaccf847b848150d578b6aaedd66527296580d3fc47b7df38466bf7872bf5125e8f9b84e6ea8da2614a3bb3d25685d196b5a7c3359c8546bf01896225945c"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-35daaccf847b848150d578b6aaedd66527296580d3fc47b7df38466bf7872bf5125e8f9b84e6ea8da2614a3bb3d25685d196b5a7c3359c8546bf01896225945c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-35daaccf847b848150d578b6aaedd66527296580d3fc47b7df38466bf7872bf5125e8f9b84e6ea8da2614a3bb3d25685d196b5a7c3359c8546bf01896225945c"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-35daaccf847b848150d578b6aaedd66527296580d3fc47b7df38466bf7872bf5125e8f9b84e6ea8da2614a3bb3d25685d196b5a7c3359c8546bf01896225945c"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-35daaccf847b848150d578b6aaedd66527296580d3fc47b7df38466bf7872bf5125e8f9b84e6ea8da2614a3bb3d25685d196b5a7c3359c8546bf01896225945c"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-35daaccf847b848150d578b6aaedd66527296580d3fc47b7df38466bf7872bf5125e8f9b84e6ea8da2614a3bb3d25685d196b5a7c3359c8546bf01896225945c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-35daaccf847b848150d578b6aaedd66527296580d3fc47b7df38466bf7872bf5125e8f9b84e6ea8da2614a3bb3d25685d196b5a7c3359c8546bf01896225945c"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-35daaccf847b848150d578b6aaedd66527296580d3fc47b7df38466bf7872bf5125e8f9b84e6ea8da2614a3bb3d25685d196b5a7c3359c8546bf01896225945c"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-7144e7044950b202a531720049310b2ee80aa533fe231ae6e95355236a12f2b2baf75edfdfe37caf99b96dcb2b7ae00cd9e7ffe3c528ca8d932d88ae67c99326"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-7144e7044950b202a531720049310b2ee80aa533fe231ae6e95355236a12f2b2baf75edfdfe37caf99b96dcb2b7ae00cd9e7ffe3c528ca8d932d88ae67c99326"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-7144e7044950b202a531720049310b2ee80aa533fe231ae6e95355236a12f2b2baf75edfdfe37caf99b96dcb2b7ae00cd9e7ffe3c528ca8d932d88ae67c99326"' :
                                            'id="xs-controllers-links-module-PostsModule-7144e7044950b202a531720049310b2ee80aa533fe231ae6e95355236a12f2b2baf75edfdfe37caf99b96dcb2b7ae00cd9e7ffe3c528ca8d932d88ae67c99326"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-7144e7044950b202a531720049310b2ee80aa533fe231ae6e95355236a12f2b2baf75edfdfe37caf99b96dcb2b7ae00cd9e7ffe3c528ca8d932d88ae67c99326"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-7144e7044950b202a531720049310b2ee80aa533fe231ae6e95355236a12f2b2baf75edfdfe37caf99b96dcb2b7ae00cd9e7ffe3c528ca8d932d88ae67c99326"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-7144e7044950b202a531720049310b2ee80aa533fe231ae6e95355236a12f2b2baf75edfdfe37caf99b96dcb2b7ae00cd9e7ffe3c528ca8d932d88ae67c99326"' :
                                        'id="xs-injectables-links-module-PostsModule-7144e7044950b202a531720049310b2ee80aa533fe231ae6e95355236a12f2b2baf75edfdfe37caf99b96dcb2b7ae00cd9e7ffe3c528ca8d932d88ae67c99326"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-c6ca0cce96d79701c11c9409c5e72c23df4622a2ad68bd81d6e432b2edc2150e73da29c74e2a895edc6e2118c97ae5d9cef333c4ffa0f6117fab76a517e23d57"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-c6ca0cce96d79701c11c9409c5e72c23df4622a2ad68bd81d6e432b2edc2150e73da29c74e2a895edc6e2118c97ae5d9cef333c4ffa0f6117fab76a517e23d57"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-c6ca0cce96d79701c11c9409c5e72c23df4622a2ad68bd81d6e432b2edc2150e73da29c74e2a895edc6e2118c97ae5d9cef333c4ffa0f6117fab76a517e23d57"' :
                                            'id="xs-controllers-links-module-TagsModule-c6ca0cce96d79701c11c9409c5e72c23df4622a2ad68bd81d6e432b2edc2150e73da29c74e2a895edc6e2118c97ae5d9cef333c4ffa0f6117fab76a517e23d57"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-9ecc87769ce2bb7d913a3d217301dbd8cc75e6ae49d3da71ba1b901ee70e1760e1a57ff4fd98f419f32adbdb1197be0a21f6de5ff66b592937bc779f28bf5b7c"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-9ecc87769ce2bb7d913a3d217301dbd8cc75e6ae49d3da71ba1b901ee70e1760e1a57ff4fd98f419f32adbdb1197be0a21f6de5ff66b592937bc779f28bf5b7c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-9ecc87769ce2bb7d913a3d217301dbd8cc75e6ae49d3da71ba1b901ee70e1760e1a57ff4fd98f419f32adbdb1197be0a21f6de5ff66b592937bc779f28bf5b7c"' :
                                            'id="xs-controllers-links-module-UsersModule-9ecc87769ce2bb7d913a3d217301dbd8cc75e6ae49d3da71ba1b901ee70e1760e1a57ff4fd98f419f32adbdb1197be0a21f6de5ff66b592937bc779f28bf5b7c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-9ecc87769ce2bb7d913a3d217301dbd8cc75e6ae49d3da71ba1b901ee70e1760e1a57ff4fd98f419f32adbdb1197be0a21f6de5ff66b592937bc779f28bf5b7c"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-9ecc87769ce2bb7d913a3d217301dbd8cc75e6ae49d3da71ba1b901ee70e1760e1a57ff4fd98f419f32adbdb1197be0a21f6de5ff66b592937bc779f28bf5b7c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-9ecc87769ce2bb7d913a3d217301dbd8cc75e6ae49d3da71ba1b901ee70e1760e1a57ff4fd98f419f32adbdb1197be0a21f6de5ff66b592937bc779f28bf5b7c"' :
                                        'id="xs-injectables-links-module-UsersModule-9ecc87769ce2bb7d913a3d217301dbd8cc75e6ae49d3da71ba1b901ee70e1760e1a57ff4fd98f419f32adbdb1197be0a21f6de5ff66b592937bc779f28bf5b7c"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProstMetaOptionsDto.html" data-type="entity-link" >CreateProstMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});