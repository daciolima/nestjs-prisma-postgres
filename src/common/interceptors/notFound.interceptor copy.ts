import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    UnauthorizedException,
} from '@nestjs/common';
import { Observable, catchError } from 'rxjs';
import { NotFoundError } from '../errors/NotFoundError';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            catchError(error => {
                if (error instanceof NotFoundError) {
                    throw new UnauthorizedException(error.message);
                } else {
                    throw error;
                }
            }),
        );
    }
}
