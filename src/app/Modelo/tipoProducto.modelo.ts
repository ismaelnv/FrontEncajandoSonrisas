import { IProducto } from "./producto.modelo";

export interface ITipoProducto {

    codigoTP:           number;
    nombre:             string;
    fechaCreacion:      Date;
    fechaActualizacion: Date;
    estado:             boolean;
    productos: IProducto[];
}
