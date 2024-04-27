import {AdminLoginRequest,AdminEntity} from "../entities/index"

export interface loginAdminUseCase {
    execute(credentials: AdminLoginRequest): Promise<AdminEntity | null>;
}