import React, { useEffect, useState } from 'react'
import './App.css'

const App= () => {
    const[data, setData] = useState([]);
    
    
    useEffect(()=>
    {
        async function fetchData()
        {
            try{
            const data = await fetch('https://api.unsplash.com/photos?page=1&per_page=20&client_id=zXRpc74kv3JVmTCH1eeiZer-MH1t6zTBnB_12foJw0g');
            const jsonData = await data.json();
            setData(jsonData);
            console.log(jsonData);
            console.log('Data fetched successfully');
            }catch(err){
                console.log('error fetching data');
            };
        }

     fetchData();

    }, []);
    const handleShare = (downloadUrl) => {
        // You can use any method to share the link, such as copying it to the clipboard.
        navigator.clipboard.writeText(downloadUrl).then(() => {
          alert('Link copied to the clipboard.');
        });
      };
    

  return (
    <div className='App'>
        <div className='grid-container'>
        {data.map((item, i) => (
            <div key={i} className='grid-item'>
                <div className="image-container">
                  <img src={item.urls.thumb} alt='' className="image" />
                </div>
              <button
              className="download"
              onClick={() => handleShare(item.links.download)}
            >
              Share
            </button>
               <div className="user-info">
                   <p>Created By: {item.user.first_name}</p>
                   <p>Updated at: {item.updated_at}</p>
               </div>
            
            </div>
        ))}
        </div>
  </div>
  );
}

export default App;
