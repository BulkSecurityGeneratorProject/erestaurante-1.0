/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../../../../src/main/webapp/app/entities/endereco/endereco.module';
import * as i2 from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory';
import * as i3 from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory';
import * as i4 from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory';
import * as i5 from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory';
import * as i6 from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory';
import * as i7 from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory';
import * as i8 from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory';
import * as i9 from '../../shared/login/login.component.ngfactory';
import * as i10 from './endereco.component.ngfactory';
import * as i11 from './endereco-detail.component.ngfactory';
import * as i12 from './endereco-dialog.component.ngfactory';
import * as i13 from './endereco-delete-dialog.component.ngfactory';
import * as i14 from '@angular/common';
import * as i15 from '@angular/forms';
import * as i16 from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import * as i17 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as i18 from '@ng-bootstrap/ng-bootstrap/alert/alert-config';
import * as i19 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';
import * as i20 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config';
import * as i21 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config';
import * as i22 from '@ng-bootstrap/ng-bootstrap/accordion/accordion-config';
import * as i23 from '@ng-bootstrap/ng-bootstrap/carousel/carousel-config';
import * as i24 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import * as i25 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';
import * as i26 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import * as i27 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config';
import * as i28 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as i29 from '@ng-bootstrap/ng-bootstrap/pagination/pagination-config';
import * as i30 from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import * as i31 from '@ng-bootstrap/ng-bootstrap/rating/rating-config';
import * as i32 from '@ng-bootstrap/ng-bootstrap/tabset/tabset-config';
import * as i33 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config';
import * as i34 from '@angular/http';
import * as i35 from '@ngx-translate/core/src/translate.loader';
import * as i36 from 'ng-jhipster/index';
import * as i37 from '@ngx-translate/core/src/translate.parser';
import * as i38 from 'ng-jhipster/src/config.service';
import * as i39 from 'ng-jhipster/src/config';
import * as i40 from '@ngx-translate/core/src/missing-translation-handler';
import * as i41 from '@ngx-translate/core/src/translate.store';
import * as i42 from '@ngx-translate/core/src/translate.service';
import * as i43 from 'ngx-infinite-scroll';
import * as i44 from 'ngx-cookie/src/cookie-options-provider';
import * as i45 from 'ng-jhipster/src/service/data-util.service';
import * as i46 from 'ng-jhipster/src/service/date-util.service';
import * as i47 from 'ng-jhipster/src/service/event-manager.service';
import * as i48 from 'ng-jhipster/src/service/parse-links.service';
import * as i49 from 'ng-jhipster/src/service/pagination-util.service';
import * as i50 from 'ng-jhipster/src/service/base64.service';
import * as i51 from 'ng-jhipster/src/service/alert.service';
import * as i52 from 'ng-jhipster/src/language/language.service';
import * as i53 from 'ngx-cookie/src/cookie.service';
import * as i54 from 'ngx-cookie/src/cookie.factory';
import * as i55 from '@angular/platform-browser';
import * as i56 from '../../../../../../../../src/main/webapp/app/shared/language/language.helper';
import * as i57 from '@angular/router';
import * as i58 from '../../../../../../../../src/main/webapp/app/shared/tracker/window.service';
import * as i59 from '../../../../../../../../src/main/webapp/app/shared/auth/account.service';
import * as i60 from '../../../../../../../../src/main/webapp/app/shared/auth/auth-jwt.service';
import * as i61 from 'ng2-webstorage/dist/services/localStorage';
import * as i62 from 'ng2-webstorage/dist/services/sessionStorage';
import * as i63 from '../../../../../../../../src/main/webapp/app/shared/auth/csrf.service';
import * as i64 from '../../../../../../../../src/main/webapp/app/shared/tracker/tracker.service';
import * as i65 from '../../../../../../../../src/main/webapp/app/shared/auth/principal.service';
import * as i66 from '../../../../../../../../src/main/webapp/app/entities/notify.service';
import * as i67 from '../../../../../../../../src/main/webapp/app/shared/login/login.service';
import * as i68 from '../../../../../../../../src/main/webapp/app/shared/login/autologin.service';
import * as i69 from '../../../../../../../../src/main/webapp/app/shared/login/login-modal.service';
import * as i70 from '../../../../../../../../src/main/webapp/app/shared/auth/state-storage.service';
import * as i71 from '../../../../../../../../src/main/webapp/app/shared/user/user.service';
import * as i72 from '../../../../../../../../src/main/webapp/app/shared/utils/variaveis.service';
import * as i73 from '../../../../../../../../src/main/webapp/app/entities/mesa/mesa.service';
import * as i74 from '../../../../../../../../src/main/webapp/app/entities/comanda/comanda.service';
import * as i75 from '../../../../../../../../src/main/webapp/app/entities/endereco/endereco.service';
import * as i76 from '../../../../../../../../src/main/webapp/app/entities/endereco/endereco-popup.service';
import * as i77 from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import * as i78 from '@ng-bootstrap/ng-bootstrap/buttons/buttons.module';
import * as i79 from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import * as i80 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module';
import * as i81 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import * as i82 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import * as i83 from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';
import * as i84 from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import * as i85 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import * as i86 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import * as i87 from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import * as i88 from '@ng-bootstrap/ng-bootstrap/pagination/pagination.module';
import * as i89 from '@ng-bootstrap/ng-bootstrap/popover/popover.module';
import * as i90 from '@ng-bootstrap/ng-bootstrap/rating/rating.module';
import * as i91 from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import * as i92 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module';
import * as i93 from '@ng-bootstrap/ng-bootstrap/index';
import * as i94 from '@ngx-translate/core/index';
import * as i95 from 'ngx-cookie/index';
import * as i96 from '../../../../../../../../src/main/webapp/app/shared/shared-libs.module';
import * as i97 from '../../../../../../../../src/main/webapp/app/shared/shared-common.module';
import * as i98 from '../../../../../../../../src/main/webapp/app/shared/shared.module';
import * as i99 from '../../../../../../../../src/main/webapp/app/entities/endereco/endereco.component';
import * as i100 from '../../../../../../../../src/main/webapp/app/shared/auth/user-route-access-service';
import * as i101 from '../../../../../../../../src/main/webapp/app/entities/endereco/endereco-detail.component';
import * as i102 from '../../../../../../../../src/main/webapp/app/entities/endereco/endereco-dialog.component';
import * as i103 from '../../../../../../../../src/main/webapp/app/entities/endereco/endereco-delete-dialog.component';
export const ERestauranteEnderecoModuleNgFactory:i0.NgModuleFactory<i1.ERestauranteEnderecoModule> = i0.ɵcmf(i1.ERestauranteEnderecoModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.NgbAlertNgFactory,i3.NgbTooltipWindowNgFactory,i4.NgbTypeaheadWindowNgFactory,
              i5.NgbDatepickerNgFactory,i6.NgbModalBackdropNgFactory,i7.NgbModalWindowNgFactory,
              i8.NgbPopoverWindowNgFactory,i9.JhiLoginModalComponentNgFactory,i10.EnderecoComponentNgFactory,
              i11.EnderecoDetailComponentNgFactory,i12.EnderecoPopupComponentNgFactory,
              i13.EnderecoDeletePopupComponentNgFactory,i12.EnderecoDialogComponentNgFactory,
              i13.EnderecoDeleteDialogComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(4608,i14.NgLocalization,i14.NgLocaleLocalization,
          [i0.LOCALE_ID]),i0.ɵmpd(4608,i15.ɵi,i15.ɵi,([] as any[])),i0.ɵmpd(4608,i16.NgbModalStack,
          i16.NgbModalStack,[i0.ApplicationRef,i0.Injector,i0.ComponentFactoryResolver]),
          i0.ɵmpd(4608,i17.NgbModal,i17.NgbModal,[i0.ComponentFactoryResolver,i0.Injector,
              i16.NgbModalStack]),i0.ɵmpd(4608,i18.NgbAlertConfig,i18.NgbAlertConfig,
              ([] as any[])),i0.ɵmpd(4608,i19.NgbProgressbarConfig,i19.NgbProgressbarConfig,
              ([] as any[])),i0.ɵmpd(4608,i20.NgbTooltipConfig,i20.NgbTooltipConfig,
              ([] as any[])),i0.ɵmpd(4608,i21.NgbTypeaheadConfig,i21.NgbTypeaheadConfig,
              ([] as any[])),i0.ɵmpd(4608,i22.NgbAccordionConfig,i22.NgbAccordionConfig,
              ([] as any[])),i0.ɵmpd(4608,i23.NgbCarouselConfig,i23.NgbCarouselConfig,
              ([] as any[])),i0.ɵmpd(4608,i24.NgbCalendar,i24.NgbCalendarGregorian,
              ([] as any[])),i0.ɵmpd(4608,i25.NgbDatepickerI18n,i25.NgbDatepickerI18nDefault,
              ([] as any[])),i0.ɵmpd(4608,i26.NgbDateParserFormatter,i26.NgbDateISOParserFormatter,
              ([] as any[])),i0.ɵmpd(4608,i27.NgbDatepickerConfig,i27.NgbDatepickerConfig,
              ([] as any[])),i0.ɵmpd(4608,i28.NgbDropdownConfig,i28.NgbDropdownConfig,
              ([] as any[])),i0.ɵmpd(4608,i29.NgbPaginationConfig,i29.NgbPaginationConfig,
              ([] as any[])),i0.ɵmpd(4608,i30.NgbPopoverConfig,i30.NgbPopoverConfig,
              ([] as any[])),i0.ɵmpd(4608,i31.NgbRatingConfig,i31.NgbRatingConfig,
              ([] as any[])),i0.ɵmpd(4608,i32.NgbTabsetConfig,i32.NgbTabsetConfig,
              ([] as any[])),i0.ɵmpd(4608,i33.NgbTimepickerConfig,i33.NgbTimepickerConfig,
              ([] as any[])),i0.ɵmpd(4608,i34.BrowserXhr,i34.BrowserXhr,([] as any[])),
          i0.ɵmpd(4608,i34.ResponseOptions,i34.BaseResponseOptions,([] as any[])),
          i0.ɵmpd(5120,i34.XSRFStrategy,i34.ɵb,([] as any[])),i0.ɵmpd(4608,i34.XHRBackend,
              i34.XHRBackend,[i34.BrowserXhr,i34.ResponseOptions,i34.XSRFStrategy]),
          i0.ɵmpd(4608,i34.RequestOptions,i34.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i34.Http,i34.ɵc,[i34.XHRBackend,i34.RequestOptions]),i0.ɵmpd(5120,i35.TranslateLoader,
              i36.translatePartialLoader,[i34.Http]),i0.ɵmpd(4608,i37.TranslateParser,
              i37.TranslateDefaultParser,([] as any[])),i0.ɵmpd(4608,i38.JhiConfigService,
              i38.JhiConfigService,[i39.JhiModuleConfig]),i0.ɵmpd(5120,i40.MissingTranslationHandler,
              i36.missingTranslationHandler,[i38.JhiConfigService]),i0.ɵmpd(4608,i41.TranslateStore,
              i41.TranslateStore,([] as any[])),i0.ɵmpd(4608,i42.TranslateService,
              i42.TranslateService,[i41.TranslateStore,i35.TranslateLoader,i37.TranslateParser,
                  i40.MissingTranslationHandler,i42.USE_STORE]),i0.ɵmpd(4608,i43.ɵb,
              i43.ɵb,([] as any[])),i0.ɵmpd(4608,i43.ɵc,i43.ɵc,([] as any[])),i0.ɵmpd(4608,
              i43.ɵd,i43.ɵd,([] as any[])),i0.ɵmpd(4608,i44.CookieOptionsProvider,
              i44.CookieOptionsProvider,[i44.COOKIE_OPTIONS,i0.Injector]),i0.ɵmpd(4608,
              i45.JhiDataUtils,i45.JhiDataUtils,([] as any[])),i0.ɵmpd(4608,i46.JhiDateUtils,
              i46.JhiDateUtils,([] as any[])),i0.ɵmpd(4608,i47.JhiEventManager,i47.JhiEventManager,
              ([] as any[])),i0.ɵmpd(4608,i48.JhiParseLinks,i48.JhiParseLinks,([] as any[])),
          i0.ɵmpd(4608,i49.JhiPaginationUtil,i49.JhiPaginationUtil,([] as any[])),
          i0.ɵmpd(4608,i50.JhiBase64Service,i50.JhiBase64Service,([] as any[])),i0.ɵmpd(4608,
              i51.JhiAlertService,i51.JhiAlertService,[i0.Sanitizer,i38.JhiConfigService,
                  i42.TranslateService]),i0.ɵmpd(4608,i52.JhiLanguageService,i52.JhiLanguageService,
              [i42.TranslateService,i38.JhiConfigService]),i0.ɵmpd(5120,i53.CookieService,
              i54.cookieServiceFactory,[i44.CookieOptionsProvider]),i0.ɵmpd(4608,i55.Title,
              i55.Title,[i14.DOCUMENT]),i0.ɵmpd(4608,i56.JhiLanguageHelper,i56.JhiLanguageHelper,
              [i42.TranslateService,i0.RendererFactory2,i55.Title,i57.Router]),i0.ɵmpd(4608,
              i58.WindowRef,i58.WindowRef,([] as any[])),i0.ɵmpd(4608,i59.AccountService,
              i59.AccountService,[i34.Http]),i0.ɵmpd(4608,i60.AuthServerProvider,i60.AuthServerProvider,
              [i34.Http,i61.LocalStorageService,i62.SessionStorageService]),i0.ɵmpd(4608,
              i63.CSRFService,i63.CSRFService,[i53.CookieService]),i0.ɵmpd(4608,i64.JhiTrackerService,
              i64.JhiTrackerService,[i57.Router,i60.AuthServerProvider,i58.WindowRef,
                  i63.CSRFService]),i0.ɵmpd(4608,i65.Principal,i65.Principal,[i59.AccountService,
              i64.JhiTrackerService,i66.NotifyService]),i0.ɵmpd(4608,i67.LoginService,
              i67.LoginService,[i47.JhiEventManager,i52.JhiLanguageService,i65.Principal,
                  i64.JhiTrackerService,i60.AuthServerProvider]),i0.ɵmpd(4608,i68.AutologinService,
              i68.AutologinService,[i47.JhiEventManager,i67.LoginService,i57.Router,
                  i65.Principal]),i0.ɵmpd(4608,i69.LoginModalService,i69.LoginModalService,
              [i17.NgbModal]),i0.ɵmpd(4608,i70.StateStorageService,i70.StateStorageService,
              [i62.SessionStorageService]),i0.ɵmpd(4608,i71.UserService,i71.UserService,
              [i34.Http]),i0.ɵmpd(4608,i14.DatePipe,i14.DatePipe,[i0.LOCALE_ID]),i0.ɵmpd(4608,
              i72.VariaveisService,i72.VariaveisService,[i61.LocalStorageService,i73.MesaService,
                  i74.ComandaService]),i0.ɵmpd(5120,i57.ActivatedRoute,i57.ɵf,[i57.Router]),
          i0.ɵmpd(4608,i57.NoPreloading,i57.NoPreloading,([] as any[])),i0.ɵmpd(6144,
              i57.PreloadingStrategy,(null as any),[i57.NoPreloading]),i0.ɵmpd(135680,
              i57.RouterPreloader,i57.RouterPreloader,[i57.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i57.PreloadingStrategy]),i0.ɵmpd(4608,i57.PreloadAllModules,
              i57.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i0.NgProbeToken,() => {
            return [i57.ɵb()];
          },([] as any[])),i0.ɵmpd(4608,i57.ɵg,i57.ɵg,[i0.Injector]),i0.ɵmpd(5120,
              i0.APP_INITIALIZER,(p0_0:any) => {
                return [i57.ɵh(p0_0)];
              },[i57.ɵg]),i0.ɵmpd(5120,i57.ROUTER_INITIALIZER,i57.ɵi,[i57.ɵg]),i0.ɵmpd(5120,
              i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
                return [p0_0];
              },[i57.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i75.EnderecoService,i75.EnderecoService,
              [i34.Http]),i0.ɵmpd(4608,i76.EnderecoPopupService,i76.EnderecoPopupService,
              [i17.NgbModal,i57.Router,i75.EnderecoService]),i0.ɵmpd(512,i14.CommonModule,
              i14.CommonModule,([] as any[])),i0.ɵmpd(512,i77.NgbAlertModule,i77.NgbAlertModule,
              ([] as any[])),i0.ɵmpd(512,i78.NgbButtonsModule,i78.NgbButtonsModule,
              ([] as any[])),i0.ɵmpd(512,i79.NgbCollapseModule,i79.NgbCollapseModule,
              ([] as any[])),i0.ɵmpd(512,i80.NgbProgressbarModule,i80.NgbProgressbarModule,
              ([] as any[])),i0.ɵmpd(512,i81.NgbTooltipModule,i81.NgbTooltipModule,
              ([] as any[])),i0.ɵmpd(512,i82.NgbTypeaheadModule,i82.NgbTypeaheadModule,
              ([] as any[])),i0.ɵmpd(512,i83.NgbAccordionModule,i83.NgbAccordionModule,
              ([] as any[])),i0.ɵmpd(512,i84.NgbCarouselModule,i84.NgbCarouselModule,
              ([] as any[])),i0.ɵmpd(512,i15.ɵba,i15.ɵba,([] as any[])),i0.ɵmpd(512,
              i15.FormsModule,i15.FormsModule,([] as any[])),i0.ɵmpd(512,i85.NgbDatepickerModule,
              i85.NgbDatepickerModule,([] as any[])),i0.ɵmpd(512,i86.NgbDropdownModule,
              i86.NgbDropdownModule,([] as any[])),i0.ɵmpd(512,i87.NgbModalModule,
              i87.NgbModalModule,([] as any[])),i0.ɵmpd(512,i88.NgbPaginationModule,
              i88.NgbPaginationModule,([] as any[])),i0.ɵmpd(512,i89.NgbPopoverModule,
              i89.NgbPopoverModule,([] as any[])),i0.ɵmpd(512,i90.NgbRatingModule,
              i90.NgbRatingModule,([] as any[])),i0.ɵmpd(512,i91.NgbTabsetModule,i91.NgbTabsetModule,
              ([] as any[])),i0.ɵmpd(512,i92.NgbTimepickerModule,i92.NgbTimepickerModule,
              ([] as any[])),i0.ɵmpd(512,i93.NgbRootModule,i93.NgbRootModule,([] as any[])),
          i0.ɵmpd(512,i94.TranslateModule,i94.TranslateModule,([] as any[])),i0.ɵmpd(512,
              i34.HttpModule,i34.HttpModule,([] as any[])),i0.ɵmpd(512,i36.NgJhipsterModule,
              i36.NgJhipsterModule,([] as any[])),i0.ɵmpd(512,i43.InfiniteScrollModule,
              i43.InfiniteScrollModule,([] as any[])),i0.ɵmpd(512,i95.CookieModule,
              i95.CookieModule,([] as any[])),i0.ɵmpd(512,i93.NgbModule,i93.NgbModule,
              ([] as any[])),i0.ɵmpd(512,i96.ERestauranteSharedLibsModule,i96.ERestauranteSharedLibsModule,
              ([] as any[])),i0.ɵmpd(512,i97.ERestauranteSharedCommonModule,i97.ERestauranteSharedCommonModule,
              ([] as any[])),i0.ɵmpd(512,i98.ERestauranteSharedModule,i98.ERestauranteSharedModule,
              ([] as any[])),i0.ɵmpd(1024,i57.ɵa,i57.ɵd,[[3,i57.Router]]),i0.ɵmpd(512,
              i57.UrlSerializer,i57.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,
              i57.ChildrenOutletContexts,i57.ChildrenOutletContexts,([] as any[])),
          i0.ɵmpd(256,i57.ROUTER_CONFIGURATION,{useHash:true},([] as any[])),i0.ɵmpd(1024,
              i14.LocationStrategy,i57.ɵc,[i14.PlatformLocation,[2,i14.APP_BASE_HREF],
                  i57.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i14.Location,i14.Location,
              [i14.LocationStrategy]),i0.ɵmpd(512,i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,
              [i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),i0.ɵmpd(1024,i57.ROUTES,
              () => {
                return [[{path:'endereco',component:i99.EnderecoComponent,data:{authorities:['ROLE_USER'],
                    pageTitle:'eRestauranteApp.endereco.home.title'},canActivate:[i100.UserRouteAccessService]},
                    {path:'endereco/:id',component:i101.EnderecoDetailComponent,data:{authorities:['ROLE_USER'],
                        pageTitle:'eRestauranteApp.endereco.home.title'},canActivate:[i100.UserRouteAccessService]},
                    {path:'endereco-new',component:i102.EnderecoPopupComponent,data:{authorities:['ROLE_USER'],
                        pageTitle:'eRestauranteApp.endereco.home.title'},canActivate:[i100.UserRouteAccessService],
                        outlet:'popup'},{path:'endereco/:id/edit',component:i102.EnderecoPopupComponent,
                        data:{authorities:['ROLE_USER'],pageTitle:'eRestauranteApp.endereco.home.title'},
                        canActivate:[i100.UserRouteAccessService],outlet:'popup'},
                    {path:'endereco/:id/delete',component:i103.EnderecoDeletePopupComponent,
                        data:{authorities:['ROLE_USER'],pageTitle:'eRestauranteApp.endereco.home.title'},
                        canActivate:[i100.UserRouteAccessService],outlet:'popup'}]];
              },([] as any[])),i0.ɵmpd(1024,i57.Router,i57.ɵe,[i0.ApplicationRef,i57.UrlSerializer,
              i57.ChildrenOutletContexts,i14.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i57.ROUTES,i57.ROUTER_CONFIGURATION,[2,i57.UrlHandlingStrategy],
              [2,i57.RouteReuseStrategy]]),i0.ɵmpd(512,i57.RouterModule,i57.RouterModule,
              [[2,i57.ɵa],[2,i57.Router]]),i0.ɵmpd(512,i1.ERestauranteEnderecoModule,
              i1.ERestauranteEnderecoModule,([] as any[])),i0.ɵmpd(256,i0.LOCALE_ID,
              'pt-br',([] as any[])),i0.ɵmpd(256,i39.JhiModuleConfig,{alertAsToast:false,
              i18nEnabled:true,defaultI18nLang:'pt-br'},([] as any[])),i0.ɵmpd(256,
              i42.USE_STORE,(undefined as any),([] as any[])),i0.ɵmpd(256,i44.COOKIE_OPTIONS,
              {},([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9lbmRlcmVjby9lbmRlcmVjby5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9tZmVybmFuZGVzL2VyZXN0YXVyYW50ZS9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2VuZGVyZWNvL2VuZGVyZWNvLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
