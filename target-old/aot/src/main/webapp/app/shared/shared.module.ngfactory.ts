/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../../../src/main/webapp/app/shared/shared.module';
import * as i2 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory';
import * as i3 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory';
import * as i4 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory';
import * as i5 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory';
import * as i6 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory';
import * as i7 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory';
import * as i8 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory';
import * as i9 from './login/login.component.ngfactory';
import * as i10 from '@angular/common';
import * as i11 from '@angular/forms';
import * as i12 from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import * as i13 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as i14 from '@ng-bootstrap/ng-bootstrap/alert/alert-config';
import * as i15 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';
import * as i16 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config';
import * as i17 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config';
import * as i18 from '@ng-bootstrap/ng-bootstrap/accordion/accordion-config';
import * as i19 from '@ng-bootstrap/ng-bootstrap/carousel/carousel-config';
import * as i20 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import * as i21 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';
import * as i22 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import * as i23 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config';
import * as i24 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as i25 from '@ng-bootstrap/ng-bootstrap/pagination/pagination-config';
import * as i26 from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import * as i27 from '@ng-bootstrap/ng-bootstrap/rating/rating-config';
import * as i28 from '@ng-bootstrap/ng-bootstrap/tabset/tabset-config';
import * as i29 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config';
import * as i30 from '@angular/http';
import * as i31 from '@ngx-translate/core/src/translate.loader';
import * as i32 from 'ng-jhipster/index';
import * as i33 from '@ngx-translate/core/src/translate.parser';
import * as i34 from 'ng-jhipster/src/config.service';
import * as i35 from 'ng-jhipster/src/config';
import * as i36 from '@ngx-translate/core/src/missing-translation-handler';
import * as i37 from '@ngx-translate/core/src/translate.store';
import * as i38 from '@ngx-translate/core/src/translate.service';
import * as i39 from 'ngx-infinite-scroll';
import * as i40 from 'ngx-cookie/src/cookie-options-provider';
import * as i41 from 'ng-jhipster/src/service/data-util.service';
import * as i42 from 'ng-jhipster/src/service/date-util.service';
import * as i43 from 'ng-jhipster/src/service/event-manager.service';
import * as i44 from 'ng-jhipster/src/service/parse-links.service';
import * as i45 from 'ng-jhipster/src/service/pagination-util.service';
import * as i46 from 'ng-jhipster/src/service/base64.service';
import * as i47 from 'ng-jhipster/src/service/alert.service';
import * as i48 from 'ng-jhipster/src/language/language.service';
import * as i49 from 'ngx-cookie/src/cookie.service';
import * as i50 from 'ngx-cookie/src/cookie.factory';
import * as i51 from '@angular/platform-browser';
import * as i52 from '../../../../../../../src/main/webapp/app/shared/language/language.helper';
import * as i53 from '@angular/router';
import * as i54 from '../../../../../../../src/main/webapp/app/shared/tracker/window.service';
import * as i55 from '../../../../../../../src/main/webapp/app/shared/auth/account.service';
import * as i56 from '../../../../../../../src/main/webapp/app/shared/auth/auth-jwt.service';
import * as i57 from 'ng2-webstorage/dist/services/localStorage';
import * as i58 from 'ng2-webstorage/dist/services/sessionStorage';
import * as i59 from '../../../../../../../src/main/webapp/app/shared/auth/csrf.service';
import * as i60 from '../../../../../../../src/main/webapp/app/shared/tracker/tracker.service';
import * as i61 from '../../../../../../../src/main/webapp/app/shared/auth/principal.service';
import * as i62 from '../../../../../../../src/main/webapp/app/entities/notify.service';
import * as i63 from '../../../../../../../src/main/webapp/app/shared/login/login.service';
import * as i64 from '../../../../../../../src/main/webapp/app/shared/login/autologin.service';
import * as i65 from '../../../../../../../src/main/webapp/app/shared/login/login-modal.service';
import * as i66 from '../../../../../../../src/main/webapp/app/shared/auth/state-storage.service';
import * as i67 from '../../../../../../../src/main/webapp/app/shared/user/user.service';
import * as i68 from '../../../../../../../src/main/webapp/app/shared/utils/variaveis.service';
import * as i69 from '../../../../../../../src/main/webapp/app/entities/mesa/mesa.service';
import * as i70 from '../../../../../../../src/main/webapp/app/entities/comanda/comanda.service';
import * as i71 from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import * as i72 from '@ng-bootstrap/ng-bootstrap/buttons/buttons.module';
import * as i73 from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import * as i74 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module';
import * as i75 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import * as i76 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import * as i77 from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';
import * as i78 from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import * as i79 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import * as i80 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import * as i81 from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import * as i82 from '@ng-bootstrap/ng-bootstrap/pagination/pagination.module';
import * as i83 from '@ng-bootstrap/ng-bootstrap/popover/popover.module';
import * as i84 from '@ng-bootstrap/ng-bootstrap/rating/rating.module';
import * as i85 from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import * as i86 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module';
import * as i87 from '@ng-bootstrap/ng-bootstrap/index';
import * as i88 from '@ngx-translate/core/index';
import * as i89 from 'ngx-cookie/index';
import * as i90 from '../../../../../../../src/main/webapp/app/shared/shared-libs.module';
import * as i91 from '../../../../../../../src/main/webapp/app/shared/shared-common.module';
export const ERestauranteSharedModuleNgFactory:i0.NgModuleFactory<i1.ERestauranteSharedModule> = i0.ɵcmf(i1.ERestauranteSharedModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.NgbAlertNgFactory,i3.NgbTooltipWindowNgFactory,i4.NgbTypeaheadWindowNgFactory,
              i5.NgbDatepickerNgFactory,i6.NgbModalBackdropNgFactory,i7.NgbModalWindowNgFactory,
              i8.NgbPopoverWindowNgFactory,i9.JhiLoginModalComponentNgFactory]],[3,
              i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,i10.NgLocalization,
          i10.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,i11.ɵi,i11.ɵi,([] as any[])),
          i0.ɵmpd(4608,i12.NgbModalStack,i12.NgbModalStack,[i0.ApplicationRef,i0.Injector,
              i0.ComponentFactoryResolver]),i0.ɵmpd(4608,i13.NgbModal,i13.NgbModal,
              [i0.ComponentFactoryResolver,i0.Injector,i12.NgbModalStack]),i0.ɵmpd(4608,
              i14.NgbAlertConfig,i14.NgbAlertConfig,([] as any[])),i0.ɵmpd(4608,i15.NgbProgressbarConfig,
              i15.NgbProgressbarConfig,([] as any[])),i0.ɵmpd(4608,i16.NgbTooltipConfig,
              i16.NgbTooltipConfig,([] as any[])),i0.ɵmpd(4608,i17.NgbTypeaheadConfig,
              i17.NgbTypeaheadConfig,([] as any[])),i0.ɵmpd(4608,i18.NgbAccordionConfig,
              i18.NgbAccordionConfig,([] as any[])),i0.ɵmpd(4608,i19.NgbCarouselConfig,
              i19.NgbCarouselConfig,([] as any[])),i0.ɵmpd(4608,i20.NgbCalendar,i20.NgbCalendarGregorian,
              ([] as any[])),i0.ɵmpd(4608,i21.NgbDatepickerI18n,i21.NgbDatepickerI18nDefault,
              ([] as any[])),i0.ɵmpd(4608,i22.NgbDateParserFormatter,i22.NgbDateISOParserFormatter,
              ([] as any[])),i0.ɵmpd(4608,i23.NgbDatepickerConfig,i23.NgbDatepickerConfig,
              ([] as any[])),i0.ɵmpd(4608,i24.NgbDropdownConfig,i24.NgbDropdownConfig,
              ([] as any[])),i0.ɵmpd(4608,i25.NgbPaginationConfig,i25.NgbPaginationConfig,
              ([] as any[])),i0.ɵmpd(4608,i26.NgbPopoverConfig,i26.NgbPopoverConfig,
              ([] as any[])),i0.ɵmpd(4608,i27.NgbRatingConfig,i27.NgbRatingConfig,
              ([] as any[])),i0.ɵmpd(4608,i28.NgbTabsetConfig,i28.NgbTabsetConfig,
              ([] as any[])),i0.ɵmpd(4608,i29.NgbTimepickerConfig,i29.NgbTimepickerConfig,
              ([] as any[])),i0.ɵmpd(4608,i30.BrowserXhr,i30.BrowserXhr,([] as any[])),
          i0.ɵmpd(4608,i30.ResponseOptions,i30.BaseResponseOptions,([] as any[])),
          i0.ɵmpd(5120,i30.XSRFStrategy,i30.ɵb,([] as any[])),i0.ɵmpd(4608,i30.XHRBackend,
              i30.XHRBackend,[i30.BrowserXhr,i30.ResponseOptions,i30.XSRFStrategy]),
          i0.ɵmpd(4608,i30.RequestOptions,i30.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i30.Http,i30.ɵc,[i30.XHRBackend,i30.RequestOptions]),i0.ɵmpd(5120,i31.TranslateLoader,
              i32.translatePartialLoader,[i30.Http]),i0.ɵmpd(4608,i33.TranslateParser,
              i33.TranslateDefaultParser,([] as any[])),i0.ɵmpd(4608,i34.JhiConfigService,
              i34.JhiConfigService,[i35.JhiModuleConfig]),i0.ɵmpd(5120,i36.MissingTranslationHandler,
              i32.missingTranslationHandler,[i34.JhiConfigService]),i0.ɵmpd(4608,i37.TranslateStore,
              i37.TranslateStore,([] as any[])),i0.ɵmpd(4608,i38.TranslateService,
              i38.TranslateService,[i37.TranslateStore,i31.TranslateLoader,i33.TranslateParser,
                  i36.MissingTranslationHandler,i38.USE_STORE]),i0.ɵmpd(4608,i39.ɵb,
              i39.ɵb,([] as any[])),i0.ɵmpd(4608,i39.ɵc,i39.ɵc,([] as any[])),i0.ɵmpd(4608,
              i39.ɵd,i39.ɵd,([] as any[])),i0.ɵmpd(4608,i40.CookieOptionsProvider,
              i40.CookieOptionsProvider,[i40.COOKIE_OPTIONS,i0.Injector]),i0.ɵmpd(4608,
              i41.JhiDataUtils,i41.JhiDataUtils,([] as any[])),i0.ɵmpd(4608,i42.JhiDateUtils,
              i42.JhiDateUtils,([] as any[])),i0.ɵmpd(4608,i43.JhiEventManager,i43.JhiEventManager,
              ([] as any[])),i0.ɵmpd(4608,i44.JhiParseLinks,i44.JhiParseLinks,([] as any[])),
          i0.ɵmpd(4608,i45.JhiPaginationUtil,i45.JhiPaginationUtil,([] as any[])),
          i0.ɵmpd(4608,i46.JhiBase64Service,i46.JhiBase64Service,([] as any[])),i0.ɵmpd(4608,
              i47.JhiAlertService,i47.JhiAlertService,[i0.Sanitizer,i34.JhiConfigService,
                  i38.TranslateService]),i0.ɵmpd(4608,i48.JhiLanguageService,i48.JhiLanguageService,
              [i38.TranslateService,i34.JhiConfigService]),i0.ɵmpd(5120,i49.CookieService,
              i50.cookieServiceFactory,[i40.CookieOptionsProvider]),i0.ɵmpd(4608,i51.Title,
              i51.Title,[i10.DOCUMENT]),i0.ɵmpd(4608,i52.JhiLanguageHelper,i52.JhiLanguageHelper,
              [i38.TranslateService,i0.RendererFactory2,i51.Title,i53.Router]),i0.ɵmpd(4608,
              i54.WindowRef,i54.WindowRef,([] as any[])),i0.ɵmpd(4608,i55.AccountService,
              i55.AccountService,[i30.Http]),i0.ɵmpd(4608,i56.AuthServerProvider,i56.AuthServerProvider,
              [i30.Http,i57.LocalStorageService,i58.SessionStorageService]),i0.ɵmpd(4608,
              i59.CSRFService,i59.CSRFService,[i49.CookieService]),i0.ɵmpd(4608,i60.JhiTrackerService,
              i60.JhiTrackerService,[i53.Router,i56.AuthServerProvider,i54.WindowRef,
                  i59.CSRFService]),i0.ɵmpd(4608,i61.Principal,i61.Principal,[i55.AccountService,
              i60.JhiTrackerService,i62.NotifyService]),i0.ɵmpd(4608,i63.LoginService,
              i63.LoginService,[i43.JhiEventManager,i48.JhiLanguageService,i61.Principal,
                  i60.JhiTrackerService,i56.AuthServerProvider]),i0.ɵmpd(4608,i64.AutologinService,
              i64.AutologinService,[i43.JhiEventManager,i63.LoginService,i53.Router,
                  i61.Principal]),i0.ɵmpd(4608,i65.LoginModalService,i65.LoginModalService,
              [i13.NgbModal]),i0.ɵmpd(4608,i66.StateStorageService,i66.StateStorageService,
              [i58.SessionStorageService]),i0.ɵmpd(4608,i67.UserService,i67.UserService,
              [i30.Http]),i0.ɵmpd(4608,i10.DatePipe,i10.DatePipe,[i0.LOCALE_ID]),i0.ɵmpd(4608,
              i68.VariaveisService,i68.VariaveisService,[i57.LocalStorageService,i69.MesaService,
                  i70.ComandaService]),i0.ɵmpd(512,i10.CommonModule,i10.CommonModule,
              ([] as any[])),i0.ɵmpd(512,i71.NgbAlertModule,i71.NgbAlertModule,([] as any[])),
          i0.ɵmpd(512,i72.NgbButtonsModule,i72.NgbButtonsModule,([] as any[])),i0.ɵmpd(512,
              i73.NgbCollapseModule,i73.NgbCollapseModule,([] as any[])),i0.ɵmpd(512,
              i74.NgbProgressbarModule,i74.NgbProgressbarModule,([] as any[])),i0.ɵmpd(512,
              i75.NgbTooltipModule,i75.NgbTooltipModule,([] as any[])),i0.ɵmpd(512,
              i76.NgbTypeaheadModule,i76.NgbTypeaheadModule,([] as any[])),i0.ɵmpd(512,
              i77.NgbAccordionModule,i77.NgbAccordionModule,([] as any[])),i0.ɵmpd(512,
              i78.NgbCarouselModule,i78.NgbCarouselModule,([] as any[])),i0.ɵmpd(512,
              i11.ɵba,i11.ɵba,([] as any[])),i0.ɵmpd(512,i11.FormsModule,i11.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i79.NgbDatepickerModule,i79.NgbDatepickerModule,
              ([] as any[])),i0.ɵmpd(512,i80.NgbDropdownModule,i80.NgbDropdownModule,
              ([] as any[])),i0.ɵmpd(512,i81.NgbModalModule,i81.NgbModalModule,([] as any[])),
          i0.ɵmpd(512,i82.NgbPaginationModule,i82.NgbPaginationModule,([] as any[])),
          i0.ɵmpd(512,i83.NgbPopoverModule,i83.NgbPopoverModule,([] as any[])),i0.ɵmpd(512,
              i84.NgbRatingModule,i84.NgbRatingModule,([] as any[])),i0.ɵmpd(512,i85.NgbTabsetModule,
              i85.NgbTabsetModule,([] as any[])),i0.ɵmpd(512,i86.NgbTimepickerModule,
              i86.NgbTimepickerModule,([] as any[])),i0.ɵmpd(512,i87.NgbRootModule,
              i87.NgbRootModule,([] as any[])),i0.ɵmpd(512,i88.TranslateModule,i88.TranslateModule,
              ([] as any[])),i0.ɵmpd(512,i30.HttpModule,i30.HttpModule,([] as any[])),
          i0.ɵmpd(512,i32.NgJhipsterModule,i32.NgJhipsterModule,([] as any[])),i0.ɵmpd(512,
              i39.InfiniteScrollModule,i39.InfiniteScrollModule,([] as any[])),i0.ɵmpd(512,
              i89.CookieModule,i89.CookieModule,([] as any[])),i0.ɵmpd(512,i87.NgbModule,
              i87.NgbModule,([] as any[])),i0.ɵmpd(512,i90.ERestauranteSharedLibsModule,
              i90.ERestauranteSharedLibsModule,([] as any[])),i0.ɵmpd(512,i91.ERestauranteSharedCommonModule,
              i91.ERestauranteSharedCommonModule,([] as any[])),i0.ɵmpd(512,i1.ERestauranteSharedModule,
              i1.ERestauranteSharedModule,([] as any[])),i0.ɵmpd(256,i0.LOCALE_ID,
              'pt-br',([] as any[])),i0.ɵmpd(256,i35.JhiModuleConfig,{alertAsToast:false,
              i18nEnabled:true,defaultI18nLang:'pt-br'},([] as any[])),i0.ɵmpd(256,
              i38.USE_STORE,(undefined as any),([] as any[])),i0.ɵmpd(256,i40.COOKIE_OPTIONS,
              {},([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL21mZXJuYW5kZXMvZXJlc3RhdXJhbnRlL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
