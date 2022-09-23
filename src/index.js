import {Container} from "./containers/Container.js";

const ProductContainer = new Container('productos')

ProductContainer.getAll()
  .then((data) => console.log({ data }))
  .catch((error) => console.log({ error }))

  ProductContainer.save({
    title: 'producto 1',
    price: 3000,
    thumbnail: 'dfasf'
  }).then(data => console.log({data}))
    .catch(error => console.log({error}))