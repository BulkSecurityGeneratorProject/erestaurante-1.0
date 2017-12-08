/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from '@angular/common';
import * as i3 from '../../../../../../node_modules/ng-jhipster/src/language/jhi-translate.directive.ngfactory';
import * as i4 from 'ng-jhipster/src/language/jhi-translate.directive';
import * as i5 from '../../shared/alert/alert-error.component.ngfactory';
import * as i6 from '../../../../../../../../src/main/webapp/app/shared/alert/alert-error.component';
import * as i7 from 'ng-jhipster/src/service/alert.service';
import * as i8 from 'ng-jhipster/src/service/event-manager.service';
import * as i9 from '@ngx-translate/core/src/translate.service';
import * as i10 from '../../../../../../../../src/main/webapp/app/entities/produto/produto-detail.component';
import * as i11 from 'ng-jhipster/src/service/data-util.service';
import * as i12 from '../../../../../../../../src/main/webapp/app/entities/produto/produto.service';
const styles_ProdutoDetailComponent:any[] = ([] as any[]);
export const RenderType_ProdutoDetailComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ProdutoDetailComponent,data:{}});
function View_ProdutoDetailComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      3,'a',([] as any[]),(null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.openFile(_co.produto.fotoContentType,_co.produto.foto)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),0,'img',[['alt','produto image'],['style',
          'max-width: 100%']],[[8,'src',4]],(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
      [' ',', ',' ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = ((('data:' + _co.produto.fotoContentType) + ';base64,') + _co.produto.foto);
    _ck(_v,4,0,currVal_0);
    const currVal_1:any = _co.produto.fotoContentType;
    const currVal_2:any = _co.byteSize(_co.produto.foto);
    _ck(_v,6,0,currVal_1,currVal_2);
  });
}
function View_ProdutoDetailComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      3,'a',([] as any[]),[[1,'target',0],[8,'href',4]],[[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
      [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),
      [' ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_2:any = _ck(_v,4,0,'/imposto',((_co.produto.imposto == null)? (null as any): _co.produto.imposto.id));
    _ck(_v,3,0,currVal_2);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = i0.ɵnov(_v,3).target;
    const currVal_1:any = i0.ɵnov(_v,3).href;
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_3:any = ((_co.produto.imposto == null)? (null as any): _co.produto.imposto.id);
    _ck(_v,5,0,currVal_3);
  });
}
function View_ProdutoDetailComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),194,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      4,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
      'eRestauranteApp.produto.detail.title']],(null as any),(null as any),(null as any),
      i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
      (null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,'jhiTranslate']},
      (null as any)),(_l()(),i0.ɵted((null as any),['Produto'])),(_l()(),i0.ɵted((null as any),
      [' ',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),0,'hr',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),1,'jhi-alert-error',([] as any[]),(null as any),
          (null as any),(null as any),i5.View_JhiAlertErrorComponent_0,i5.RenderType_JhiAlertErrorComponent)),
      i0.ɵdid(180224,(null as any),0,i6.JhiAlertErrorComponent,[i7.JhiAlertService,
          i8.JhiEventManager,i9.TranslateService],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          158,'dl',[['class','row-md jh-entity-details']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.codigo']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Codigo'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'dd',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.nome']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Nome'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'dd',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.fornecedor']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Fornecedor'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),4,'dd',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          3,'dt',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'eRestauranteApp.produto.estoque']],(null as any),(null as any),(null as any),
          i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
          (null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
              'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Estoque'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          4,'dd',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.valor']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Valor'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),5,'dd',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),2,'span',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),i0.ɵppd(4),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.preco']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Preco'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),5,'dd',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),2,'span',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),i0.ɵppd(4),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.foto']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Foto'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'dd',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ProdutoDetailComponent_2)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.descricao']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Descricao'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),4,'dd',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          3,'dt',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'eRestauranteApp.produto.html']],(null as any),(null as any),(null as any),
          i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
          (null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
              'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Html'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          4,'dd',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.observacao']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Observacao'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),4,'dd',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          3,'dt',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'eRestauranteApp.produto.opcional']],(null as any),(null as any),(null as any),
          i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
          (null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
              'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Opcional'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          4,'dd',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.adicional']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Adicional'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),4,'dd',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          3,'dt',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'eRestauranteApp.produto.unidade']],(null as any),(null as any),(null as any),
          i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
          (null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
              'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Unidade'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          5,'dd',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),2,'span',([] as any[]),(null as any),(null as any),
          (null as any),i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['',''])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),3,'dt',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),2,'span',[['jhiTranslate','eRestauranteApp.produto.imposto']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Imposto'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'dd',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ProdutoDetailComponent_3)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),7,'button',[['class','btn btn-info'],['type','submit']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
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
              const pd_0:any = ((<any>i0.ɵnov(_v,183).onClick()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.RouterLink,
          [i1.Router,i1.ActivatedRoute,[8,(null as any)],i0.Renderer2,i0.ElementRef],
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
    const currVal_0:any = 'eRestauranteApp.produto.detail.title';
    _ck(_v,4,0,currVal_0);
    const currVal_2:any = 'eRestauranteApp.produto.codigo';
    _ck(_v,17,0,currVal_2);
    const currVal_4:any = 'eRestauranteApp.produto.nome';
    _ck(_v,28,0,currVal_4);
    const currVal_6:any = 'eRestauranteApp.produto.fornecedor';
    _ck(_v,39,0,currVal_6);
    const currVal_8:any = 'eRestauranteApp.produto.estoque';
    _ck(_v,50,0,currVal_8);
    const currVal_10:any = 'eRestauranteApp.produto.valor';
    _ck(_v,61,0,currVal_10);
    const currVal_12:any = 'eRestauranteApp.produto.preco';
    _ck(_v,73,0,currVal_12);
    const currVal_14:any = 'eRestauranteApp.produto.foto';
    _ck(_v,85,0,currVal_14);
    const currVal_15:any = _co.produto.foto;
    _ck(_v,91,0,currVal_15);
    const currVal_16:any = 'eRestauranteApp.produto.descricao';
    _ck(_v,96,0,currVal_16);
    const currVal_18:any = 'eRestauranteApp.produto.html';
    _ck(_v,107,0,currVal_18);
    const currVal_20:any = 'eRestauranteApp.produto.observacao';
    _ck(_v,118,0,currVal_20);
    const currVal_22:any = 'eRestauranteApp.produto.opcional';
    _ck(_v,129,0,currVal_22);
    const currVal_24:any = 'eRestauranteApp.produto.adicional';
    _ck(_v,140,0,currVal_24);
    const currVal_26:any = 'eRestauranteApp.produto.unidade';
    _ck(_v,151,0,currVal_26);
    const currVal_27:any = i0.ɵinlineInterpolate(1,'',('eRestauranteApp.Unidade.' + _co.produto.unidade),
        '');
    _ck(_v,157,0,currVal_27);
    const currVal_29:any = 'eRestauranteApp.produto.imposto';
    _ck(_v,163,0,currVal_29);
    const currVal_30:any = _co.produto.imposto;
    _ck(_v,169,0,currVal_30);
    const currVal_31:any = 'entity.action.back';
    _ck(_v,178,0,currVal_31);
    const currVal_32:any = 'true';
    const currVal_33:any = _ck(_v,186,0,'/',_ck(_v,185,0,_ck(_v,184,0,(('produto/' + _co.produto.id) + '/edit'))));
    _ck(_v,183,0,currVal_32,currVal_33);
    const currVal_34:any = 'entity.action.edit';
    _ck(_v,191,0,currVal_34);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = _co.produto.id;
    _ck(_v,6,0,currVal_1);
    const currVal_3:any = _co.produto.codigo;
    _ck(_v,23,0,currVal_3);
    const currVal_5:any = _co.produto.nome;
    _ck(_v,34,0,currVal_5);
    const currVal_7:any = _co.produto.fornecedor;
    _ck(_v,45,0,currVal_7);
    const currVal_9:any = _co.produto.estoque;
    _ck(_v,56,0,currVal_9);
    const currVal_11:any = i0.ɵunv(_v,67,0,_ck(_v,68,0,i0.ɵnov((<any>_v.parent),0),
        _co.produto.valor,'BRL',true,'.2-2'));
    _ck(_v,67,0,currVal_11);
    const currVal_13:any = i0.ɵunv(_v,79,0,_ck(_v,80,0,i0.ɵnov((<any>_v.parent),0),
        _co.produto.preco,'BRL',true,'.2-2'));
    _ck(_v,79,0,currVal_13);
    const currVal_17:any = _co.produto.descricao;
    _ck(_v,102,0,currVal_17);
    const currVal_19:any = _co.produto.html;
    _ck(_v,113,0,currVal_19);
    const currVal_21:any = _co.produto.observacao;
    _ck(_v,124,0,currVal_21);
    const currVal_23:any = _co.produto.opcional;
    _ck(_v,135,0,currVal_23);
    const currVal_25:any = _co.produto.adicional;
    _ck(_v,146,0,currVal_25);
    const currVal_28:any = _co.produto.unidade;
    _ck(_v,158,0,currVal_28);
  });
}
export function View_ProdutoDetailComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i2.CurrencyPipe,[i0.LOCALE_ID]),(_l()(),i0.ɵted((null as any),
      [' '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_ProdutoDetailComponent_1)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      [' ']))],(_ck,_v) => {
    var _co:i10.ProdutoDetailComponent = _v.component;
    const currVal_0:any = _co.produto;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
export function View_ProdutoDetailComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-produto-detail',
      ([] as any[]),(null as any),(null as any),(null as any),View_ProdutoDetailComponent_0,
      RenderType_ProdutoDetailComponent)),i0.ɵdid(245760,(null as any),0,i10.ProdutoDetailComponent,
      [i8.JhiEventManager,i11.JhiDataUtils,i12.ProdutoService,i1.ActivatedRoute],(null as any),
      (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ProdutoDetailComponentNgFactory:i0.ComponentFactory<i10.ProdutoDetailComponent> = i0.ɵccf('jhi-produto-detail',
    i10.ProdutoDetailComponent,View_ProdutoDetailComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9wcm9kdXRvL3Byb2R1dG8tZGV0YWlsLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL21mZXJuYW5kZXMvZXJlc3RhdXJhbnRlL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcHJvZHV0by9wcm9kdXRvLWRldGFpbC5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL21mZXJuYW5kZXMvZXJlc3RhdXJhbnRlL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcHJvZHV0by9wcm9kdXRvLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9wcm9kdXRvL3Byb2R1dG8tZGV0YWlsLmNvbXBvbmVudC50cy5Qcm9kdXRvRGV0YWlsQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiIDxkaXYgKm5nSWY9XCJwcm9kdXRvXCI+IDxoMj48c3BhbiBqaGlUcmFuc2xhdGU9XCJlUmVzdGF1cmFudGVBcHAucHJvZHV0by5kZXRhaWwudGl0bGVcIj5Qcm9kdXRvPC9zcGFuPiB7e3Byb2R1dG8uaWR9fTwvaDI+IDxocj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGRsIGNsYXNzPVwicm93LW1kIGpoLWVudGl0eS1kZXRhaWxzXCI+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XCJlUmVzdGF1cmFudGVBcHAucHJvZHV0by5jb2RpZ29cIj5Db2RpZ288L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Byb2R1dG8uY29kaWdvfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XCJlUmVzdGF1cmFudGVBcHAucHJvZHV0by5ub21lXCI+Tm9tZTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7cHJvZHV0by5ub21lfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XCJlUmVzdGF1cmFudGVBcHAucHJvZHV0by5mb3JuZWNlZG9yXCI+Rm9ybmVjZWRvcjwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7cHJvZHV0by5mb3JuZWNlZG9yfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XCJlUmVzdGF1cmFudGVBcHAucHJvZHV0by5lc3RvcXVlXCI+RXN0b3F1ZTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7cHJvZHV0by5lc3RvcXVlfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XCJlUmVzdGF1cmFudGVBcHAucHJvZHV0by52YWxvclwiPlZhbG9yPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3twcm9kdXRvLnZhbG9yIHwgY3VycmVuY3k6J0JSTCc6dHJ1ZTonLjItMid9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cImVSZXN0YXVyYW50ZUFwcC5wcm9kdXRvLnByZWNvXCI+UHJlY288L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Byb2R1dG8ucHJlY28gfCBjdXJyZW5jeTonQlJMJzp0cnVlOicuMi0yJ319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVwiZVJlc3RhdXJhbnRlQXBwLnByb2R1dG8uZm90b1wiPkZvdG88L3NwYW4+PC9kdD4gPGRkPiA8ZGl2ICpuZ0lmPVwicHJvZHV0by5mb3RvXCI+IDxhIChjbGljayk9XCJvcGVuRmlsZShwcm9kdXRvLmZvdG9Db250ZW50VHlwZSwgcHJvZHV0by5mb3RvKVwiPiA8aW1nIFtzcmNdPVwiJ2RhdGE6JyArIHByb2R1dG8uZm90b0NvbnRlbnRUeXBlICsgJztiYXNlNjQsJyArIHByb2R1dG8uZm90b1wiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlXCIgYWx0PVwicHJvZHV0byBpbWFnZVwiLz4gPC9hPiB7e3Byb2R1dG8uZm90b0NvbnRlbnRUeXBlfX0sIHt7Ynl0ZVNpemUocHJvZHV0by5mb3RvKX19IDwvZGl2PiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVwiZVJlc3RhdXJhbnRlQXBwLnByb2R1dG8uZGVzY3JpY2FvXCI+RGVzY3JpY2FvPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3twcm9kdXRvLmRlc2NyaWNhb319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVwiZVJlc3RhdXJhbnRlQXBwLnByb2R1dG8uaHRtbFwiPkh0bWw8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Byb2R1dG8uaHRtbH19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVwiZVJlc3RhdXJhbnRlQXBwLnByb2R1dG8ub2JzZXJ2YWNhb1wiPk9ic2VydmFjYW88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Byb2R1dG8ub2JzZXJ2YWNhb319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVwiZVJlc3RhdXJhbnRlQXBwLnByb2R1dG8ub3BjaW9uYWxcIj5PcGNpb25hbDwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7cHJvZHV0by5vcGNpb25hbH19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVwiZVJlc3RhdXJhbnRlQXBwLnByb2R1dG8uYWRpY2lvbmFsXCI+QWRpY2lvbmFsPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3twcm9kdXRvLmFkaWNpb25hbH19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVwiZVJlc3RhdXJhbnRlQXBwLnByb2R1dG8udW5pZGFkZVwiPlVuaWRhZGU8L3NwYW4+PC9kdD4gPGRkPiA8c3BhbiBqaGlUcmFuc2xhdGU9XCJ7eydlUmVzdGF1cmFudGVBcHAuVW5pZGFkZS4nICsgcHJvZHV0by51bmlkYWRlfX1cIj57e3Byb2R1dG8udW5pZGFkZX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVwiZVJlc3RhdXJhbnRlQXBwLnByb2R1dG8uaW1wb3N0b1wiPkltcG9zdG88L3NwYW4+PC9kdD4gPGRkPiA8ZGl2ICpuZ0lmPVwicHJvZHV0by5pbXBvc3RvXCI+IDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2ltcG9zdG8nLCBwcm9kdXRvLmltcG9zdG8/LmlkXVwiPnt7cHJvZHV0by5pbXBvc3RvPy5pZH19PC9hPiA8L2Rpdj4gPC9kZD4gPC9kbD4gPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cInByZXZpb3VzU3RhdGUoKVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+IDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XCJlbnRpdHkuYWN0aW9uLmJhY2tcIj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtyb3V0ZXJMaW5rXT1cIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3Byb2R1dG8vJysgcHJvZHV0by5pZCArICcvZWRpdCd9IH1dXCIgcmVwbGFjZVVybD1cInRydWVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPiA8c3BhbiBjbGFzcz1cImZhIGZhLXBlbmNpbFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XCJlbnRpdHkuYWN0aW9uLmVkaXRcIj4gRWRpdDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiAiLCI8amhpLXByb2R1dG8tZGV0YWlsPjwvamhpLXByb2R1dG8tZGV0YWlsPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQW9oQztNQUFBLHdFQUEwQjthQUFBLHVCQUFDO01BQUE7UUFBQTtRQUFBO1FBQUc7VUFBQTtVQUFBO1FBQUE7UUFBSDtNQUFBLGdDQUE2RCxzQ0FBQzthQUFBO1VBQUE7VUFBQSxnQkFBd0gsc0NBQUs7TUFBQTs7SUFBeEg7SUFBTCxXQUFLLFNBQUw7SUFB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
