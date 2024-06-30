const product = [{
    id: 1,
    name: "kursi",
    image: "https://res.cloudinary.com/ruparupa-com/f_auto,q_auto/v1521754032/Products/X072205_1.jpg",
    price: "Rp. 100.000",
    bahan: "kayu"
},
{
    id: 2,
    name: "meja",
    image: "https://th.bing.com/th?id=OIP.tHMzFv4wUFNARE7XDOhPFwHaJ3&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "Rp. 500.000",
    bahan: "kaca"
},
{
    id: 3,
    name: "pensil",
    image: "https://th.bing.com/th?id=OIP.4BPXYuxpTfD4hykZI_x28wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "Rp. 10.000",
    bahan: "kayu"
},
{
    id: 4,
    name: "pulpen",
    image: "https://th.bing.com/th?id=OIP.06IrEyFfFFgA1AHjWQcySQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "Rp. 10.000",
    bahan: "besi"
},
{
    id: 5,
    name: "sandal",
    image: "https://th.bing.com/th?id=OIP.af58wHNagl98NQPVEoCQTgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "Rp. 50.000",
    bahan: "plastik"
}
]

function newproduct(id,name,image,price,bahan){
    let product = {}
    product.id = id
    product.name = name
    product.image = image
    product.price = price
    product.bahan = bahan
    return product
}

product.forEach((product) => {
    document.write(`
        <figure>
            <img src=${product.image} alt="">
            <figcaption>
            <h1>${product.name}</h1>
            <h2>${product.price}</h2>
            <h3>${product.bahan}</h3>
            <button onclick="confirm('anda yakin membeli product ini?')">Beli sekarang</button>
            <button onclick="alert('anda menyukai product ini?')">Like</button>
            <button onclick="prompt('masukan komen: ')">comment</button>
            </figcaption>
        </figure>
        `)
    }
)






