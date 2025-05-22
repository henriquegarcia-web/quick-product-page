import { IEcommerceData } from '@/types/ecommerce'

export const ecommerce: IEcommerceData = {
  store: {
    name: 'QuickShop',
    logo: '/logo.png',
    description: 'Crie sua loja, divulgue, lucre e seja feliz!',
  },

  categories: [
    {
      id: 'camisetas',
      name: 'Camisetas',
      slug: 'camisetas',
    },
  ],

  products: [
    {
      id: 'camiseta-azul-gg',
      categoryId: 'camisetas',
      name: 'Camiseta Azul GG',
      slug: 'camiseta-azul-gg',
      description: 'Camiseta em algodão 100%, confortável e estilosa.',
      images: [
        '/products/camiseta-azul-1.png',
        '/products/camiseta-azul-2.png',
        '/products/camiseta-azul-3.png',
      ],
      price: 79.9,
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Azul', 'Branco'],
      stock: {
        'P-Azul': 3,
        'M-Azul': 5,
        'G-Azul': 0,
        'GG-Azul': 2,
        'P-Branco': 1,
        'M-Branco': 2,
        'G-Branco': 0,
        'GG-Branco': 0,
      },
    },
  ],
}
