import { EmpresaModel } from "./empresa.model";

export class EmpleadoModel{
    id?: string;
    nombres?: string;
    apellidos? : string;
    telefono? : string;
    direccion? : string;
    email?: string;
    edad?: string;        
    sueldo?: number;    
    empresaId?: string;
    empresa? : EmpresaModel      
}