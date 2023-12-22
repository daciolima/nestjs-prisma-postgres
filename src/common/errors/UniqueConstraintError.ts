import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstraintError extends ConflictError {
    constructor(e: PrismaClientError) {
        const uniqueField = e.meta.target;

        super(`o valor ${uniqueField} já existe no database.`);
    }
}
