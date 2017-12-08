/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../../node_modules/angular2-qrcode/lib/angular2-qrcode.ngfactory';
import * as i2 from 'angular2-qrcode';
import * as i3 from '../../../../../../node_modules/ng-jhipster/src/language/jhi-translate.directive.ngfactory';
import * as i4 from 'ng-jhipster/src/language/jhi-translate.directive';
import * as i5 from '../../shared/alert/alert-error.component.ngfactory';
import * as i6 from '../../../../../../../../src/main/webapp/app/shared/alert/alert-error.component';
import * as i7 from 'ng-jhipster/src/service/alert.service';
import * as i8 from 'ng-jhipster/src/service/event-manager.service';
import * as i9 from '@ngx-translate/core/src/translate.service';
import * as i10 from '@angular/common';
import * as i11 from '@angular/router';
import * as i12 from '../../../../../../../../src/main/webapp/app/entities/mesa/mesa-detail.component';
import * as i13 from 'ng-jhipster/src/service/data-util.service';
import * as i14 from '../../../../../../../../src/main/webapp/app/entities/mesa/mesa.service';
import * as i15 from '../../../../../../../../src/main/webapp/app/entities/restaurante/restaurante.service';
const styles_MesaDetailComponent:any[] = ([] as any[]);
export const RenderType_MesaDetailComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_MesaDetailComponent,data:{}});
function View_MesaDetailComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      3,'a',([] as any[]),(null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.openFile(_co.mesa.qrcodeContentType,_co.mesa.qrcode)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),0,'img',[['alt','mesa image'],['style',
          'max-width: 100%']],[[8,'src',4]],(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
      [' ',', ',' ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = ((('data:' + _co.mesa.qrcodeContentType) + ';base64,') + _co.mesa.qrcode);
    _ck(_v,4,0,currVal_0);
    const currVal_1:any = _co.mesa.qrcodeContentType;
    const currVal_2:any = _co.byteSize(_co.mesa.qrcode);
    _ck(_v,6,0,currVal_1,currVal_2);
  });
}
function View_MesaDetailComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'qr-code',([] as any[]),
      (null as any),(null as any),(null as any),i1.View_QRCodeComponent_0,i1.RenderType_QRCodeComponent)),
      i0.ɵdid(573440,(null as any),0,i2.QRCodeComponent,[i0.ElementRef],{size:[0,'size'],
          value:[1,'value']},(null as any)),(_l()(),i0.ɵted((null as any),[' ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = 300;
        const currVal_1:any = (((('http://' + _co.host) + '/#/(popup:mesa/') + _co.mesa.codigo) + '/set)');
        _ck(_v,1,0,currVal_0,currVal_1);
      },(null as any));
}
function View_MesaDetailComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),79,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      4,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
      'eRestauranteApp.mesa.detail.title']],(null as any),(null as any),(null as any),
      i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
      (null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,'jhiTranslate']},
      (null as any)),(_l()(),i0.ɵted((null as any),['Mesa'])),(_l()(),i0.ɵted((null as any),
      [' ',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),0,'hr',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),1,'jhi-alert-error',([] as any[]),(null as any),
          (null as any),(null as any),i5.View_JhiAlertErrorComponent_0,i5.RenderType_JhiAlertErrorComponent)),
      i0.ɵdid(180224,(null as any),0,i6.JhiAlertErrorComponent,[i7.JhiAlertService,
          i8.JhiEventManager,i9.TranslateService],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          43,'dl',[['class','row-md jh-entity-details']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'dd',[['class','float-right']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_MesaDetailComponent_2)),i0.ɵdid(16384,
          (null as any),0,i10.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_MesaDetailComponent_3)),
      i0.ɵdid(16384,(null as any),0,i10.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          3,'dt',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'eRestauranteApp.mesa.codigo']],(null as any),(null as any),(null as any),
          i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
          (null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
              'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Codigo'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          4,'dd',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.mesa.local']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Local'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'dd',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.mesa.descricao']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Descricao'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),4,'dd',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),7,'button',[['class','btn btn-info'],
          ['type','submit']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.previousState()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-arrow-left']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'span',[['jhiTranslate','entity.action.back']],(null as any),(null as any),
          (null as any),i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),[' Back'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),11,'button',[['class','btn btn-primary'],
          ['replaceUrl','true'],['type','button']],(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,68).onClick()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i11.RouterLink,
          [i11.Router,i11.ActivatedRoute,[8,(null as any)],i0.Renderer2,i0.ElementRef],
          {replaceUrl:[0,'replaceUrl'],routerLink:[1,'routerLink']},(null as any)),
      i0.ɵpod({popup:0}),i0.ɵpod({outlets:0}),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',[['class',
          'fa fa-pencil']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),2,'span',[['jhiTranslate','entity.action.edit']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          [' Edit'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'eRestauranteApp.mesa.detail.title';
    _ck(_v,4,0,currVal_0);
    const currVal_2:any = _co.mesa.qrcode;
    _ck(_v,18,0,currVal_2);
    const currVal_3:boolean = !_co.mesa.qrcode;
    _ck(_v,21,0,currVal_3);
    const currVal_4:any = 'eRestauranteApp.mesa.codigo';
    _ck(_v,26,0,currVal_4);
    const currVal_6:any = 'eRestauranteApp.mesa.local';
    _ck(_v,37,0,currVal_6);
    const currVal_8:any = 'eRestauranteApp.mesa.descricao';
    _ck(_v,48,0,currVal_8);
    const currVal_10:any = 'entity.action.back';
    _ck(_v,63,0,currVal_10);
    const currVal_11:any = 'true';
    const currVal_12:any = _ck(_v,71,0,'/',_ck(_v,70,0,_ck(_v,69,0,(('mesa/' + _co.mesa.id) + '/edit'))));
    _ck(_v,68,0,currVal_11,currVal_12);
    const currVal_13:any = 'entity.action.edit';
    _ck(_v,76,0,currVal_13);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = _co.mesa.id;
    _ck(_v,6,0,currVal_1);
    const currVal_5:any = _co.mesa.codigo;
    _ck(_v,32,0,currVal_5);
    const currVal_7:any = _co.mesa.local;
    _ck(_v,43,0,currVal_7);
    const currVal_9:any = _co.mesa.descricao;
    _ck(_v,54,0,currVal_9);
  });
}
export function View_MesaDetailComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_MesaDetailComponent_1)),i0.ɵdid(16384,
      (null as any),0,i10.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i0.ɵted((null as any),[' ']))],(_ck,_v) => {
    var _co:i12.MesaDetailComponent = _v.component;
    const currVal_0:any = _co.mesa;
    _ck(_v,2,0,currVal_0);
  },(null as any));
}
export function View_MesaDetailComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-mesa-detail',
      ([] as any[]),(null as any),(null as any),(null as any),View_MesaDetailComponent_0,
      RenderType_MesaDetailComponent)),i0.ɵdid(245760,(null as any),0,i12.MesaDetailComponent,
      [i8.JhiEventManager,i13.JhiDataUtils,i14.MesaService,i11.ActivatedRoute,i15.RestauranteService],
      (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const MesaDetailComponentNgFactory:i0.ComponentFactory<i12.MesaDetailComponent> = i0.ɵccf('jhi-mesa-detail',
    i12.MesaDetailComponent,View_MesaDetailComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9tZXNhL21lc2EtZGV0YWlsLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL21mZXJuYW5kZXMvZXJlc3RhdXJhbnRlL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbWVzYS9tZXNhLWRldGFpbC5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL21mZXJuYW5kZXMvZXJlc3RhdXJhbnRlL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbWVzYS9tZXNhLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9tZXNhL21lc2EtZGV0YWlsLmNvbXBvbmVudC50cy5NZXNhRGV0YWlsQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiIDxkaXYgKm5nSWY9XCJtZXNhXCI+IDxoMj48c3BhbiBqaGlUcmFuc2xhdGU9XCJlUmVzdGF1cmFudGVBcHAubWVzYS5kZXRhaWwudGl0bGVcIj5NZXNhPC9zcGFuPiB7e21lc2EuaWR9fTwvaDI+IDxocj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGRsIGNsYXNzPVwicm93LW1kIGpoLWVudGl0eS1kZXRhaWxzXCI+IDxkZCBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+IDxkaXYgKm5nSWY9XCJtZXNhLnFyY29kZVwiPiA8YSAoY2xpY2spPVwib3BlbkZpbGUobWVzYS5xcmNvZGVDb250ZW50VHlwZSwgbWVzYS5xcmNvZGUpXCI+IDxpbWcgW3NyY109XCInZGF0YTonICsgbWVzYS5xcmNvZGVDb250ZW50VHlwZSArICc7YmFzZTY0LCcgKyBtZXNhLnFyY29kZVwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlXCIgYWx0PVwibWVzYSBpbWFnZVwiLz4gPC9hPiB7e21lc2EucXJjb2RlQ29udGVudFR5cGV9fSwge3tieXRlU2l6ZShtZXNhLnFyY29kZSl9fSA8L2Rpdj4gPHFyLWNvZGUgKm5nSWY9XCIhbWVzYS5xcmNvZGVcIiBbdmFsdWVdPVwiJ2h0dHA6Ly8nICsgaG9zdCArICcvIy8ocG9wdXA6bWVzYS8nICsgbWVzYS5jb2RpZ28gKyAnL3NldCknXCIgW3NpemVdPVwiMzAwXCI+IDwvcXItY29kZT4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cImVSZXN0YXVyYW50ZUFwcC5tZXNhLmNvZGlnb1wiPkNvZGlnbzwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7bWVzYS5jb2RpZ299fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cImVSZXN0YXVyYW50ZUFwcC5tZXNhLmxvY2FsXCI+TG9jYWw8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e21lc2EubG9jYWx9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cImVSZXN0YXVyYW50ZUFwcC5tZXNhLmRlc2NyaWNhb1wiPkRlc2NyaWNhbzwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7bWVzYS5kZXNjcmljYW99fTwvc3Bhbj4gPC9kZD4gPC9kbD4gPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cInByZXZpb3VzU3RhdGUoKVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+IDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XCJlbnRpdHkuYWN0aW9uLmJhY2tcIj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtyb3V0ZXJMaW5rXT1cIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ21lc2EvJysgbWVzYS5pZCArICcvZWRpdCd9IH1dXCIgcmVwbGFjZVVybD1cInRydWVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPiA8c3BhbiBjbGFzcz1cImZhIGZhLXBlbmNpbFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XCJlbnRpdHkuYWN0aW9uLmVkaXRcIj4gRWRpdDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiAiLCI8amhpLW1lc2EtZGV0YWlsPjwvamhpLW1lc2EtZGV0YWlsPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQW9OO01BQUEsd0VBQXlCO2FBQUEsdUJBQUM7TUFBQTtRQUFBO1FBQUE7UUFBRztVQUFBO1VBQUE7UUFBQTtRQUFIO01BQUEsZ0NBQTJELHNDQUFDO2FBQUE7VUFBQTtVQUFBLGdCQUFtSCxzQ0FBSztNQUFBOztJQUFuSDtJQUFMLFdBQUssU0FBTDtJQUF3SDtJQUFBO0lBQUE7Ozs7b0JBQThEO01BQUE7YUFBQTtVQUFBLGtDQUFrSDs7O1FBQWI7UUFBdkU7UUFBOUIsV0FBcUcsVUFBdkUsU0FBOUI7Ozs7b0JBQS9kO01BQUEsd0VBQWtCO2FBQUEsdUJBQUM7TUFBQTtNQUFBLGdCQUFJO01BQUE7eUVBQUEsVUFBQTtNQUFBO01BQUEsZUFBdUQseUNBQVc7TUFBQSxXQUFpQixzQ0FBQztNQUFBO01BQUEsOEJBQUksc0NBQUM7YUFBQTtVQUFBO2FBQUE7Z0RBQUEsK0JBQW1DO2lCQUFBLHVCQUFDO1VBQUE7VUFBQSw0Q0FBcUM7VUFBQSxRQUFDO1VBQUE7TUFBd0Isc0NBQUM7VUFBQSxrRUFBQTtVQUFBO1VBQUEsZUFBMlEsc0NBQUM7VUFBQTthQUFBO1VBQUEsaUNBQTZILHNDQUFNO2lCQUFBLHVCQUFDO1VBQUE7VUFBQSxnQkFBSTtVQUFBOzZFQUFBLFVBQUE7VUFBQTtjQUFBLGdDQUFpRDtNQUFrQixzQ0FBQztVQUFBO1VBQUEsZ0JBQUksc0NBQUM7VUFBQTtVQUFBLDRDQUFNO1VBQUEsVUFBc0Isc0NBQU07VUFBQSxRQUFDO1VBQUE7TUFBSTtVQUFBOzZDQUFBLFVBQUE7VUFBQSwrREFBZ0Q7VUFBQSxZQUFpQixzQ0FBQztVQUFBO1VBQUEsOEJBQUksc0NBQUM7aUJBQUE7Y0FBQSwwREFBTTtVQUFBLFVBQXFCLHNDQUFNO1VBQUEsUUFBQztVQUFBO01BQUk7VUFBQTs2Q0FBQSxVQUFBO1VBQUEsK0RBQW9EO1VBQUEsZ0JBQXFCLHNDQUFDO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLFFBQUM7VUFBQTtNQUFNLHdDQUF5QjtNQUFNLHNDQUFNO01BQUM7VUFBQTtRQUFBO1FBQUE7UUFBc0I7VUFBQTtVQUFBO1FBQUE7UUFBdEI7TUFBQSxnQ0FBcUUsc0NBQUM7aUJBQUE7Y0FBQTtNQUFzQyxzQ0FBTTtVQUFBO1VBQUE7YUFBQTtVQUFBLGdDQUF3QztNQUFZLHNDQUFVO01BQUM7VUFBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBO2FBQXNCLDRDQUFrSDtVQUFBLFFBQUM7VUFBQTtVQUFBLGdCQUFrQyxzQ0FBTTtVQUFBO1VBQUE7NkNBQUEsVUFBQTtVQUFBLCtEQUF3QztVQUFBLFlBQVksc0NBQVU7VUFBQTs7SUFBbDBDO0lBQU4sV0FBTSxTQUFOO0lBQWlNO0lBQUwsWUFBSyxTQUFMO0lBQXFSO0lBQVQsWUFBUyxTQUFUO0lBQThJO0lBQU4sWUFBTSxTQUFOO0lBQXNIO0lBQU4sWUFBTSxTQUFOO0lBQW1IO0lBQU4sWUFBTSxTQUFOO0lBQW1QO0lBQU4sWUFBTSxVQUFOO0lBQTZKO0lBQXhFO0lBQXRCLFlBQThGLFdBQXhFLFVBQXRCO0lBQXVMO0lBQU4sWUFBTSxVQUFOOzs7SUFBeHNDO0lBQUE7SUFBNmxCO0lBQUE7SUFBOEc7SUFBQTtJQUFxSDtJQUFBOzs7O29CQUExNUIsc0NBQUM7TUFBQSxnRkFBQTtNQUFBO01BQUEsZUFBczJDOztJQUFqMkM7SUFBTCxXQUFLLFNBQUw7Ozs7b0JDQUQ7TUFBQTtvQ0FBQSxVQUFBO01BQUE7TUFBQTtJQUFBOzs7OyJ9
