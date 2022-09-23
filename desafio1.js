// class Usuario {
//     constructor(nombre, apellido, libros, mascotas){
//         this.nombre = nombre,
//         this.apellido = apellido,
//         this.libros = libros,
//         this.mascotas = mascotas
//     }

//     getFullName(){
//         return `Usuario: ${this.nombre} ${this.apellido}`
        
//     }

//         addMascota(mascota){
//            return  this.mascotas.push(mascota)
//         }

//         countMascotas(){ 
//             return this.mascotas.length
//         }

//         addBook(titulo, autor){
//             this.libros.push({titulo, autor})
//             }

//         getBookNames(){
//             const bookName = []
//             this.libros.forEach(libro => {bookName.push(libro.titulo) });
//             return bookName
//         }
//     }

//      const usuario1 = new Usuario('Cristobal', 'Espinosa', [{titulo:'El hombre mas rico de babilonia', autor:'George Classon'},{titulo:'Padre rico, padre pobre',autor:'Kiyosaki'}], ['perro','gato','caballo'])

//      console.log(usuario1.getFullName())
//      console.log({ cantidad: usuario1.countMascotas() })
//      usuario1.addMascota('cacatua')
//      console.log({ cantidad: usuario1.countMascotas() })

//      usuario1.addBook('la nacion','carlos quinto')

//     const booksName = usuario1.getBookNames()
//     console.log(booksName)


// const { error } = require('console')