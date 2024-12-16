import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
  id:1,
  name:'Componentes de PC',
  client:{
    id:1143382912,
    name:'Andres',
    lastName:'Doe',
    phone:'3204659502',
    address:{
      country:'USA',
      city:'Los Angeles',
      street:'One Street',
      number:15
    }
  },
  company:{
    name:'skg Tecnologia',
    nit:12345234
  },
  items:[
    {
      id:1,
      nameProducto:'CPU intel i9',
      price:599,
      quantity:1
    },
    {
      id:2,
      nameProducto:'Teclado mecanico VSG Pulsar',
      price:199,
      quantity:5
    },
    {
      id:3,
      nameProducto:'Pantalla 30\' ',
      price:799,
      quantity:2
    }
  ]

}
