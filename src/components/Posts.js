import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    //async yapmamız gerek çünkü verinin yüklenme süresi önemli. O yüzden async await yapısını kullanacağım.
    const fetchPosts = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(data); //Datadan aldığım veriyi postlarımı set ediyorum.
        console.log(data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);// [] verirsek Component dom'a ilk yüklenince çalış, sonrasında çalışma.

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts;