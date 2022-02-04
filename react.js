const cars = [
    { name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg' },
    { name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598' },
    { name: 'Rolls Royce', price: 50000, img: 'http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg' },
    { name: 'Mercedes amg coupe', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2' }
  ]

  let year = new Date().getFullYear(); // or let should go inside the function
  console.log(year);

function MenuHeader() {
    return (
    <div class="menu-header">
       <ol class="menu">
       <li>About</li>
         <li>Main Page</li>
         <li>Contact us</li>           
        </ol>                                         
    </div> )
}

//header
  function Header() {
      return (
         <div class="header">
             <div class="logo-header">
                 <img class="logo-img" alt="logo" src="imgs/logo_irine.png"/>
             </div>
                                
                 
         </div> 
      )

  }
  
  //end of header
 
  
  
  function Card({data: {name, price, img}}) {
    return (
        <div class="card">
            <div class="card-img">
                <img
                src={img}
                alt={name}/>
            </div>
            <h3>{name}</h3>
            <p>{price} $</p>
        </div>
    )
}

function App() {
    return (
        <div> 
            <Header /> 
            <MenuHeader/>        
            <h1>Hellow world</h1>
            
            <div class="list">
            {cars.map(car => (
                <Card data={car}/>
            ))}            
            </div> 
            <Footer />        
        </div> 
    )
}



//footer
function Footer() {
    return (
        <div class="footer">
            <div class="footer-container">
                <p>&copy;{year} Irina</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
  }

ReactDOM.render(
    <App />,
    document.querySelector('.app')
);



// const cars = [
//     { name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg' },
//     { name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598' },
//     { name: 'Rolls Royce', price: 50000, img: 'http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg' },
//     { name: 'Mercedes amg coupe', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2' }
//   ];

// function Card() {
//     return(
//         <div class="card">
//         <div class="card-img">
//             <img
//             src={data.img}
//             alt={data.name}/>
//         </div>
//         <h3>{data.name}</h3>
//         <p>{data.price} $</p>
//     </div>

//     );
// }


// function App(){
//     return (
//         <div>
//             <h1>Hello, world</h1>
//             <div className="list">
//             {cars.map(car => 
//             <Card />
//             )}
//             </div>
            
            
//         </div>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.querySelector('.app')
// );