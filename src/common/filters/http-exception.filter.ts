import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException) // Classe estará tratando processos do tipo Exception
export class HttpExceptionFilter<T extends HttpException>
    implements ExceptionFilter
{
    // exception saberár lidar com as exception. host contém informaçõees sobre as requisições.
    catch(exception: T, host: ArgumentsHost) {
        // Pegando o contexto
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        // Pegando o status para trabalhar as exception
        const status = exception.getStatus();
        const exceptionResponse = exception.getResponse();

        const error =
            typeof response === 'string'
                ? { message: exceptionResponse }
                : (exceptionResponse as object); // Usou-se o object visto que será usado um spread Operator no retorno

        response.status(status).json({
            // Spread Operator
            ...error,
            timestamp: new Date().toISOString(),
        });
    }
}
