import './App.css';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  let priceDetails = [
    {
      plan : "IPHONE 12 PRO MAX",
      price : "15000",
      period : 'month',
      currency : "$",
      listItems : [
        {
          itemName : "IPHONE",
          isDisabled : false
        },
        {
          itemName : "512GB Storage",
          isDisabled : false
        },
        {
          itemName : "17.02 cm (6.7 inch) Super Retina XDR ",
          isDisabled : false
        },
        {
          itemName : "12MP + 12MP + 12MP | 12MP Front Camera",
          isDisabled : false
        },
        {
          itemName : "A14 Bionic Chip with Next Generation Neural Engine Processor",
          isDisabled : false
        },
        {
          itemName : "Ceramic Shield | IP68 Water Resistance",
          isDisabled : false
        },
        {
          itemName : "All Screen OLED Display",
          isDisabled : false
        },
        
      ]
    },
    {
      plan : "SAMSUNG",
      price : "2500",
      period : 'month',
      currency : "$",
      listItems : [
        {
          itemName : " SAMSUNG GALAXY F62",
          isDisabled : false
        },
        {
          itemName : "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
          isDisabled : false
        },
        {
          itemName : "17.02 cm (6.7 inch) Full HD+ Display",
          isDisabled : false
        },
        {
          itemName : "64MP + 12MP + 5MP + 5MP | 32MP Front Camera",
          isDisabled : false
        },
        {
          itemName : "7000 mAh Lithium-ion Battery",
          isDisabled : false
        },
        {
          itemName : "Exynos 9825 Processor",
          isDisabled : false
        },
        {
          itemName : "Bio metric Authentication",
          isDisabled : false
        },
        {
          itemName : "Black variant",
          isDisabled : false
        }
      ]
    },
    {
      plan : "REALME",
      price : "3000",
      period : 'month',
      currency : "$",
      listItems : [
        {
          itemName : "Realme  8 pro",
          isDisabled : false
        },
        {
          itemName : "150GB Storage",
          isDisabled : false
        },
        {
          itemName : "16.56 cm (6.52 inch) HD+ Display",
          isDisabled : false
        },
        {
          itemName : "13MP + 8MP + 2MP + 2MP | 8MP Front Camera",
          isDisabled : false
        },
        {
          itemName : "6000 mAh Lithium-ion Battery",
          isDisabled : false
        },
        {
          itemName : "Qualcomm Snapdragon 460 Processor",
          isDisabled : false
        },
        {
          itemName : "Black Variant",
          isDisabled : false
        },
        {
          itemName : " fastcharge support ",
          isDisabled : false
        }
      ]
    }
  ]

  const [currentPlan,setCurrentPlan] = useState("cart empty");

  let handleCARTITEM = (plan,price) => {
    setCurrentPlan(plan,price)
  }
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
          CARTITEM : {currentPlan}
          </div>
        </div>
        <div className="row">
          {
            priceDetails.map((price,index) => {
              return <Card key={index} details={price,price} handleBtnClick={handleCARTITEM}></Card>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
