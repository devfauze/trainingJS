//Cria uma classe Products e cria metodos para adicionar
//e calcular descontos

class Products {
    Name 
    Description 
    Price 
    InStock
     constructor(name, description, price, inStock){
        this.Name = name
        this.Description = description
        this.Price = price
        this.InStock = 0
     }

     addToStock(quantity){
        this.inStock += quantity
     }

     calculateDiscount(discount){
        return this.price * (100 - discount / 100)
     }
}
