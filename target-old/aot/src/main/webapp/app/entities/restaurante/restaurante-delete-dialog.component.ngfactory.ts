/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../../../../src/main/webapp/app/entities/restaurante/restaurante-delete-dialog.component';
import * as i2 from '@angular/forms';
import * as i3 from '../../../../../../node_modules/ng-jhipster/src/language/jhi-translate.directive.ngfactory';
import * as i4 from 'ng-jhipster/src/language/jhi-translate.directive';
import * as i5 from '../../shared/alert/alert-error.component.ngfactory';
import * as i6 from '../../../../../../../../src/main/webapp/app/shared/alert/alert-error.component';
import * as i7 from 'ng-jhipster/src/service/alert.service';
import * as i8 from 'ng-jhipster/src/service/event-manager.service';
import * as i9 from '@ngx-translate/core/src/translate.service';
import * as i10 from '../../../../../../../../src/main/webapp/app/entities/restaurante/restaurante.service';
import * as i11 from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import * as i12 from '@angular/router';
import * as i13 from '../../../../../../../../src/main/webapp/app/entities/restaurante/restaurante-popup.service';
const styles_RestauranteDeleteDialogComponent:any[] = ([] as any[]);
export const RenderType_RestauranteDeleteDialogComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_RestauranteDeleteDialogComponent,data:{}});
export function View_RestauranteDeleteDialogComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),46,'form',[['name',
      'deleteForm'],['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
      (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
      [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
          (null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],[(null as any),
      'reset']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:i1.RestauranteDeleteDialogComponent = _v.component;
    if (('submit' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,2).onSubmit($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('reset' === en)) {
      const pd_1:any = ((<any>i0.ɵnov(_v,2).onReset()) !== false);
      ad = (pd_1 && ad);
    }
    if (('ngSubmit' === en)) {
      const pd_2:any = ((<any>_co.confirmDelete(_co.restaurante.id)) !== false);
      ad = (pd_2 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.ɵbf,([] as any[]),
      (null as any),(null as any)),i0.ɵdid(16384,(null as any),0,i2.NgForm,[[8,(null as any)],
      [8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i0.ɵprd(2048,(null as any),
      i2.ControlContainer,(null as any),[i2.NgForm]),i0.ɵdid(16384,(null as any),0,
      i2.NgControlStatusGroup,[i2.ControlContainer],(null as any),(null as any)),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      8,'div',[['class','modal-header']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),2,'h4',[['class','modal-title'],['jhiTranslate',
          'entity.delete.title']],(null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
      ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['Confirm delete operation'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),1,'button',[['aria-hidden','true'],['class',
          'close'],['data-dismiss','modal'],['type','button']],(null as any),[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.RestauranteDeleteDialogComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.clear()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['×'])),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),8,'div',[['class','modal-body']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-alert-error',([] as any[]),
      (null as any),(null as any),(null as any),i5.View_JhiAlertErrorComponent_0,i5.RenderType_JhiAlertErrorComponent)),
      i0.ɵdid(180224,(null as any),0,i6.JhiAlertErrorComponent,[i7.JhiAlertService,
          i8.JhiEventManager,i9.TranslateService],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'p',[['jhiTranslate','eRestauranteApp.restaurante.delete.question']],(null as any),
          (null as any),(null as any),i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate'],translateValues:[1,'translateValues']},(null as any)),(_l()(),
          i0.ɵted((null as any),['Are you sure you want to delete this Restaurante?'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),19,'div',[['class','modal-footer']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          7,'button',[['class','btn btn-secondary'],['data-dismiss','modal'],['type',
              'button']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.RestauranteDeleteDialogComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.clear()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-ban']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'entity.action.cancel']],(null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Cancel'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'button',[['class',
          'btn btn-danger'],['type','submit']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-remove']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'span',[['jhiTranslate','entity.action.delete']],(null as any),(null as any),
          (null as any),i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Delete'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' ']))],
      (_ck,_v) => {
        var _co:i1.RestauranteDeleteDialogComponent = _v.component;
        const currVal_7:any = 'entity.delete.title';
        _ck(_v,9,0,currVal_7);
        const currVal_8:any = 'eRestauranteApp.restaurante.delete.question';
        const currVal_9:any = i0.ɵinlineInterpolate(1,'{id: \'',_co.restaurante.id,
            '\'}');
        _ck(_v,22,0,currVal_8,currVal_9);
        const currVal_10:any = 'entity.action.cancel';
        _ck(_v,33,0,currVal_10);
        const currVal_11:any = 'entity.action.delete';
        _ck(_v,42,0,currVal_11);
      },(_ck,_v) => {
        const currVal_0:any = i0.ɵnov(_v,4).ngClassUntouched;
        const currVal_1:any = i0.ɵnov(_v,4).ngClassTouched;
        const currVal_2:any = i0.ɵnov(_v,4).ngClassPristine;
        const currVal_3:any = i0.ɵnov(_v,4).ngClassDirty;
        const currVal_4:any = i0.ɵnov(_v,4).ngClassValid;
        const currVal_5:any = i0.ɵnov(_v,4).ngClassInvalid;
        const currVal_6:any = i0.ɵnov(_v,4).ngClassPending;
        _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
      });
}
export function View_RestauranteDeleteDialogComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-restaurante-delete-dialog',
      ([] as any[]),(null as any),(null as any),(null as any),View_RestauranteDeleteDialogComponent_0,
      RenderType_RestauranteDeleteDialogComponent)),i0.ɵdid(49152,(null as any),0,
      i1.RestauranteDeleteDialogComponent,[i10.RestauranteService,i11.NgbActiveModal,
          i8.JhiEventManager],(null as any),(null as any))],(null as any),(null as any));
}
export const RestauranteDeleteDialogComponentNgFactory:i0.ComponentFactory<i1.RestauranteDeleteDialogComponent> = i0.ɵccf('jhi-restaurante-delete-dialog',
    i1.RestauranteDeleteDialogComponent,View_RestauranteDeleteDialogComponent_Host_0,
    {},{},([] as any[]));
const styles_RestauranteDeletePopupComponent:any[] = ([] as any[]);
export const RenderType_RestauranteDeletePopupComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_RestauranteDeletePopupComponent,data:{}});
export function View_RestauranteDeletePopupComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,([] as any[]),(null as any),(null as any));
}
export function View_RestauranteDeletePopupComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-restaurante-delete-popup',
      ([] as any[]),(null as any),(null as any),(null as any),View_RestauranteDeletePopupComponent_0,
      RenderType_RestauranteDeletePopupComponent)),i0.ɵdid(245760,(null as any),0,
      i1.RestauranteDeletePopupComponent,[i12.ActivatedRoute,i13.RestaurantePopupService],
      (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const RestauranteDeletePopupComponentNgFactory:i0.ComponentFactory<i1.RestauranteDeletePopupComponent> = i0.ɵccf('jhi-restaurante-delete-popup',
    i1.RestauranteDeletePopupComponent,View_RestauranteDeletePopupComponent_Host_0,
    {},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9yZXN0YXVyYW50ZS9yZXN0YXVyYW50ZS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL21mZXJuYW5kZXMvZXJlc3RhdXJhbnRlL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcmVzdGF1cmFudGUvcmVzdGF1cmFudGUtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL21mZXJuYW5kZXMvZXJlc3RhdXJhbnRlL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcmVzdGF1cmFudGUvcmVzdGF1cmFudGUtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvbWZlcm5hbmRlcy9lcmVzdGF1cmFudGUvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9yZXN0YXVyYW50ZS9yZXN0YXVyYW50ZS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cy5SZXN0YXVyYW50ZURlbGV0ZURpYWxvZ0NvbXBvbmVudF9Ib3N0Lmh0bWwiLCJuZzovLy9ob21lL21mZXJuYW5kZXMvZXJlc3RhdXJhbnRlL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcmVzdGF1cmFudGUvcmVzdGF1cmFudGUtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMuUmVzdGF1cmFudGVEZWxldGVQb3B1cENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxmb3JtIG5hbWU9XCJkZWxldGVGb3JtXCIgKG5nU3VibWl0KT1cImNvbmZpcm1EZWxldGUocmVzdGF1cmFudGUuaWQpXCI+IDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4gPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBqaGlUcmFuc2xhdGU9XCJlbnRpdHkuZGVsZXRlLnRpdGxlXCI+Q29uZmlybSBkZWxldGUgb3BlcmF0aW9uPC9oND4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgKGNsaWNrKT1cImNsZWFyKClcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8cCBqaGlUcmFuc2xhdGU9XCJlUmVzdGF1cmFudGVBcHAucmVzdGF1cmFudGUuZGVsZXRlLnF1ZXN0aW9uXCIgdHJhbnNsYXRlVmFsdWVzPVwie2lkOiAne3tyZXN0YXVyYW50ZS5pZH19J31cIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgUmVzdGF1cmFudGU/PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiAoY2xpY2spPVwiY2xlYXIoKVwiPiA8c3BhbiBjbGFzcz1cImZhIGZhLWJhblwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XCJlbnRpdHkuYWN0aW9uLmNhbmNlbFwiPkNhbmNlbDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj4gPHNwYW4gY2xhc3M9XCJmYSBmYS1yZW1vdmVcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVwiZW50aXR5LmFjdGlvbi5kZWxldGVcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9mb3JtPiAiLCI8amhpLXJlc3RhdXJhbnRlLWRlbGV0ZS1kaWFsb2c+PC9qaGktcmVzdGF1cmFudGUtZGVsZXRlLWRpYWxvZz4iLCI8amhpLXJlc3RhdXJhbnRlLWRlbGV0ZS1wb3B1cD48L2poaS1yZXN0YXVyYW50ZS1kZWxldGUtcG9wdXA+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtNQUFBO01BQUE7VUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBd0I7TUFBQTtNQUFBO0lBQUE7SUFBeEI7RUFBQSx1Q0FBQTtNQUFBLG9DQUFBO01BQUEsK0RBQUE7MEJBQUEsa0NBQUE7OEJBQUEsbURBQW1FO2FBQUEsdUJBQUM7TUFBQTtNQUFBLDhCQUEwQixzQ0FBQzthQUFBO1VBQUE7NkNBQUEsVUFBQTtNQUFBLCtEQUEyRDtNQUFBLCtCQUE2QixzQ0FBQzthQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7UUFBNEU7VUFBQTtVQUFBO1FBQUE7UUFBNUU7TUFBQSxnQ0FBOEYsc0NBQWdCO2FBQUEsdUJBQU8sc0NBQUM7YUFBQTtVQUFBLDBEQUF3QjtNQUFBLFFBQUM7TUFBQTthQUFBO2dEQUFBLCtCQUFtQztpQkFBQSx1QkFBQztVQUFBO1VBQUE7YUFBQTtVQUFBLHNFQUEyRztpQkFBQTtNQUFxRCxzQ0FBTztNQUFDO1VBQUE7TUFBMEIsc0NBQUM7VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUFxRTtjQUFBO2NBQUE7WUFBQTtZQUFyRTtVQUFBLGdDQUF1RixzQ0FBQztpQkFBQTtjQUFBLDBEQUErQjtVQUFBLFFBQU07VUFBQTs2Q0FBQSxVQUFBO1VBQUEsK0RBQTBDO1VBQUEsYUFBYSxzQ0FBVTtVQUFBLFFBQUM7VUFBQTtVQUFBLDhCQUE2QyxzQ0FBQztpQkFBQTtjQUFBO01BQWtDLHNDQUFNO1VBQUE7VUFBQTthQUFBO1VBQUEsZ0NBQTBDO01BQWEsc0NBQVU7TUFBTyxzQ0FBUTs7O1FBQTV4QjtRQUF4QixXQUF3QixTQUF4QjtRQUErUTtRQUEyRDtZQUFBO1FBQTlELFlBQUcsVUFBMkQsU0FBOUQ7UUFBc1U7UUFBTixZQUFNLFVBQU47UUFBOEo7UUFBTixZQUFNLFVBQU47O1FBQW4wQjtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFdBQUEscUVBQUE7Ozs7b0JDQUE7TUFBQTtpREFBQSxVQUFBOzBDQUFBOzRCQUFBOzs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtnREFBQSxVQUFBO3lDQUFBO01BQUE7SUFBQTs7Ozs7In0=
