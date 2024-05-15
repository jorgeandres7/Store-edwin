import {React,useState,useEffect} from 'react'
import foto from '../../assets/Images/Nuevo4.jpg'
import { extras} from '../Noticias/Noticias'
import { Pedir} from '../Pedir/Pedir'


export const Infor = () => {
const [posts, setPosts] = useState([]) 

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        setPosts(data);
     })
     .catch((err) => {
        console.log(err.message);
     });
}, []);

 return (
  <div className="flex flex-wrap justify-around h-">

  {
  posts.map((post) => {
  return (
     <div className="bg-gradient-t from-red-800 via-red-400  to-blue-100 w-80 my-3 flex flex-col mx-2 " key={post.id}>
       <img className='h-56' src={post.image} alt="" />
        <h2 className="h-16">{post.title}</h2>
        <p className="h-7">{post.category}</p>
        <p className="float-start">{post.price}</p>

        <button className='bg-blue-800 text-zinc-50 border-4 my-3' >Comprar</button>
     </div>
  );
})}
</div>
  )
}
