import { useState } from 'react'
import './App.css'
import PostCard from './components/postcard';

function App() {

  const [posts , setPosts] = useState([
    {
      id: 1,
      profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      username: 'alice',
      content: 'This is my first post!',
      isLiked: false,
    },
    {
      id: 2,
      profileImage: 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg',
      username: 'bob',
      content: 'Loving this social media app.',
      isLiked: true,
    },
    {
      id: 3,
      profileImage: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png',
      username: 'charlie',
      content: 'Just another day...',
      isLiked: false,
    },
  ])

  const handleLikeToggle = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, isLiked: !post.isLiked } : post
      )
    );
  };

  return (
    <div className="app">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          profileImage={post.profileImage}
          username={post.username}
          content={post.content}
          isLiked={post.isLiked}
          onLikeToggle={() => handleLikeToggle(post.id)}
        />
      ))}
    </div>
  );
}

export default App
