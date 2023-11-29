import Header from "../header"
import {render} from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../store";
import {StaticRouter} from "react-router-dom/server"

test("Logo should load on rendering Header",()=>{
    // Load header
    const header = render(
   <StaticRouter>
   <Provider store={store}>
      <Header/>
   </Provider>
   </StaticRouter>
    );

    console.log(header)

    const logo = header.getAllByTestId("logo")
    console.log(logo)
   
   expect(logo[0].src).toBe("http://localhost/dummy.png")
    
    
    //Check if logo is loaded
 })

 test("Cart should have 0 item on rendering Header",()=>{
   // Load header
   const header = render(
  <StaticRouter>
  <Provider store={store}>
     <Header/>
  </Provider>
  </StaticRouter>
   );

   console.log(header)

   const cart = header.getByTestId("cart")
   console.log(cart)
  
  expect(cart.innerHTML).toBe("Cart 0")
   
   
   
})