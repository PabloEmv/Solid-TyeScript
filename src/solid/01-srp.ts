(() => {
  interface Product {
    id: number;
    name: string;
  }

  // clase para manejar los productos
  class ProducService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }
    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  // clase para notificar via correo electrónico
  class Mailer {
    private masterEmail: string = "pablo.ed.martinez@gmail.com";
    sendEmail(emailList: string[], template: "to clients" | "to admins") {
      console.log("Enviando correo a los clientes", template);
    }
  }

  //product bloc centraliza las peticiones
  class ProductBloc {
    private productService: ProducService;
    private mailer: Mailer;

    constructor(productService: ProducService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }
    loadProduct(id: number) {
      this.productService.getProduct(id);
    }
    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["juanito@gmail.com"], "to clients");
    }
  }

  // Agregar al carrito de compra debería estar en una clase independiente, ya que no tiene mucha relación con ProducBloc
  class CartBloc {
    private itemsInCart: Object[] = [];
    addToCart(productId: number) {
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProducService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
