//Componentes
const condiciones = Vue.component('condiciones', {
    template: '#condiciones',
    methods:{
        /*Funcion para saber si la lista esta expandida o no*/
        cambioEstado(id,cate){
            let id2 = id-1;
            let listaCat = cate[id2];
            let txtBtnCat = cate[id2].btnExpandir;
            if(listaCat.listaReducida == true){
                listaCat.listaReducida = false;
                txtBtnCat = 'Ver más';
            }else{
                listaCat.listaReducida = true;
                txtBtnCat = 'Ver menos';
            }

            return{
                lista: listaCat.listaReducida,
                btn: txtBtnCat,
                id: id,
                cate: cate,
            }
        },

        /*Funcion contar condiciones */
        contarCondiciones(id, cate){
            let id2 = id-1;
            let nCat = cate[id2].condicion.length;
            return nCat;
        },

    },
    data(){
        return data
    }    
});

const protocolo = Vue.component('protocolo',{
    template:'#protocolo',
    methods:{
        /*Funcion para total */
        mostrarTotal(arrayPrecio){
            let precioFinal = 0;
            let temp = 0;
            for(let i=0; i < arrayPrecio.length; i++){
                temp = parseFloat(arrayPrecio[i]);
                precioFinal += temp;
            }
            return precioFinal.toFixed(2);
        },

        urlID(urlID){
            let id = urlID;
            let newID;
            if(id <= this.condiciones_cat.length){
                newID = (id - 1);
                return newID;   
                console.log(newID);
            }else{
                this.$router.push('/');
            }
        }

    },
    data(){
        return data
    }

});  



const redireccionar = {template: `<span>{{ $router.push('/') }}</span>`}
//Rutas
const routes = [

    {path: '/', component: condiciones},
    {path: '/protocolo/:id', component: protocolo},
    {path: '/protocolo/', component: redireccionar},
]


const router = new VueRouter({
    routes
});



//Variable que contiene los datos
const data = {
    total: [],
    condiciones_cat: [
        {id:1, listaReducida:true, btnExpandir: 'Ver menos', num:'2', relacional: 1,categoria: 'categoria 2', titulo: 'CONDICIONES AUTOINMUNES EN ETAPA INICIAL (UN AÑO O MENOS CON LA CONDICION)', 
            condicion: [
                {n: '35', title: 'Esclerosis multiple. Etapa inicial (1 año o menos)'},
                {n: '36', title: 'Sclerodemas. Etapa inicial (1 año o menos)'},
                {n: '37', title: 'Dermatitis Atópica. Etapa inicial (1 año o menos)'},
                {n: '38', title: 'Artritis Remautoidea. Etapa inicial (1 año o menos)'},
                {n: '39', title: 'Epidermólisis Bullosa. Etapa inicial (1 año o menos)'},
                {n: '40', title: 'Lupus Eritematos Sistémico. Etapa inicial (1 año o menos)'},
                {n: '41', title: 'Esclerosis Lateral Amiotrófica. Etapa inicial (1 año o menos) 2 y 3'},
                {n: '42', title: 'Diabetes Mellitus Tipo I. Etapa inicial (1 año o menos)'},
                {n: '43', title: 'Enfermedad de Addison. Etapa inicial (1 año o menos)'},
                {n: '44', title: 'Miastenia Grave. Etapa inicial (1 año o menos)'},
                {n: '45', title: 'Síndrome Guillain-Barré. Etapa inicial (1 año o menos)'},
                {n: '46', title: 'Hepatitis B'},             
            ],
        },
        {id:2, num:'2', listaReducida:true, btnExpandir: 'Ver menos', relacional: 2,categoria: 'categoria 4', titulo: 'CONDICIONES AUTOINMUNES EN ETAPA AVANZADA (DOS AÑOS O MAS CON LA CONDICION)', 
            condicion: [ //----
                {n: '47', title: 'Esclerosis multiple. Etapa inicial (2 años o menos)'},
                {n: '48', title: 'Sclerodemas. Etapa inicial (2 años o menos)'},
                {n: '49', title: 'Dermatitis Atópica. Etapa inicial (2 años o menos)'},
                {n: '50', title: 'Artritis Remautoidea. Etapa inicial (2 años o menos)'},
                {n: '51', title: 'Epidermólisis Bullosa. Etapa inicial (2 años o menos)'},
                {n: '52', title: 'Lupus Eritematos Sistémico. Etapa inicial (2 años o menos)'},
                {n: '53', title: 'Esclerosis Lateral Amiotrófica. Etapa inicial (2 años o menos) 2 y 3'},
                {n: '54', title: 'Diabetes Mellitus Tipo I. Etapa inicial (2 años o menos)'},
                {n: '55', title: 'Enfermedad de Addison. Etapa inicial (2 años o menos)'},
                {n: '56', title: 'Miastenia Grave. Etapa inicial (2 años o menos)'},
                {n: '57', title: 'Síndrome Guillain-Barré. Etapa inicial (2 años o menos)'},
                {n: '58', title: 'Hepatitis B'},    
            ],
        },
        {id:3, num:'3', listaReducida:true, btnExpandir: 'Ver menos',relacional: 3 ,categoria: 'categoria 3', titulo: 'CONDICIONES PROGRESIVAS DE LA PIEL ETAPAS 1 Y 2', 
            condicion: [ //listo
                {n: '22', title: 'Piel Etapa 2 y 3'},
                       
            ],
        },
        {id:4, num:'4', listaReducida:true, btnExpandir: 'Ver menos', relacional: 4,categoria: 'categoria 4', titulo: 'CONDICIONES PROGRESIVAS DE LA PIEL ETAPAS 3 Y 4', 
            condicion: [
                {n: '34', title: 'piel Etapa 3 y 4'},                           
            ],
        },
        {id:5, listaReducida:true, btnExpandir: 'Ver menos', num:'4', relacional: 5,categoria: 'categoria 2', titulo: 'CONDICIONES DE TRANSMISION SEXUAL ETAPA INICIAL (UN AÑO O MENOS CON LA CONDICION)', 
            condicion: [
                {n: '92', title: 'Clamidia. Etapa inicial'},
                {n: '93', title: 'Herpes genital. Etapa inicial'},
                {n: '94', title: 'Gonorrea. Etapa inicial'},
                {n: '95', title: 'Sífilis. Etapa inicial'},
                {n: '96', title: 'Virus del papiloma humano. Etapa inicial'},
                {n: '97', title: 'Tricomoniasis. Etapa inicial'},                          
            ],
        },
        {id:6, num:'6', listaReducida:true, btnExpandir: 'Ver menos', relacional: 6,categoria: 'categoria 4', titulo: 'CONDICIONES DE TRANSMISION SEXUAL ETAPA AVANZADA (DOS O MAS AÑOS CON LA CONDICION)', 
            condicion: [
                {n: '131', title: 'Clamidia. Etapa aguda'},
                {n: '132', title: 'Herpes genital. Etapa aguda'},
                {n: '133', title: 'Gonorrea. Etapa aguda'},
                {n: '134', title: 'Sífilis.  Etapa aguda'},
                {n: '135', title: 'Virus del papiloma humano. Etapa aguda'},
                {n: '136', title: 'Tricomoniasis. Etapa aguda'},                      
            ],
        },
        {id:7, listaReducida:true, btnExpandir: 'Ver menos', num:'7',relacional: 7, categoria: 'categoria 2', titulo: 'CONDICIONES DEL SISTEMA RESPIRATORIO ETAPA INICIAL (UN AÑO O MENOS  CON LA CONDICION)', 
            condicion: [
                {n: '156', title: 'Insuficiencia respiratoria. Etapa inicial'},
                {n: '157', title: 'Rinosinusitis. Etapa inicial'},
                {n: '158', title: 'Faringoamigdalitis aguda (angina). Etapa inicial'},
                {n: '159', title: 'Difteria. Etapa inicial'},
                {n: '160', title: 'Enfermedades de la laringe. Etapa inicial'},
                {n: '161', title: 'Bronquitis aguda. Etapa inicial'},
                {n: '162', title: 'Tos ferina (Tos convulsiva). Etapa inicial'},
                {n: '163', title: 'Enfermedad pulmonar obstructiva crónica. Etapa inicial'},                           
            ],
        },
        {id:8, num:'8', listaReducida:true, btnExpandir: 'Ver menos', relacional: 8,categoria: 'categoria 4', titulo: 'CONDICIONES DEL SISTEMA RESPIRATORIO ETAPA AVANZADA (DOS AÑOS O  MAS  CON LA CONDICION)', 
            condicion: [
                {n: '164', title: 'Insuficiencia respiratoria. Etapa aguda'},
                {n: '165', title: 'Rinosinusitis. Etapa aguda'},
                {n: '166', title: 'Faringoamigdalitis aguda (angina). Etapa aguda'},
                {n: '167', title: 'Difteria. Etapa aguda'},
                {n: '168', title: 'Enfermedades de la laringe. Etapa aguda'},
                {n: '169', title: 'Bronquitis aguda. Etapa aguda'},
                {n: '170', title: 'Tos ferina (Tos convulsiva). Etapa aguda'},
                {n: '171', title: 'Enfermedad pulmonar obstructiva crónica. Etapa aguda'},                                         
            ],
        },
        {id:9, listaReducida:true, btnExpandir: 'Ver menos', num:'9', relacional: 9,categoria: 'categoria 2', titulo: 'CONDICIONES INFLAMATORIAS EN ETAPA INICIAL (UN AÑO O MENOS CON LA CONDICION)', 
            condicion: [
                {n: '59', title: 'Celulitis periorbitaria. Etapa inicial'},
                {n: '60', title: 'Cerebritis. Etapa inicial'},
                {n: '61', title: 'Cervicitis. Etapa inicial'},
                {n: '62', title: 'Cistitis insterticial. Etapa inicial'},
                {n: '63', title: 'Coriorretinitis. Etapa inicial'},
                {n: '64', title: 'Coriza. Etapa inicial'},
                {n: '65', title: 'Enfermedad de Crohn. Etapa inicial'},
                {n: '66', title: 'Bartolinitis. Etapa inicial'},
                {n: '67', title: 'Blefaritis. Etapa inicial'},
                {n: '68', title: 'Dermatósis ampollar. Etapa inicial'},
                {n: '69', title: 'Enfermedad pélvica inflamatoria. Etapa inicial'},
                {n: '70', title: 'Esofagitis. Etapa inicial'},
                {n: '71', title: 'Fascitis. Etapa inicial'},
                {n: '72', title: 'Fascitis plantar. Etapa inicial'},
                {n: '73', title: 'Gingivitis. Etapa inicial '},
                {n: '74', title: 'Glomerulonefritis. Etapa inicial'},
                {n: '75', title: 'Tiroiditis de Hashimoto. Etapa inicial'},
                {n: '76', title: 'Neurutis. Etapa inicial'},
                {n: '77', title: 'Pancreatitis aguda. Etapa inicial'},
                {n: '78', title: 'Pancreatitis crónica. Etapa inicial'},
                {n: '79', title: 'Pancreatitis necrosante. Etapa inicial'},
                {n: '80', title: 'Patologías del conducto auditivo. Etapa inicial'},
                {n: '81', title: 'Pericarditis. Etapa inicial'},
                {n: '82', title: 'Peritonitis. Etapa inicial'},
                {n: '83', title: 'Rinitis. Etapa inicial'},
                {n: '84', title: 'Tendinosis. Etapa inicial'},
                {n: '85', title: 'Tiroiditis. Etapa inicial'},
                {n: '86', title: 'Uretritis. Etapa inicial'},
                {n: '87', title: 'Uveitis. Etapa inicial'},
                {n: '88', title: 'Vaginitis. Etapa inicial'},
                {n: '89', title: 'Vulvitis. Etapa inicial'},
                {n: '90', title: 'Vulvo vaginitis candidiasica. Etapa inicial'},
                {n: '91', title: 'Diverticulitis'},           
            ],
        },
        {id:10, num:'10', listaReducida:true, btnExpandir: 'Ver menos', relacional: 10,categoria: 'categoria 3', titulo: 'CONDICIONES INFLAMATORIAS EN ETAPA AVANZADA (DOS AÑOS O MAS CON LA CONDICION)', 
            condicion: [
                {n: '98', title: 'Celulitis periorbitaria. Etapa aguda'},
                {n: '99', title: 'Cerebritis. Etapa aguda'},
                {n: '100', title: 'Cervicitis. Etapa aguda'},
                {n: '101', title: 'Cistitis insterticial. Etapa aguda'},
                {n: '102', title: 'Coriorretinitis. Etapa aguda'},
                {n: '103', title: 'Coriza. Etapa aguda'},
                {n: '104', title: 'Enfermedad de Crohn. Etapa aguda'},
                {n: '105', title: 'Bartolinitis. Etapa aguda'},
                {n: '106', title: 'Blefaritis. Etapa aguda'},
                {n: '107', title: 'Dermatósis ampollar. Etapa aguda'},
                {n: '108', title: 'Enfermedad pélvica inflamatoria. Etapa aguda'},
                {n: '109', title: 'Esofagitis. Etapa aguda'},
                {n: '110', title: 'Fascitis. Etapa aguda'},
                {n: '111', title: 'Fascitis plantar. Etapa aguda'},
                {n: '112', title: 'Gingivitis. Etapa aguda'},
                {n: '113', title: 'Glomerulonefritis. Etapa aguda'},
                {n: '114', title: 'Tiroiditis de Hashimoto. Etapa aguda'},
                {n: '115', title: 'Neurutis. Etapa aguda'},
                {n: '116', title: 'Pancreatitis aguda. Etapa aguda'},
                {n: '117', title: 'Pancreatitis crónica. Etapa aguda'},
                {n: '118', title: 'Pancreatitis necrosante. Etapa aguda'},
                {n: '119', title: 'Patologías del conducto auditivo. Etapa aguda'},
                {n: '120', title: 'Pericarditis. Etapa aguda'},
                {n: '121', title: 'Peritonitis. Etapa aguda'},
                {n: '122', title: 'Rinitis. Etapa aguda'},
                {n: '123', title: 'Tendinosis. Etapa aguda'},
                {n: '124', title: 'Tiroiditis. Etapa aguda'},
                {n: '125', title: 'Uretritis. Etapa aguda'},
                {n: '126', title: 'Uveitis. Etapa aguda'},
                {n: '127', title: 'Vaginitis. Etapa aguda'},
                {n: '128', title: 'Vulvitis. Etapa aguda'},
                {n: '129', title: 'Vulvo vaginitis candidiasica. Etapa aguda'},
                {n: '130', title: 'Diverticulitis'},         
            ],
        },
        {id:11, listaReducida:true, btnExpandir: 'Ver menos', num:'11', relacional: 11,categoria: 'categoria 2', titulo: 'CONDICIONES DE LA PIEL ETAPA INICIAL (UN AÑO O MENOS CON LA CONDICION)', 
            condicion: [
                {n: '138', title: 'Eczema. Etapa inicial'},
                {n: '139', title: 'Acné. Etapa inicial'},
                {n: '140', title: 'Psoriasis. Etapa inicial'},
                {n: '141', title: 'Alopecia. Etapa inicial'},
                {n: '142', title: 'Urticaria. Etapa inicial'},
                {n: '143', title: 'Dermatitis atópica. Etapa inicial'},
                {n: '144', title: 'Verrugas. Etapa inicial'},
                {n: '145', title: 'Pie de atleta. Etapa inicial'},
                {n: '146', title: 'Amiloidosis. Etapa inicial'},                            
            ],
        },
        {id:12, num:'12', listaReducida:true, btnExpandir: 'Ver menos', relacional: 12,categoria: 'categoria 3', titulo: 'CONDICIONES DE LA PIEL ETAPA AVANZADA (DOS O MAS AÑOS CON LA CONDICION)', 
            condicion: [
                {n: '147', title: 'Eczema. Etapa aguda'},
                {n: '148', title: 'Acné. Etapa aguda'},
                {n: '149', title: 'Psoriasis. Etapa aguda'},
                {n: '150', title: 'Alopecia. Etapa aguda'},
                {n: '151', title: 'Urticaria. Etapa aguda'},
                {n: '152', title: 'Dermatitis atópica. Etapa aguda'},
                {n: '153', title: 'Verrugas. Etapa aguda'},
                {n: '154', title: 'Pie de atleta. Etapa aguda'},
                {n: '155', title: 'Amiloidosis. Etapa aguda'},    
            ],
        },
        {id:13, num:'13', listaReducida:true, btnExpandir: 'Ver menos',relacional: 13, categoria: 'categoria 2', titulo: 'CONDICIONES PROGRESIVAS DEL SISTEMA DIGESTIVO ETAPAS 1 Y 2', 
            condicion: [
                {n: '1', title: 'Esófago Etapa 1 y 2'},
                {n: '2', title: 'Estomago Etapa 1 y 2'},
                {n: '3', title: 'Colon Etapa 1 y 2'},
                {n: '4', title: 'Colorectal Etapa 1 y 2'},
                {n: '5', title: 'Garganta Etapa 1 y 2'},
            ],
        },
        {id:14, num:'14', listaReducida:true, btnExpandir: 'Ver menos',relacional: 14 ,categoria: 'categoria 4', titulo: 'CONDICIONES PROGRESIVAS DEL SISTEMA DIGESTIVO ETAPAS 3 Y 4', 
            condicion: [ //lista
                {n: '1', title: 'Esófago Etapa 3 y 4'},
                {n: '2', title: 'Estomago Etapa 3 y 4'},
                {n: '3', title: 'Colon Etapa 3 y 4'},
                {n: '4', title: 'Colorectal Etapa 3 y 4'},
                {n: '5', title: 'Garganta Etapa 3 y 4'},
            ],
        },
        {id:15, num:'15', listaReducida:true, btnExpandir: 'Ver menos', relacional: 15,categoria: 'categoria 3', titulo: 'CONDICIONES PROGRESIVAS DEL SISTEMA INMUNE ETAPAS 1 Y 2', 
            condicion: [
                {n: '11', title: 'Mama Etapa 1 y 2'},
                {n: '12', title: 'Pulmones 1 y 2'},
                {n: '13', title: 'Prostatico Etapa 1 y 2'},
                {n: '14', title: 'Higado Etapa 1 y 2'},
                {n: '15', title: 'Huesos Etapa 1 y 2'},
                {n: '16', title: 'Pancreas Etapa 1 y 2'},
                {n: '17', title: 'Vejiga Etapa 1 y 2'},
                {n: '18', title: 'Riñones Etapa 1 y 2'},
                {n: '19', title: 'Tiroides Etapa 1 y 2'},
                {n: '20', title: 'Boca Etapa 1 y 2'},
                {n: '21', title: 'Cabeza Etapa 1 y 2'},
            ],
        },            
         {id:16, num:'16', listaReducida:true, btnExpandir: 'Ver menos', relacional: 16,categoria: 'categoria 4', titulo: 'CONDICIONES PROGRESIVAS DEL SISTEMA INMUNE ETAPAS 3 Y 4', 
            condicion: [//listo
                {n: '23', title: 'Mama Etapa 3 y 4'},
                {n: '24', title: 'Pulmones 3 y 4'},
                {n: '25', title: 'Prostatico Etapa 3 y 4'},
                {n: '26', title: 'Higado Etapa 3 y 4'},
                {n: '27', title: 'Huesos Etapa 3 y 4'},
                {n: '28', title: 'Pancreas Etapa 3 y 4'},
                {n: '29', title: 'Vejiga Etapa 3 y 4'},
                {n: '30', title: 'Riñones Etapa 3 y 4'},
                {n: '31', title: 'Tiroides Etapa 3 y 4'},
                {n: '32', title: 'Boca Etapa 3 y 4'},
                {n: '33', title: 'Cabeza Etapa 3 y 4'},       
            ],
        }, 
        {id:17, num:'17', listaReducida:true, btnExpandir: 'Ver menos', relacional: 17,categoria: 'categoria 4', titulo: 'DEFICIENCIA EN EL SISTEMA INMUNE', 
            condicion: [
                {n: '137', title: 'Deficiencia del sistema inmune'},                                         
            ],
        },
        
    ],

    fases: [
        {
            id: 1, 
            relacional: 13,
            categoria: 'categoria 2', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 4 veces al día', 
            numbotellasmesp1: '10 Botellas', 
            preciop1: 560.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop 2 veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-del-sistema-digestivo-etapas-1-y-2-fase1'
        },
        {   
            id: 2, 
            relacional: 13,
            categoria: 'categoria 2', 
            titulo: 'Fase 2', 
            duracion: '60 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop 2 veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-del-sistema-digestivo-etapas-1-y-2-fase2'
        },
         //*****************************************************************************
        {
            id: 3, 
            relacional: 14,
            categoria: 'categoria 4', 
            titulo: 'Fase 1', 
            duracion: '180 - 240 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '40 ml. 4 veces al día', 
            numbotellasmesp1: '20 Botellas', 
            preciop1: 1120.00,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop cuatro veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-del-sistema-digestivo-etapas-3-y-4-fase1'
        },
        {   
            id: 4, 
            relacional: 14,
            categoria: 'categoria 4', 
            titulo: 'Fase 2', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 2 veces al día', 
            numbotellasmesp1: '5 Botellas', 
            preciop1: 359.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop cuatro veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-del-sistema-digestivo-etapas-3-y-4-fase2'
        },
         //*****************************************************************************
        {
            id: 5,
            relacional: 15, 
            categoria: 'categoria 3', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '32 ml. 4 veces al día', 
            numbotellasmesp1: '16 Botellas', 
            preciop1: 896.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-del-sistema-inmune-etapas-1-y-2-fase1'
        },
        {   
            id: 6, 
            relacional: 15,
            categoria: 'categoria 3', 
            titulo: 'Fase 2', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 2 veces al día', 
            numbotellasmesp1: '5 Botellas', 
            preciop1: 359.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-del-sistema-inmune-etapas-1-y-2-fase2'
        },
         //*****************************************************************************
        {
            id: 7, 
            relacional: 3,
            categoria: 'categoria 3', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '32 ml. 4 veces al día', 
            numbotellasmesp1: '16 Botellas', 
            preciop1: 896.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            producto3: 'WOUND FIXER', 
            dosisp3: 'Aplicar sobre la zona afectada de 2 a 3 veces x dia', 
            numbotellasmesp3:'1 botella', 
            preciop2: '44.95',
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-de-la-piel-etapas-1-y-2-fase1'
        },
        {   
            id: 8, 
            relacional: 3,
            categoria: 'categoria 3', 
            titulo: 'Fase 2', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 2 veces al día', 
            numbotellasmesp1: '5 Botellas', 
            preciop1: 359.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: '54.95',
            producto3: 'WOUND FIXER', 
            dosisp3: 'Aplicar sobre la zona afectada de 2 a 3 veces x dia', 
            numbotellasmesp3:'1 botella', 
            preciop2: 44.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-de-la-piel-etapas-1-y-2-fase2'
        },
         //*****************************************************************************
        {
            id: 9, 
            relacional: 16,
            categoria: 'categoria 4', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '40 ml. 4 veces al día', 
            numbotellasmesp1: '20 Botellas', 
            preciop1: 1120.00,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop cuatro veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-del-sistema-inmune-etapas-3-y-4-fase-1'
        },
        {   
            id: 10, 
            relacional: 16,
            categoria: 'categoria 4', 
            titulo: 'Fase 2', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 2 veces al día', 
            numbotellasmesp1: '5 Botellas', 
            preciop1: 359.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop cuatro veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-del-sistema-inmune-etapas-3-y-4-fase2'
        },
         //*****************************************************************************
        {
            id: 11, 
            relacional: 4,
            categoria: 'categoria 4', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '40 ml. 4 veces al día', 
            numbotellasmesp1: '20 Botellas', 
            preciop1: 1120.00,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop cuatro veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            producto3: 'WOUND FIXER', 
            dosisp3: 'Aplicar sobre la zona afectada de 2 a 3 veces x dia', 
            numbotellasmesp3:'1 botella', 
            preciop2: 44.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-de-la-piel-etapas-3-y-4-fase-1'
        },
        {   
            id: 12, 
            relacional: 4,
            categoria: 'categoria 4', 
            titulo: 'Fase 2', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 2 veces al día', 
            numbotellasmesp1: '5 Botellas', 
            preciop1: 359.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop cuatro veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-progresivas-de-la-piel-etapas-3-y-4-fase-2'
        },
        //*****************************************************************************
        {
            id: 13, 
            relacional:1, /*esto es experimental, puede quitarse */
            categoria: 'categoria 2', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 4 veces al día', 
            numbotellasmesp1: '10 Botellas', 
            preciop1: 560.95,
            urlrel: 'https://biogreencell.com/product/condiciones-autoinmunes-en-etapa-inicial-un-ano-o-menos-con-la-condicion-fase1'               
        },
        {   
            id: 14, 
            relacional:1,
            categoria: 'categoria 2', 
            titulo: 'Fase 2', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            urlrel: 'https://biogreencell.com/product/condiciones-autoinmunes-en-etapa-inicial-un-ano-o-menos-con-la-condicion-fase2'                
        },
        //*****************************************************************************
        {
            id: 15, 
            relacional: 2,
            categoria: 'categoria 4', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '40 ml. 4 veces al día', 
            numbotellasmesp1: '20 Botellas', 
            preciop1: 1120.00,
            urlrel: 'https://biogreencell.com/product/condiciones-autoinmunes-en-etapa-avanzada-dos-anos-o-mas-con-la-condicion-fase1'                
        },
        {   
            id: 16, 
            relacional: 2,
            categoria: 'categoria 4', 
            titulo: 'Fase 2', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 2 veces al día', 
            numbotellasmesp1: '5 Botellas', 
            preciop1: 359.95,
            urlrel: 'https://biogreencell.com/product/condiciones-autoinmunes-en-etapa-avanzada-dos-anos-o-mas-con-la-condicion-fase2'               
        },
         //*****************************************************************************
         {
            id: 171, /*este es el de las inflamatorias */
            relacional: 9,
            categoria: 'categoria 2', 
            titulo: 'Fase 1', 
            duracion: '120 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 4 veces al día', 
            numbotellasmesp1: '10 Botellas', 
            preciop1: 560.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-inflamatorias-en-etapa-inicial-un-ano-o-menos-con-la-condicion-fase1'
        },
        // ------------
        {
            id: 172, /*este es el de las sexuales */
            relacional: 9,
            relacional: 5,
            categoria: 'categoria 2', 
            titulo: 'Fase 1', 
            duracion: '120 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 4 veces al día', 
            numbotellasmesp1: '10 Botellas', 
            preciop1: 560.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-de-transmision-sexual-etapa-inicial-un-ano-o-menos-con-la-condicion-fase1'
        },
        {   
            id: 181, /*este es el de las inflamatorias */
            categoria: 'categoria 2', 
            titulo: 'Fase 2 (Mantenimiento)', 
            duracion: '60 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-inflamatorias-en-etapa-inicial-un-ano-o-menos-con-la-condicion-fase2'
        },
        // ------------
        {   
            id: 182, /*este es el de las sexuales */
            relacional: 5,
            categoria: 'categoria 2', 
            titulo: 'Fase 2 (Mantenimiento)', 
            duracion: '60 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-de-transmision-sexual-etapa-inicial-un-ano-o-menos-con-la-condicion-fase2'
        },
        //*****************************************************************************
        {
            id: 19, 
            relacional: 10,
            categoria: 'categoria 3', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '32 ml. 4 veces al día', 
            numbotellasmesp1: '16 Botellas', 
            preciop1: 896.95,
            urlrel: 'https://biogreencell.com/product/condiciones-inflamatorias-en-etapa-avanzada-dos-anos-o-mas-con-la-condicion-fase1'                
        },
        {   
            id: 20, 
            relacional: 10,
            categoria: 'categoria 3', 
            titulo: 'Fase 2 (Mantenimiento)', 
            duracion: '60 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            urlrel: 'https://biogreencell.com/product/condiciones-inflamatorias-en-etapa-avanzada-dos-anos-o-mas-con-la-condicion-fase2'                
        },
         //*****************************************************************************
         {
            id: 21, 
            relacional: 6,
            categoria: 'categoria 4', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '40 ml. 4 veces al día', 
            numbotellasmesp1: '20 Botellas', 
            preciop1: 1120.00,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop tres veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-de-transmision-sexual-etapa-avanzada-dos-o-mas-anos-con-la-condicion-fase1'
        },
        {   
            id: 22, 
            relacional: 6,
            categoria: 'categoria 4', 
            titulo: 'Fase 2 (Mantenimiento)', 
            duracion: '60 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-de-transmision-sexual-etapa-avanzada-dos-o-mas-anos-con-la-condicion-fase2'
        },
        //*****************************************************************************
        {
            id: 23, 
            relacional: 17,
            categoria: 'categoria 4', 
            titulo: 'Fase 1', 
            duracion: '12 meses.', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '40 ml. 4 veces al día', 
            numbotellasmesp1: '20 Botellas', 
            preciop1: 1120.00,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop tres veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/deficiencia-en-el-sistema-inmune-fase1'
        },
        {   
            id: 24, 
            relacional: 17,
            categoria: 'categoria 4', 
            titulo: 'Fase 2 (Mantenimiento)', 
            duracion: '60 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/deficiencia-en-el-sistema-inmune-fase2'
        },
         //*****************************************************************************
         {
            id: 25, 
            relacional: 11,
            categoria: 'categoria 2', 
            titulo: 'Fase 1', 
            duracion: '120 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 4 veces al día', 
            numbotellasmesp1: '10 Botellas', 
            preciop1: 560.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: '54.95',
            producto3: 'WOUND FIXER', 
            dosisp3: 'Aplicar sobre la zona afectada de 2 a 3 veces x dia', 
            numbotellasmesp3:'1 botella', 
            preciop2: 44.95,
            urlrel: 'https://biogreencell.com/product/condiciones-de-la-piel-etapa-inicial-un-ano-o-menos-con-la-condicion-fase-1'
        },
        {   
            id: 26, 
            relacional: 11,
            categoria: 'categoria 2', 
            titulo: 'Fase 2', 
            duracion: '90 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            producto3: 'WOUND FIXER', 
            dosisp3: 'Aplicar sobre la zona afectada de 2 a 3 veces x dia', 
            numbotellasmesp3:'1 botella', 
            preciop3: 44.95,
            urlrel: 'https://biogreencell.com/product/condiciones-de-la-piel-etapa-inicial-un-ano-o-menos-con-la-condicion-fase-2'
        },
        //*****************************************************************************
        {
            id: 27, 
            relacional: 12,
            categoria: 'categoria 3', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '32 ml. 4 veces al día', 
            numbotellasmesp1: '16 Botellas', 
            preciop1: 896.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-de-la-piel-etapa-avanzada-dos-o-mas-anos-con-la-condicion-fase-1'
        },
        {   
            id: 28, 
            relacional: 12,
            categoria: 'categoria 4', 
            titulo: 'Fase 2 (Mantenimiento)', 
            duracion: '90 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-de-la-piel-etapa-avanzada-dos-o-mas-anos-con-la-condicion-fase-2'
        },
         //*****************************************************************************
         {
            id: 29, 
            relacional: 7,
            categoria: 'categoria 2', 
            titulo: 'Fase 1', 
            duracion: '120 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '20 ml. 4 veces al día', 
            numbotellasmesp1: '10 Botellas', 
            preciop1: 560.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-del-sistema-respiratorio-etapa-inicial-un-ano-o-menos-con-la-condicion-fase1'
        },
        {   
            id: 30, 
            relacional: 7,
            categoria: 'categoria 2', 
            titulo: 'Fase 2 (Mantenimiento)', 
            duracion: '60 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-del-sistema-respiratorio-etapa-inicial-un-ano-o-menos-con-la-condicion-fase2'
        },
         //*****************************************************************************
         {
            id: 31, 
            relacional: 8,
            categoria: 'categoria 4', 
            titulo: 'Fase 1', 
            duracion: '180 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '40 ml. 4 veces al día', 
            numbotellasmesp1: '20 Botellas', 
            preciop1: 1120.00,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: 54.95,
            urlrel: 'https://biogreencell.com/product/condiciones-del-sistema-respiratorio-etapa-avanzada-dos-anos-o-mas-con-la-condicion-fase1'
        },
        {   
            id: 32, 
            relacional: 8,
            categoria: 'categoria 2', 
            titulo: 'Fase 2 (Mantenimiento)', 
            duracion: '60 días', 
            producto1: 'Immune Bio Green Cell', 
            dosisp1: '10 ml. 2 veces al día', 
            numbotellasmesp1: '3 Botellas', 
            preciop1: 249.95,
            producto2: 'Ascorbic Acid', 
            dosisp2: 'Un scoop dos veces al día, mezclado con jugo de frutas o agua', 
            numbotellasmesp2:'1 botella', 
            preciop2: '54.95',
            urlrel: 'https://biogreencell.com/product/condiciones-del-sistema-respiratorio-etapa-avanzada-dos-anos-o-mas-con-la-condicion-fase2'
        },

    ],
}

//Instacia VUE
const vm = new Vue({
    router,
    el: 'main',
    data:{
        //condiciones categoria

    },
});