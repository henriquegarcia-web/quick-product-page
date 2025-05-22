import type { IEcommerceData } from '@/types/ecommerce'

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
      id: 'camiseta-esportiva',
      categoryId: 'camisetas',
      name: 'Camiseta Esportiva Malha Fina',
      slug: 'camiseta-esportiva',
      description: 'Camiseta em algodão 100%, confortável e estilosa.',
      price: 79.9,
      variants: [
        {
          color: 'Preto',
          images: [
            '/products/camiseta-esportiva-preta-1.png',
            '/products/camiseta-esportiva-preta-2.png',
          ],
          sizes: [
            { size: 'P', stock: 3 },
            { size: 'M', stock: 5 },
            { size: 'G', stock: 0 },
            { size: 'GG', stock: 2 },
          ],
        },
        {
          color: 'Branco',
          images: [
            '/products/camiseta-esportiva-branca-1.png',
            '/products/camiseta-esportiva-branca-2.png',
            '/products/camiseta-esportiva-branca-3.png',
            '/products/camiseta-esportiva-branca-4.png',
            '/products/camiseta-esportiva-branca-5.png',
            '/products/camiseta-esportiva-branca-6.png',
          ],
          sizes: [
            { size: 'P', stock: 1 },
            { size: 'M', stock: 2 },
            { size: 'G', stock: 0 },
            { size: 'GG', stock: 0 },
          ],
        },
      ],
    },
  ],
}
