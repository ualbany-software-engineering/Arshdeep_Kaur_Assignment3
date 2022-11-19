const router = require('express').Router(),
	middleware = require('../middleware/index'),
	multer = require('multer'),
	{ v4: uuidv4 } = require('uuid'),
	Blog = require('../models/blog.model');

//===========================================================================
//
const storage = multer.diskStorage({
	destination: (req, imageURL, cb) => {
		cb(null, process.env.UPLOAD_DIR);
	},
	filename: (req, imageURL, cb) => {
		const fileName = imageURL.originalname.toLowerCase().split(' ').join('-');
		cb(null, uuidv4() + "-" + fileName);
	}
});

var upload = multer({
	storage: storage,
	fileFilter: (req, imageURL, cb) => {
		//png, jpg, jpeg
		if(imageURL.mimetype == "image/png" ||
			imageURL.mimetype == "image/jpg" ||
			imageURL.mimetype == "image/jpeg"){
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	}
})
//===========================================================================
//get all blogs
router.get('/', middleware.isLoggedIn, (req, res) => {
	Blog.find()
		.then((blogs) => res.json({ blogs: blogs, user: req.user }))
		.catch((err) => res.status(400).json({ err: err }));
});
//===========================================================================
//get blogs by user
router.get('/my', middleware.isLoggedIn, (req, res) => {
	Blog.find()
		.then((blogs) => {
			// let userBlogs = [];
			const userBlogs = blogs.filter((blog) => blog.author.username === req.user.username);
			res.json({ blogs: userBlogs, user: req.user });
		})
		.catch((err) => res.status(400).json({ err: err }));
});
//===========================================================================
//post a blog
router.post('/', middleware.isLoggedIn, upload.single('imageURL'), (req, res) => {
	const blog = new Blog({
		title : req.body.title,
		image : '/public/' + req.file.filename,
		body  : req.body.body,
		date  : new Date(),
	});
	
	Blog.create(blog)
		.then((blog) => {
			blog.author.username = req.user.username;
			blog.author.id = req.user._id;
			blog
				.save()
				.then((blog) => res.json({ blog: blog, user: req.user }))
				.catch((err) => res.status(501).json({ err: err, user: req.user }));
		})
		.catch((err) => res.status(500).json({ err: err, user: req.user }));
});
//===========================================================================
//get a blog by id
router.get('/:id', middleware.isLoggedIn, (req, res) => {
	Blog.findById(req.params.id)
		.then((blog) => {
			res.json(blog);
		})
		.catch((err) => res.status(400).json({ err: err }));
});
//===========================================================================
//update a blog
router.put('/:id', middleware.checkBlogOwnership, upload.single('imageURL'), (req, res) => {
	Blog.findById(req.params.id)
		.then((blog) => {
			blog.title = req.body.title;
			blog.image = '/public/' + req.file.filename;
			blog.body = req.body.body;
			blog.date = new Date();
			blog.likes = blog.likes ? blog.likes : [];
			blog.save().then((updatedBlog) => res.json(updatedBlog)).catch((err) => res.status(400).json({ err: err }));
		})
		.catch((err) => res.status(400).json({ err: err }));
});
//===========================================================================
//like a blog
router.put('/:id/like', middleware.isLoggedIn, (req, res) => {
	Blog.findById(req.params.id).then((blog) => {
		blog.likes = [ ...blog.likes, { username: req.user.username, id: req.user._id } ];
		blog.save().then((updatedBlog) => res.json(updatedBlog)).catch((err) => res.status(400).json({ err: err }));
	});
});
//===========================================================================
//unlike a blog
router.put('/:id/unlike', middleware.isLoggedIn, (req, res) => {
	Blog.findById(req.params.id).then((blog) => {
		blog.likes = blog.likes.filter((user) => user.username != req.user.username);
		blog.save().then((updatedBlog) => res.json(updatedBlog)).catch((err) => res.status(400).json({ err: err }));
	});
});
//===========================================================================
//delete a blog
router.delete('/:id', middleware.isLoggedIn, (req, res) => {
	Blog.findByIdAndDelete(req.params.id)
		.then(() => res.json('Blog deleted successfully !'))
		.catch((err) => res.status(400).json({ err: err }));
});
//===========================================================================
module.exports = router;
