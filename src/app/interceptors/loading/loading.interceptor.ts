import {HttpEvent, HttpInterceptorFn} from '@angular/common/http';
import {finalize, Observable} from "rxjs/dist/types";
import {LoaderService} from "../../services/loader/loader.service";
import {inject} from "@angular/core";

let totalRequests = 0;
const loadingService = inject(LoaderService);

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  totalRequests++;
  loadingService.setLoading(true);
  return next.apply(req).pipe(
    finalize(() => {
      totalRequests--;
      if (totalRequests == 0) {
        loadingService.setLoading(false);
      }
    })
  );
};
