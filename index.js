class usuario {
    nombre= ''
    apellido = ''
    libros = [{}]
    mascotas = []

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        `Usuario: ${this.nombre} ${this.apellido}`
        console.log(getFullName())
    }

//     addMascota(){
//         this.mascotas.push('lagarto')
//         console.log(addMascota())
//     }

//     countMascotas(){
//         return this.mascotas.length
//     }

//     addBook(){
//         this.libros.push({nombre:'El hombre mas rico de babilonia'})
//     }

//     getBookNames(){
//         return Array[this.libros.nombre]
//     }
// }

//  new usuario('Cristobal', 'Espinosa', [{nombre:'El hombre mas rico de babilonia'},{nombre:'Padre rico, padre pobre'}], ['perro','gato','caballo'])