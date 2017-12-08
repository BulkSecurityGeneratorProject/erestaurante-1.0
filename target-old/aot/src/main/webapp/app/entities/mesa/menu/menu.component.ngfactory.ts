/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './menu.component.scss.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory';
import * as i3 from '@ng-bootstrap/ng-bootstrap/alert/alert';
import * as i4 from '@ng-bootstrap/ng-bootstrap/alert/alert-config';
import * as i5 from '@angular/common';
import * as i6 from '../../../../../../../../../src/main/webapp/app/entities/mesa/menu/menu.component';
import * as i7 from 'ng-jhipster/src/service/alert.service';
import * as i8 from '../../../../../../../../../src/main/webapp/app/entities/mesa/mesa.service';
import * as i9 from '@angular/router';
const styles_MenuComponent:any[] = [i0.styles];
export const RenderType_MenuComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_MenuComponent,data:{}});
function View_MenuComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'ngb-alert',[['class',
      'float-right']],(null as any),(null as any),(null as any),i2.View_NgbAlert_0,
      i2.RenderType_NgbAlert)),i1.ɵdid(49152,(null as any),0,i3.NgbAlert,[i4.NgbAlertConfig],
      (null as any),(null as any)),(_l()(),i1.ɵted(0,['Não há mesas ainda!']))],(null as any),
      (null as any));
}
function View_MenuComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),19,'div',[['class',
      'card nopad']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.routear(_v.context.$implicit)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),[' '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),16,'div',[['class','card-body nopad']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      [' '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),13,'div',[['class','row centrado']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),[' '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      3,'div',[['class','col-6']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),[' '])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),0,'span',[['class','mesaimg']],[[4,'background-color',(null as any)]],
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      [' '])),(_l()(),i1.ɵted((null as any),[' '])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),5,'div',[['class','col-6']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted((null as any),[' '])),(_l()(),
      i1.ɵeld(0,(null as any),(null as any),1,'b',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      ['MESA ',''])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),[' ',' '])),(_l()(),i1.ɵted((null as any),[' '])),(_l()(),
      i1.ɵted((null as any),[' '])),(_l()(),i1.ɵted((null as any),[' ']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.mesaColor[_v.context.$implicit.id];
        _ck(_v,8,0,currVal_0);
        const currVal_1:any = _v.context.$implicit.local;
        _ck(_v,14,0,currVal_1);
        const currVal_2:any = _v.context.$implicit.codigo;
        _ck(_v,16,0,currVal_2);
      });
}
function View_MenuComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),[' '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_MenuComponent_3)),i1.ɵdid(802816,(null as any),
          0,i5.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,
              'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),[' ']))],(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.mesas;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
export function View_MenuComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted((null as any),[' '])),(_l()(),i1.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_MenuComponent_1)),i1.ɵdid(16384,
      (null as any),0,i5.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i1.ɵted((null as any),[' '])),(_l()(),i1.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_MenuComponent_2)),i1.ɵdid(16384,
      (null as any),0,i5.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i1.ɵted((null as any),[' ']))],(_ck,_v) => {
    var _co:i6.MenuComponent = _v.component;
    const currVal_0:boolean = !_co.mesas;
    _ck(_v,2,0,currVal_0);
    const currVal_1:any = _co.mesas;
    _ck(_v,5,0,currVal_1);
  },(null as any));
}
export function View_MenuComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'jhi-menu',([] as any[]),
      (null as any),(null as any),(null as any),View_MenuComponent_0,RenderType_MenuComponent)),
      i1.ɵdid(114688,(null as any),0,i6.MenuComponent,[i7.JhiAlertService,i8.MesaService,
          i9.Router],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const MenuComponentNgFactory:i1.ComponentFactory<i6.MenuComponent> = i1.ɵccf('jhi-menu',
    i6.MenuComponent,View_MenuComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9tZXNhL21lbnUvbWVudS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9tZmVybmFuZGVzL2VyZXN0YXVyYW50ZS9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL21lc2EvbWVudS9tZW51LmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9tZXNhL21lbnUvbWVudS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9tZXNhL21lbnUvbWVudS5jb21wb25lbnQudHMuTWVudUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIiA8bmdiLWFsZXJ0IGNsYXNzPVwiZmxvYXQtcmlnaHRcIiAqbmdJZj1cIiFtZXNhc1wiPk7Do28gaMOhIG1lc2FzIGFpbmRhITwvbmdiLWFsZXJ0PiA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJtZXNhc1wiPiA8ZGl2IGNsYXNzPVwiY2FyZCBub3BhZFwiICpuZ0Zvcj1cImxldCBtZXNhIG9mIG1lc2FzXCIgKGNsaWNrKT1cInJvdXRlYXIobWVzYSlcIj4gPGRpdiBjbGFzcz1cImNhcmQtYm9keSBub3BhZFwiPiA8ZGl2IGNsYXNzPVwicm93IGNlbnRyYWRvXCI+IDxkaXYgY2xhc3M9XCJjb2wtNlwiPiA8c3BhbiBjbGFzcz1cIm1lc2FpbWdcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJtZXNhQ29sb3JbbWVzYS5pZF1cIj48L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiY29sLTZcIj4gPGI+TUVTQSB7e21lc2EubG9jYWx9fTwvYj48YnI+IHt7bWVzYS5jb2RpZ299fSA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+ICIsIjxqaGktbWVudT48L2poaS1tZW51PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUM7TUFBQTs0QkFBQSxVQUFBO01BQUEsNkJBQThDOzs7O29CQUFnRTtNQUFBO0lBQUE7SUFBQTtJQUFtRDtNQUFBO01BQUE7SUFBQTtJQUFuRDtFQUFBLGdDQUEyRSxzQ0FBQztNQUFBO01BQUEsMERBQTZCO01BQUEsUUFBQztNQUFBLHdFQUEwQjthQUFBLHVCQUFDO01BQUE7TUFBQSxnQkFBbUIsc0NBQUM7TUFBQTtNQUFBLDBEQUEyRTtNQUFBLFFBQU8sc0NBQUM7TUFBQTtNQUFBLDhCQUFtQixzQ0FBQzthQUFBO1VBQUEsNENBQUc7TUFBQSxlQUF1QjtNQUFBLHdFQUFJO2FBQUEsMkJBQXVCLHNDQUFPO2FBQUEsdUJBQU87OztRQUFwSjtRQUF0QixXQUFzQixTQUF0QjtRQUEwRztRQUFBO1FBQTJCO1FBQUE7Ozs7b0JBQTlUO01BQUE7TUFBK0Isc0NBQUM7VUFBQSw0REFBQTtVQUFBO2NBQUEsMkJBQTBVOzs7SUFBbFQ7SUFBeEIsV0FBd0IsU0FBeEI7Ozs7b0JBQS9HLHNDQUFDO01BQUEsMEVBQUE7TUFBQTtNQUFBLGVBQTZFLHNDQUFDO01BQUEsMEVBQUE7TUFBQTtNQUFBLGVBQWlYOztJQUFoYTtJQUEvQixXQUErQixTQUEvQjtJQUErRjtJQUFqQixXQUFpQixTQUFqQjs7OztvQkNBL0U7TUFBQTthQUFBO21CQUFBO0lBQUE7Ozs7In0=