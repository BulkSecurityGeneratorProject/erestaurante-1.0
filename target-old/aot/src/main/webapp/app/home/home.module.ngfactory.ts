/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../../../src/main/webapp/app/home/home.module';
import * as i2 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory';
import * as i3 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory';
import * as i4 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory';
import * as i5 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory';
import * as i6 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory';
import * as i7 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory';
import * as i8 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory';
import * as i9 from '../shared/login/login.component.ngfactory';
import * as i10 from './home.component.ngfactory';
import * as i11 from '@angular/common';
import * as i12 from '@angular/forms';
import * as i13 from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import * as i14 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as i15 from '@ng-bootstrap/ng-bootstrap/alert/alert-config';
import * as i16 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';
import * as i17 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config';
import * as i18 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config';
import * as i19 from '@ng-bootstrap/ng-bootstrap/accordion/accordion-config';
import * as i20 from '@ng-bootstrap/ng-bootstrap/carousel/carousel-config';
import * as i21 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import * as i22 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';
import * as i23 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import * as i24 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config';
import * as i25 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as i26 from '@ng-bootstrap/ng-bootstrap/pagination/pagination-config';
import * as i27 from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import * as i28 from '@ng-bootstrap/ng-bootstrap/rating/rating-config';
import * as i29 from '@ng-bootstrap/ng-bootstrap/tabset/tabset-config';
import * as i30 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config';
import * as i31 from '@angular/http';
import * as i32 from '@ngx-translate/core/src/translate.loader';
import * as i33 from 'ng-jhipster/index';
import * as i34 from '@ngx-translate/core/src/translate.parser';
import * as i35 from 'ng-jhipster/src/config.service';
import * as i36 from 'ng-jhipster/src/config';
import * as i37 from '@ngx-translate/core/src/missing-translation-handler';
import * as i38 from '@ngx-translate/core/src/translate.store';
import * as i39 from '@ngx-translate/core/src/translate.service';
import * as i40 from 'ngx-infinite-scroll';
import * as i41 from 'ngx-cookie/src/cookie-options-provider';
import * as i42 from 'ng-jhipster/src/service/data-util.service';
import * as i43 from 'ng-jhipster/src/service/date-util.service';
import * as i44 from 'ng-jhipster/src/service/event-manager.service';
import * as i45 from 'ng-jhipster/src/service/parse-links.service';
import * as i46 from 'ng-jhipster/src/service/pagination-util.service';
import * as i47 from 'ng-jhipster/src/service/base64.service';
import * as i48 from 'ng-jhipster/src/service/alert.service';
import * as i49 from 'ng-jhipster/src/language/language.service';
import * as i50 from 'ngx-cookie/src/cookie.service';
import * as i51 from 'ngx-cookie/src/cookie.factory';
import * as i52 from '@angular/platform-browser';
import * as i53 from '../../../../../../../src/main/webapp/app/shared/language/language.helper';
import * as i54 from '@angular/router';
import * as i55 from '../../../../../../../src/main/webapp/app/shared/tracker/window.service';
import * as i56 from '../../../../../../../src/main/webapp/app/shared/auth/account.service';
import * as i57 from '../../../../../../../src/main/webapp/app/shared/auth/auth-jwt.service';
import * as i58 from 'ng2-webstorage/dist/services/localStorage';
import * as i59 from 'ng2-webstorage/dist/services/sessionStorage';
import * as i60 from '../../../../../../../src/main/webapp/app/shared/auth/csrf.service';
import * as i61 from '../../../../../../../src/main/webapp/app/shared/tracker/tracker.service';
import * as i62 from '../../../../../../../src/main/webapp/app/shared/auth/principal.service';
import * as i63 from '../../../../../../../src/main/webapp/app/entities/notify.service';
import * as i64 from '../../../../../../../src/main/webapp/app/shared/login/login.service';
import * as i65 from '../../../../../../../src/main/webapp/app/shared/login/autologin.service';
import * as i66 from '../../../../../../../src/main/webapp/app/shared/login/login-modal.service';
import * as i67 from '../../../../../../../src/main/webapp/app/shared/auth/state-storage.service';
import * as i68 from '../../../../../../../src/main/webapp/app/shared/user/user.service';
import * as i69 from '../../../../../../../src/main/webapp/app/shared/utils/variaveis.service';
import * as i70 from '../../../../../../../src/main/webapp/app/entities/mesa/mesa.service';
import * as i71 from '../../../../../../../src/main/webapp/app/entities/comanda/comanda.service';
import * as i72 from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import * as i73 from '@ng-bootstrap/ng-bootstrap/buttons/buttons.module';
import * as i74 from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import * as i75 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module';
import * as i76 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import * as i77 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import * as i78 from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';
import * as i79 from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import * as i80 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import * as i81 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import * as i82 from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import * as i83 from '@ng-bootstrap/ng-bootstrap/pagination/pagination.module';
import * as i84 from '@ng-bootstrap/ng-bootstrap/popover/popover.module';
import * as i85 from '@ng-bootstrap/ng-bootstrap/rating/rating.module';
import * as i86 from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import * as i87 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module';
import * as i88 from '@ng-bootstrap/ng-bootstrap/index';
import * as i89 from '@ngx-translate/core/index';
import * as i90 from 'ngx-cookie/index';
import * as i91 from '../../../../../../../src/main/webapp/app/shared/shared-libs.module';
import * as i92 from '../../../../../../../src/main/webapp/app/shared/shared-common.module';
import * as i93 from '../../../../../../../src/main/webapp/app/shared/shared.module';
import * as i94 from '../../../../../../../src/main/webapp/app/home/home.component';
export const ERestauranteHomeModuleNgFactory:i0.NgModuleFactory<i1.ERestauranteHomeModule> = i0.ɵcmf(i1.ERestauranteHomeModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.NgbAlertNgFactory,i3.NgbTooltipWindowNgFactory,i4.NgbTypeaheadWindowNgFactory,
              i5.NgbDatepickerNgFactory,i6.NgbModalBackdropNgFactory,i7.NgbModalWindowNgFactory,
              i8.NgbPopoverWindowNgFactory,i9.JhiLoginModalComponentNgFactory,i10.HomeComponentNgFactory]],
              [3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,i11.NgLocalization,
          i11.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,i12.ɵi,i12.ɵi,([] as any[])),
          i0.ɵmpd(4608,i13.NgbModalStack,i13.NgbModalStack,[i0.ApplicationRef,i0.Injector,
              i0.ComponentFactoryResolver]),i0.ɵmpd(4608,i14.NgbModal,i14.NgbModal,
              [i0.ComponentFactoryResolver,i0.Injector,i13.NgbModalStack]),i0.ɵmpd(4608,
              i15.NgbAlertConfig,i15.NgbAlertConfig,([] as any[])),i0.ɵmpd(4608,i16.NgbProgressbarConfig,
              i16.NgbProgressbarConfig,([] as any[])),i0.ɵmpd(4608,i17.NgbTooltipConfig,
              i17.NgbTooltipConfig,([] as any[])),i0.ɵmpd(4608,i18.NgbTypeaheadConfig,
              i18.NgbTypeaheadConfig,([] as any[])),i0.ɵmpd(4608,i19.NgbAccordionConfig,
              i19.NgbAccordionConfig,([] as any[])),i0.ɵmpd(4608,i20.NgbCarouselConfig,
              i20.NgbCarouselConfig,([] as any[])),i0.ɵmpd(4608,i21.NgbCalendar,i21.NgbCalendarGregorian,
              ([] as any[])),i0.ɵmpd(4608,i22.NgbDatepickerI18n,i22.NgbDatepickerI18nDefault,
              ([] as any[])),i0.ɵmpd(4608,i23.NgbDateParserFormatter,i23.NgbDateISOParserFormatter,
              ([] as any[])),i0.ɵmpd(4608,i24.NgbDatepickerConfig,i24.NgbDatepickerConfig,
              ([] as any[])),i0.ɵmpd(4608,i25.NgbDropdownConfig,i25.NgbDropdownConfig,
              ([] as any[])),i0.ɵmpd(4608,i26.NgbPaginationConfig,i26.NgbPaginationConfig,
              ([] as any[])),i0.ɵmpd(4608,i27.NgbPopoverConfig,i27.NgbPopoverConfig,
              ([] as any[])),i0.ɵmpd(4608,i28.NgbRatingConfig,i28.NgbRatingConfig,
              ([] as any[])),i0.ɵmpd(4608,i29.NgbTabsetConfig,i29.NgbTabsetConfig,
              ([] as any[])),i0.ɵmpd(4608,i30.NgbTimepickerConfig,i30.NgbTimepickerConfig,
              ([] as any[])),i0.ɵmpd(4608,i31.BrowserXhr,i31.BrowserXhr,([] as any[])),
          i0.ɵmpd(4608,i31.ResponseOptions,i31.BaseResponseOptions,([] as any[])),
          i0.ɵmpd(5120,i31.XSRFStrategy,i31.ɵb,([] as any[])),i0.ɵmpd(4608,i31.XHRBackend,
              i31.XHRBackend,[i31.BrowserXhr,i31.ResponseOptions,i31.XSRFStrategy]),
          i0.ɵmpd(4608,i31.RequestOptions,i31.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i31.Http,i31.ɵc,[i31.XHRBackend,i31.RequestOptions]),i0.ɵmpd(5120,i32.TranslateLoader,
              i33.translatePartialLoader,[i31.Http]),i0.ɵmpd(4608,i34.TranslateParser,
              i34.TranslateDefaultParser,([] as any[])),i0.ɵmpd(4608,i35.JhiConfigService,
              i35.JhiConfigService,[i36.JhiModuleConfig]),i0.ɵmpd(5120,i37.MissingTranslationHandler,
              i33.missingTranslationHandler,[i35.JhiConfigService]),i0.ɵmpd(4608,i38.TranslateStore,
              i38.TranslateStore,([] as any[])),i0.ɵmpd(4608,i39.TranslateService,
              i39.TranslateService,[i38.TranslateStore,i32.TranslateLoader,i34.TranslateParser,
                  i37.MissingTranslationHandler,i39.USE_STORE]),i0.ɵmpd(4608,i40.ɵb,
              i40.ɵb,([] as any[])),i0.ɵmpd(4608,i40.ɵc,i40.ɵc,([] as any[])),i0.ɵmpd(4608,
              i40.ɵd,i40.ɵd,([] as any[])),i0.ɵmpd(4608,i41.CookieOptionsProvider,
              i41.CookieOptionsProvider,[i41.COOKIE_OPTIONS,i0.Injector]),i0.ɵmpd(4608,
              i42.JhiDataUtils,i42.JhiDataUtils,([] as any[])),i0.ɵmpd(4608,i43.JhiDateUtils,
              i43.JhiDateUtils,([] as any[])),i0.ɵmpd(4608,i44.JhiEventManager,i44.JhiEventManager,
              ([] as any[])),i0.ɵmpd(4608,i45.JhiParseLinks,i45.JhiParseLinks,([] as any[])),
          i0.ɵmpd(4608,i46.JhiPaginationUtil,i46.JhiPaginationUtil,([] as any[])),
          i0.ɵmpd(4608,i47.JhiBase64Service,i47.JhiBase64Service,([] as any[])),i0.ɵmpd(4608,
              i48.JhiAlertService,i48.JhiAlertService,[i0.Sanitizer,i35.JhiConfigService,
                  i39.TranslateService]),i0.ɵmpd(4608,i49.JhiLanguageService,i49.JhiLanguageService,
              [i39.TranslateService,i35.JhiConfigService]),i0.ɵmpd(5120,i50.CookieService,
              i51.cookieServiceFactory,[i41.CookieOptionsProvider]),i0.ɵmpd(4608,i52.Title,
              i52.Title,[i11.DOCUMENT]),i0.ɵmpd(4608,i53.JhiLanguageHelper,i53.JhiLanguageHelper,
              [i39.TranslateService,i0.RendererFactory2,i52.Title,i54.Router]),i0.ɵmpd(4608,
              i55.WindowRef,i55.WindowRef,([] as any[])),i0.ɵmpd(4608,i56.AccountService,
              i56.AccountService,[i31.Http]),i0.ɵmpd(4608,i57.AuthServerProvider,i57.AuthServerProvider,
              [i31.Http,i58.LocalStorageService,i59.SessionStorageService]),i0.ɵmpd(4608,
              i60.CSRFService,i60.CSRFService,[i50.CookieService]),i0.ɵmpd(4608,i61.JhiTrackerService,
              i61.JhiTrackerService,[i54.Router,i57.AuthServerProvider,i55.WindowRef,
                  i60.CSRFService]),i0.ɵmpd(4608,i62.Principal,i62.Principal,[i56.AccountService,
              i61.JhiTrackerService,i63.NotifyService]),i0.ɵmpd(4608,i64.LoginService,
              i64.LoginService,[i44.JhiEventManager,i49.JhiLanguageService,i62.Principal,
                  i61.JhiTrackerService,i57.AuthServerProvider]),i0.ɵmpd(4608,i65.AutologinService,
              i65.AutologinService,[i44.JhiEventManager,i64.LoginService,i54.Router,
                  i62.Principal]),i0.ɵmpd(4608,i66.LoginModalService,i66.LoginModalService,
              [i14.NgbModal]),i0.ɵmpd(4608,i67.StateStorageService,i67.StateStorageService,
              [i59.SessionStorageService]),i0.ɵmpd(4608,i68.UserService,i68.UserService,
              [i31.Http]),i0.ɵmpd(4608,i11.DatePipe,i11.DatePipe,[i0.LOCALE_ID]),i0.ɵmpd(4608,
              i69.VariaveisService,i69.VariaveisService,[i58.LocalStorageService,i70.MesaService,
                  i71.ComandaService]),i0.ɵmpd(5120,i54.ActivatedRoute,i54.ɵf,[i54.Router]),
          i0.ɵmpd(4608,i54.NoPreloading,i54.NoPreloading,([] as any[])),i0.ɵmpd(6144,
              i54.PreloadingStrategy,(null as any),[i54.NoPreloading]),i0.ɵmpd(135680,
              i54.RouterPreloader,i54.RouterPreloader,[i54.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i54.PreloadingStrategy]),i0.ɵmpd(4608,i54.PreloadAllModules,
              i54.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i0.NgProbeToken,() => {
            return [i54.ɵb()];
          },([] as any[])),i0.ɵmpd(4608,i54.ɵg,i54.ɵg,[i0.Injector]),i0.ɵmpd(5120,
              i0.APP_INITIALIZER,(p0_0:any) => {
                return [i54.ɵh(p0_0)];
              },[i54.ɵg]),i0.ɵmpd(5120,i54.ROUTER_INITIALIZER,i54.ɵi,[i54.ɵg]),i0.ɵmpd(5120,
              i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
                return [p0_0];
              },[i54.ROUTER_INITIALIZER]),i0.ɵmpd(512,i11.CommonModule,i11.CommonModule,
              ([] as any[])),i0.ɵmpd(512,i72.NgbAlertModule,i72.NgbAlertModule,([] as any[])),
          i0.ɵmpd(512,i73.NgbButtonsModule,i73.NgbButtonsModule,([] as any[])),i0.ɵmpd(512,
              i74.NgbCollapseModule,i74.NgbCollapseModule,([] as any[])),i0.ɵmpd(512,
              i75.NgbProgressbarModule,i75.NgbProgressbarModule,([] as any[])),i0.ɵmpd(512,
              i76.NgbTooltipModule,i76.NgbTooltipModule,([] as any[])),i0.ɵmpd(512,
              i77.NgbTypeaheadModule,i77.NgbTypeaheadModule,([] as any[])),i0.ɵmpd(512,
              i78.NgbAccordionModule,i78.NgbAccordionModule,([] as any[])),i0.ɵmpd(512,
              i79.NgbCarouselModule,i79.NgbCarouselModule,([] as any[])),i0.ɵmpd(512,
              i12.ɵba,i12.ɵba,([] as any[])),i0.ɵmpd(512,i12.FormsModule,i12.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i80.NgbDatepickerModule,i80.NgbDatepickerModule,
              ([] as any[])),i0.ɵmpd(512,i81.NgbDropdownModule,i81.NgbDropdownModule,
              ([] as any[])),i0.ɵmpd(512,i82.NgbModalModule,i82.NgbModalModule,([] as any[])),
          i0.ɵmpd(512,i83.NgbPaginationModule,i83.NgbPaginationModule,([] as any[])),
          i0.ɵmpd(512,i84.NgbPopoverModule,i84.NgbPopoverModule,([] as any[])),i0.ɵmpd(512,
              i85.NgbRatingModule,i85.NgbRatingModule,([] as any[])),i0.ɵmpd(512,i86.NgbTabsetModule,
              i86.NgbTabsetModule,([] as any[])),i0.ɵmpd(512,i87.NgbTimepickerModule,
              i87.NgbTimepickerModule,([] as any[])),i0.ɵmpd(512,i88.NgbRootModule,
              i88.NgbRootModule,([] as any[])),i0.ɵmpd(512,i89.TranslateModule,i89.TranslateModule,
              ([] as any[])),i0.ɵmpd(512,i31.HttpModule,i31.HttpModule,([] as any[])),
          i0.ɵmpd(512,i33.NgJhipsterModule,i33.NgJhipsterModule,([] as any[])),i0.ɵmpd(512,
              i40.InfiniteScrollModule,i40.InfiniteScrollModule,([] as any[])),i0.ɵmpd(512,
              i90.CookieModule,i90.CookieModule,([] as any[])),i0.ɵmpd(512,i88.NgbModule,
              i88.NgbModule,([] as any[])),i0.ɵmpd(512,i91.ERestauranteSharedLibsModule,
              i91.ERestauranteSharedLibsModule,([] as any[])),i0.ɵmpd(512,i92.ERestauranteSharedCommonModule,
              i92.ERestauranteSharedCommonModule,([] as any[])),i0.ɵmpd(512,i93.ERestauranteSharedModule,
              i93.ERestauranteSharedModule,([] as any[])),i0.ɵmpd(1024,i54.ɵa,i54.ɵd,
              [[3,i54.Router]]),i0.ɵmpd(512,i54.UrlSerializer,i54.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i54.ChildrenOutletContexts,i54.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i54.ROUTER_CONFIGURATION,{useHash:true},([] as any[])),
          i0.ɵmpd(1024,i11.LocationStrategy,i54.ɵc,[i11.PlatformLocation,[2,i11.APP_BASE_HREF],
              i54.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i11.Location,i11.Location,[i11.LocationStrategy]),
          i0.ɵmpd(512,i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,[i0.Compiler,
              [2,i0.SystemJsNgModuleLoaderConfig]]),i0.ɵmpd(1024,i54.ROUTES,() => {
            return [[{path:'',component:i94.HomeComponent,data:{authorities:([] as any[]),
                pageTitle:'home.title'}}]];
          },([] as any[])),i0.ɵmpd(1024,i54.Router,i54.ɵe,[i0.ApplicationRef,i54.UrlSerializer,
              i54.ChildrenOutletContexts,i11.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i54.ROUTES,i54.ROUTER_CONFIGURATION,[2,i54.UrlHandlingStrategy],
              [2,i54.RouteReuseStrategy]]),i0.ɵmpd(512,i54.RouterModule,i54.RouterModule,
              [[2,i54.ɵa],[2,i54.Router]]),i0.ɵmpd(512,i1.ERestauranteHomeModule,i1.ERestauranteHomeModule,
              ([] as any[])),i0.ɵmpd(256,i0.LOCALE_ID,'pt-br',([] as any[])),i0.ɵmpd(256,
              i36.JhiModuleConfig,{alertAsToast:false,i18nEnabled:true,defaultI18nLang:'pt-br'},
              ([] as any[])),i0.ɵmpd(256,i39.USE_STORE,(undefined as any),([] as any[])),
          i0.ɵmpd(256,i41.COOKIE_OPTIONS,{},([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
