import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

//https://codingbroker.tistory.com/30

function Coin(props) {
    //컴포넌트가 랜더링 될때마다 useEffect가 실행됨
    const [posts, setPosts] = useState([]);
    useEffect(() => {
            axios
              .get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=37e7ce20-c82f-4fa2-ad21-eadb180a045b&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD')
              .then((Response) =>{
                console.log('API call response:', Response);
                setPosts(Response.data.data);
              })
            }, []);
   
    return (
        <div>
            <h1>coin page</h1>
            <Link to="/App">back</Link>
            <h1 style={{textAlign:"center"}}>가상화폐 조회</h1>

            {
            posts && posts.map(post=>{ //post에 Response.data.data까지 담김
            return(
                <div key={post.id} style={{ display: 'block', width:'500px',height:'200px',position:'relative',margin:"0 auto"}}>
                        <div class="platform" style={{alignItems:'left', display:'flex', width:"100%", border:"1px solid black"}}>
                            <p style={{alignItems:'left',margin:'10px 10px', fontSize:'20px', width: '100px'}}> Platform</p> 
                            <div class="line" style={{height:"144px", border:"1px solid black", marginLeft:"106px",position:"absolute"}}></div>
                            <p style={{alignItems:'left',margin:'10px 10px', fontSize:'20px'}}>{post.platform.name}</p>
                        </div>

                        <div class="id" style={{aligniTems:'left', display:'flex', width:"100%", border:"1px solid black"}}>
                            <p style={{alignItems:'left',margin:'10px 10px', fontSize:'20px',width: '100px'}}>ID</p> 
                            <p style={{alignItems:'left',margin:'10px 10px', fontSize:'20px'}}>{post.id}</p>
                        </div>

                        
                        <div class="currency" style={{aligniTems:'left', display:'flex', width:"100%", border:"1px solid black"}}>
                            <p style={{alignItems:'left',margin:'10px 10px', fontSize:'20px',width: '100px'}}>Currency</p> 
                            <p style={{alignItems:'left',margin:'10px 10px', fontSize:'20px'}}>{post.quote.USD.price}</p>
                        </div>
                   
                </div>
                
            )
            })
            }

        </div>
    )
}
export default Coin