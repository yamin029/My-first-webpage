
$(document).ready(function(){
  $('.shop-item').hide()
  var products=[]
  /*
  var products = [
    {
    title:"Mother Board",
    img:"images/motherboard.jpg",
    price:"200$",
    description:"Intel Z390 GAMING Motherboard with 10+2 Digital PWM Design, 2-Way CrossFire™ Multi-Graphics, USB 3.1 Gen2 Type-A, M.2 Thermal Guard, Intel GbE LAN with cFosSpeed, Smart Fan 5, Dual M.2, Dual Armor with Ultra Durable™ Technology, DualBIOS, CEC 2019"
    }
 ]
*/
console.log(products)

  

  $('.submit-btn').click(function(){
    alert("You Are Going to Add a New Product")
    var title = $('#Product_title').val()
    var img = $('#Product_img_url').val()
    var price = $('#Product_price').val()
    var description = $('#Product_descriptin').val()
    //console.log(title)
    products.push({title:title,img:img,price:price,description:description})
    console.log(products)
    //products.push({title:"YAMIN",img:"img",price:"price",description:"description"})
    //products.push({title:title,img:img,price:price,description:description})

    var insertProduct = $('<div class="shop-item"><span class="shop-item-title"></span><img src="" class="shop-item-image"><div class="product-description" style="display:none"></div><div class="shop-item-details"><span class="shop-item-price"></span><button class="btn btn-primary shop-item-button">ADD TO cart</button></div></div>')
    $('.shop-item').append(insertProduct)
    window.localStorage.setItem('productsArray',JSON.stringify(products))

  })
  console.log(products)
  
  productss = JSON.parse(window.localStorage.getItem('productsArray'))
  console.log(productss)
  
  $.each(productss,function(i,val){
    console.log("hi")
    var insertProduct = $('<div class="shop-item"><span class="shop-item-title"></span><img src="" class="shop-item-image "><div class="product-description " style="display:none"></div><div class="shop-item-details"><span class="shop-item-price"></span><button class="btn btn-primary shop-item-button ">ADD TO cart</button></div></div>')
    insertProduct.children("span").text(productss[i].title)
    insertProduct.children("img").attr('src',productss[i].img)
    insertProduct.children("div .product-description").text(productss[i].description)
    insertProduct.children("div").children("span").text(productss[i].price + "$")
  //insertProduct.children("div").children("span").text(products[1].price)
  $('.shop-items').append(insertProduct)
  })

  $('.shop-item-image').click(function(){
    let ya = $(this).parent().html()
    console.log(ya)
    $('#single-view').html(ya)
    $('.product-description').show()
    $('.shop-items').hide()
    $('.bottom').hide()
    
  })
  
  $('.shop-item-button').click(function(){
    alert("you click to add to cart")
     var title = $(this).parent().parent().children("span").html()
     var img = $(this).parent().parent().children("img").attr('src')
     var price = $(this).siblings("span").html()
     //console.log(img.parseHTML)
     addItemToCart(title,img,price)
  })
  function addItemToCart(title,img,price){
      var pr = 0;
      var cartrow = $('<div></div>')
      cartrow.addClass('cart-row')
      var cartRowContent = $('<div class="cart-item cart-column col-xs-4"><img class="cart-item-image" width="100" height="100"><span class="cart-item-title">title</span></div><span class="cart-price cart-column  col-xs-4">price</span><div class="cart-quantity cart-column  col-xs-4"><input class="cart-quantity-input" type="number" value="1"><button class="btn btn-danger" type="button">REMOVE</button></div>)')//.append('.cart-itmes')
      //cartRowContent.addClass('cart-row')
      cartRowContent.children("img").attr('src',img)
      cartRowContent.children("span.cart-item-title").text(title)
      cartRowContent.siblings("span").text(price)
      cartrow.append(cartRowContent)
      console.log(cartrow)
      $('.cart-items').append(cartrow)
  
    let temp = $('.cart-total').children("span").text()
      console.log(temp)
      pr = pr + parseInt(temp)+parseInt(price)
      console.log(temp)
  
      $('.cart-total').children("span").text(pr+"$")
  
      
    }
  
  $('#add-new-product-link').click(function(){
    //alert("yamin")
    window.open("addProduct.html")
    //$('.content-section').hide()
    //$('.add-item-page').load('index.html')

  })
})
  