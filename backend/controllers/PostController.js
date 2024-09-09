const Post = require('../models/model')


exports.getAllPosts = async (req, res) => {
  try{  const posts = await Post.findAll();
    res.json(posts);
}catch(error){
     res.status(401).json({
 message:`Error occured while Fetching posts : ${error}`
     })  
}
  };


exports.getPostById = async(req,res)=>{
   try{

       const post = await Post.findByPk(req.params.id);
       if(!post) return res.status(404).json({
           message:"post not found"
        });
        res.json(post)
    }
catch(error){
    res.status(401).json({
        message:`Error occured while fetching post by id : ${error}`

    })
}

}


exports.createPost= async (req,res)=>{
    const {title,content}=req.body;
    
    if(!title || !content) return res.status(400).json({
        message:"Title and content is required"
    })

    try {
        const post = await Post.create({title,content})

        res.status(201).json(post);
    }
    catch(
        error
    ){
     res.status(401).json({
 message:`Error occured while creating post : ${error}`
     })  
    }
}


exports.updatePost = async (req, res) => {
    const { title, content } = req.body;

    try{

        const post = await Post.findByPk(req.params.id);
        
        if (!post) return res.status(404).json({ message: 'Post not found' });
        
        // Validate inputs
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content required' });
        }
        
        // Update the post
        post.title = title;
        post.content = content;
        await post.save();
        
        res.json(post);
    } catch(
        error
    ){
     res.status(401).json({
 message:`Error occured while updating post : ${error}`
     })  
    }
  };

exports.deletePost=async(req,res)=>{
    const post = await Post.findByPk(req.params.id);
    if(!post) return res.status(404).json({
        message:"Post not found"
    })
    try{
         await post.destroy();
         res.status(204).json({
            message:"Post deleted"
         })
    }catch(error){
        res.status(401).json({
            message:`Error occured while deleting post : ${error}`
                })  
    }
}