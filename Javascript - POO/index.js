// importacion de clases

import {Cliente} from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

const  cliente = new Cliente('Leonardo','13805020','123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente,'1111'));
// const  cliente2 = new Cliente('Maria','16979808','16979808');

const empleado = new Empleado('Juan Perez','12434343',10000);
empleado.asignarClave('12345');
const gerente = new Gerente ('Pedro Rivas','13424363',12000);
gerente.asignarClave('45678');
const director = new Director('Claudio Rodriguez','15643432',15000);
director.asignarClave('97531');

console.log(SistemaAutenticacion.login(empleado,'12345'));
console.log(SistemaAutenticacion.login(gerente,'45678'));
console.log(SistemaAutenticacion.login(director,'97531'));
