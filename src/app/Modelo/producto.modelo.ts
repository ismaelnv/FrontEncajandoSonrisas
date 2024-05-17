import { IImagen } from "./imagen.modelo";

export interface IProducto {
    
    cod_pro: number;
	nombre_pro: String ;
	fecha_cre: Date;
	fecha_actu: Date ;
	codigoProducto: number;
	descripcion: String;
	precio: DoubleRange;
	condicion_pro: number;
	estado: boolean;
	imagen_pro: String;
	tamanio_pro: String;
	material: String;
	peso_pro: DoubleRange;
	edad_recomendada: number;
	medidas: DoubleRange;
	cantidadV: number;
    imagenes:IImagen[];
}