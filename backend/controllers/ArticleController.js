const Article = require("../models/Article");

exports.createArticle = async (req, res) => {
  try {
    const { title, author, body } = req.body;
    const image = req.file.filename;
    const article = await Article.create({
      title: title,
      author: author,
      body: body,
      image: image,
    });
    res
      .status(201)
      .json({ status: "success", message: "Nội dung được tạo.", article });
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", message: "Không thể tạo nội dung.", error: err });
  }
};

exports.getArticles = async (req, res) => {
  const { currentPage = 1, limit = 6 } = req.query;

  const articles = await Article.find()
    .limit(limit * 1)
    .skip((currentPage - 1) * limit)
    .exec();

  const articleCount = await Article.countDocuments();

  if (articles.length > 0) {
    res.status(200).json({
      status: "success",
      articles,
      articleLimit: limit,
      articleCount: articleCount,
      totalPages: Math.ceil(articleCount / limit),
      currentPage: currentPage,
    });
  } else {
    res.status(400).json({ status: "fail", message: "Không tìm thấy nội dung." });
  }
};

exports.getArticle = async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    res.status(200).json({ status: "success", article });
  } else {
    res.status(400).json({ status: "fail", message: "Không tìm thấy nội dung." });
  }
};
