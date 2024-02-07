import React from 'react';
import Feed from './Feed';

const Home = ({ posts }) => {
    return (
        <main className="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ magin: "2rem 0 0 0"}}>
                    No posts to display.
                </p>
            )} 
        </main>
    )
}

export default Home;