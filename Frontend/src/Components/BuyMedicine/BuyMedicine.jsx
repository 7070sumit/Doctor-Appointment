import React from 'react'

function BuyMedicine() {

  const medicine = [
    {
      "id": 1,
      "name": "Paracetamol",
      "use_cases": ["Fever", "Headache"],
      "price": 5.99,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    },
    {
      "id": 2,
      "name": "Ibuprofen",
      "use_cases": ["Pain Relief", "Inflammation"],
      "price": 7.49,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    },
    {
      "id": 3,
      "name": "Amoxicillin",
      "use_cases": ["Bacterial Infections", "Antibiotic"],
      "price": 12.99,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    },
    {
      "id": 4,
      "name": "Cough Syrup",
      "use_cases": ["Cough", "Sore Throat"],
      "price": 8.99,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    },
    {
      "id": 5,
      "name": "Loratadine",
      "use_cases": ["Allergies", "Hay Fever"],
      "price": 6.29,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    },
    {
      "id": 6,
      "name": "Metformin",
      "use_cases": ["Diabetes", "Blood Sugar Control"],
      "price": 9.79,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    },
    {
      "id": 7,
      "name": "Cetirizine",
      "use_cases": ["Allergy Symptoms", "Sneezing"],
      "price": 7.89,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    },
    {
      "id": 8,
      "name": "Omeprazole",
      "use_cases": ["Acid Reflux", "Heartburn"],
      "price": 11.49,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    },
    {
      "id": 9,
      "name": "Aspirin",
      "use_cases": ["Pain Relief", "Anti-inflammatory"],
      "price": 5.29,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    },
    {
      "id": 10,
      "name": "Diphenhydramine",
      "use_cases": ["Allergy Relief", "Insomnia"],
      "price": 6.99,
      "product_link": "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000-500x500.jpg"
    }
  ]





  return (
    <div className='p-10 display grid grid-cols-4  gap-y-5'>

      {
        medicine.map(product => (
          <div className="relative rounded-xl border overflow-hidden max-h-max w-5/6 group hover:shadow-2xl text-[#BD1E51]">
            <figure className="w-[90%] mx-auto mt-2 p-5">
              <img
                src={product.product_link}
                alt="medicine"
                className="w-full h-[150px] rounded-sm object-cover"
              />
              <h1 className="mt-3 text-xl font-semibold">{product.name}</h1>
            </figure>

            <section className="absolute bottom-0 w-full bg-white rounded-t-lg p-5 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">{product.name}</h1>
              </div>
              <div className='mt-4 flex gap-x-2'>
                {product.use_cases.map((useCase, index) => (
                  <p key={index} className="font-medium underline">{useCase}</p>
                ))}
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <h1 className='text-xl font-medium'>₹ {product.price}</h1>
                <button 
                className="block bg-[#F1B814] text-white py-2 px-4 rounded-lg text-center text-sm font-semibold transition-transform duration-300 ease-in-out hover:shadow-md hover:transform hover:-translate-y-0.5">Add to Cart</button>
              </div>
            </section>
          </div>
        ))

      }




    </div>
  )
}

export default BuyMedicine
