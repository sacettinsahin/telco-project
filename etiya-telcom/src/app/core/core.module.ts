import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumeratePipe } from './pipes/enumerate.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './auth/pages/login/login.component';
import { StorageModule } from './storage/storage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LocalStorageService } from './storage/services/local-storage.service';
import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
import { StorageService } from './storage/services/storageService';

export function jwtOptionsFactory(storageService: StorageService) {
  return {
    tokenGetter: () => {
      return storageService.get('token');
    },
    allowedDomains: ['localhost:3000'],
  };
}

@NgModule({
  declarations: [
    EnumeratePipe,
    PaginationPipe,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    StorageModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  exports: [
    EnumeratePipe,
    PaginationPipe,
    LoginComponent,

  ]
})
export class CoreModule { }
