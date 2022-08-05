import React, {useState} from 'react'
const API_URL = "https://shrouded-octagonal-wren.glitch.me/cars";

function NewCar() {
  const [img_url,setImg_url]=useState()
  const [make,setMake]=useState()
  const [model,setModel]=useState()
  const [price,setPrice]=useState()

  const handleChangeImage=(event)=>{
    setImg_url(event.target.value)
    // console.log(event.target.value)


  }

  const handleChangeMake=(event)=>{
    setMake(event.target.value)
    // console.log(event.target.value)
    
  }

  const handleChangeModel=(event)=>{
    setModel(event.target.value)
    // console.log(event.target.value)
    
  }

  const handleChangePrice=(event)=>{
    setPrice(event.target.value)
    // console.log(event.target.value)
    
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    
    const formData={
      make:make,
      model:model,
      img_url:img_url

    }
    


    fetch(API_URL,{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

    setImg_url('')
    setMake('')
    setModel('')
    setPrice('')
    
  }


  return (
    <div>
   <form className="Form" onSubmit={handleSubmit}>
   <input type="text" placeholder='Enter Imge url'  value={img_url} onChange={handleChangeImage} /><br/><br/>
   <input type="text" placeholder='Enter Make' value={make}  onChange={handleChangeMake}/><br/><br/>
   <input type="text" placeholder='Enter Model' value={model}  onChange={handleChangeModel}/><br/><br/>
   <input type="text" placeholder='Enter Price' value={price}  onChange={handleChangePrice}/><br/><br/>

   <button>Submit</button>
   </form>
    </div>
  )
}

export default NewCar;