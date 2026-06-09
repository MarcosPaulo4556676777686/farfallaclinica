const express = require('express');
const router = express.Router();

// Armazenamento temporário de posts
let blogPosts = [
  {
    id: '1',
    title: 'Cuidados Essenciais com a Pele no Verão',
    slug: 'cuidados-essenciais-pele-verao',
    excerpt: 'Descubra os melhores cuidados para manter sua pele saudável durante os dias mais quentes.',
    content: 'O verão traz desafios únicos para a saúde da pele. A exposição ao sol, o calor e a umidade podem afetar significativamente a aparência e a saúde da nossa pele...',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
    author: 'Dra. Maria Silva',
    category: 'Cuidados com a Pele',
    tags: ['verão', 'proteção solar', 'hidratação'],
    publishedAt: new Date('2024-01-15'),
    views: 245
  },
  {
    id: '2',
    title: 'Tendências em Tratamentos Faciais para 2024',
    slug: 'tendencias-tratamentos-faciais-2024',
    excerpt: 'Conheça as novidades e tendências que estão revolucionando os tratamentos estéticos faciais.',
    content: 'O ano de 2024 traz inovações incríveis no mundo da estética facial. Desde tecnologias avançadas até técnicas naturais...',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937',
    author: 'Dra. Ana Costa',
    category: 'Tratamentos',
    tags: ['tendências', 'facial', 'tecnologia'],
    publishedAt: new Date('2024-01-20'),
    views: 189
  },
  {
    id: '3',
    title: 'Benefícios da Limpeza de Pele Profunda',
    slug: 'beneficios-limpeza-pele-profunda',
    excerpt: 'Entenda por que a limpeza de pele profunda é fundamental para uma pele saudável e radiante.',
    content: 'A limpeza de pele profunda vai além da limpeza diária. É um procedimento essencial para remover impurezas...',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8',
    author: 'Dra. Maria Silva',
    category: 'Cuidados com a Pele',
    tags: ['limpeza', 'tratamento', 'saúde da pele'],
    publishedAt: new Date('2024-01-25'),
    views: 312
  }
];

// Listar todos os posts
router.get('/', (req, res) => {
  const { category, tag, search } = req.query;
  let filteredPosts = [...blogPosts];

  if (category) {
    filteredPosts = filteredPosts.filter(post =>
      post.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (tag) {
    filteredPosts = filteredPosts.filter(post =>
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }

  if (search) {
    filteredPosts = filteredPosts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(filteredPosts.sort((a, b) => b.publishedAt - a.publishedAt));
});

// Buscar post por slug
router.get('/:slug', (req, res) => {
  const post = blogPosts.find(p => p.slug === req.params.slug);

  if (!post) {
    return res.status(404).json({ message: 'Post não encontrado' });
  }

  // Incrementar visualizações
  post.views += 1;

  res.json(post);
});

// Criar novo post
router.post('/', (req, res) => {
  const { title, excerpt, content, image, author, category, tags } = req.body;

  const slug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  const newPost = {
    id: Date.now().toString(),
    title,
    slug,
    excerpt,
    content,
    image,
    author,
    category,
    tags,
    publishedAt: new Date(),
    views: 0
  };

  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// Buscar posts relacionados
router.get('/:slug/related', (req, res) => {
  const currentPost = blogPosts.find(p => p.slug === req.params.slug);

  if (!currentPost) {
    return res.status(404).json({ message: 'Post não encontrado' });
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== currentPost.id)
    .filter(p =>
      p.category === currentPost.category ||
      p.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 3);

  res.json(relatedPosts);
});

module.exports = router;
