import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { Oval} from 'react-loader-spinner';
import Table from './components/Table';




function App() {
  const [items, setItems] = useState([]);
  const [request, setRequest] = useState('users');
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = 'https://jsonplaceholder.typicode.com';

  
  useEffect(() => {
  
    const fetchData = async () => {

     try {
      const response = await fetch(`${API_URL}/${request}`);
      if(!response.ok) throw new Error("Server side error!");
      const data = await response.json();
      setItems(data);
     } catch(err){
      console.log(err);
     } finally {
      setIsLoading(false);
     }

    }

    (async () => await fetchData())();
  },[request])

  function postChange(e){
    if(request !== e.target.innerHTML){
      setRequest(e.target.innerHTML);
      setIsLoading(true);
    }
  }

  return (
    <div className="App">
     <Header postChange={ postChange } requestType={ request }/>
     <main>
        {isLoading && <Oval
            visible={true}
            height="150"
            width="150"
            color="#AD271E"
            secondaryColor='#AD271E'
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass="circle"
        />}
        {!isLoading && <Table items={items}/>}
     </main>
    </div>
  );
}

export default App;

//https://jsonplaceholder.typicode.com/posts
  //https://jsonplaceholder.typicode.com/comments