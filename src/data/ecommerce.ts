/**
 * Observações:
 * - Optei por criar as lógicas de onSale, withoutStock, valores com desconto e parcelamento,
 *   diretamente no componente de preço, embora em um caso real, essas lógicas poderiam ser
 *   retornadas já calculadas pelo backend.
 */

import type { IEcommerceData } from '@/types/ecommerce'

export const ecommerce: IEcommerceData = {
  store: {
    name: 'QuickShop',
    logo: '/logo.png',
    description: 'Crie sua loja, divulgue, lucre e seja feliz!',
    pricing: {
      installment: {
        quantity: 3,
        interestFree: true,
      },
      pixDiscount: 0.1,
    },
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
      variants: [
        {
          color: 'Preto',
          images: [
            '/products/camiseta-esportiva-preta-1.png',
            '/products/camiseta-esportiva-preta-2.png',
          ],
          sizes: [
            {
              size: 'P',
              stock: 3,
              price: {
                current: 79.9,
                original: 79.9,
              },
            },
            {
              size: 'M',
              stock: 5,
              price: {
                current: 74.9,
                original: 79.9,
              },
            },
            {
              size: 'G',
              stock: 0,
              price: {
                current: 74.9,
                original: 79.9,
              },
            },
            {
              size: 'GG',
              stock: 2,
              price: {
                current: 69.9,
                original: 79.9,
              },
            },
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
            {
              size: 'P',
              stock: 1,
              price: {
                current: 79.9,
                original: 79.9,
              },
            },
            {
              size: 'M',
              stock: 2,
              price: {
                current: 79.9,
                original: 79.9,
              },
            },
            {
              size: 'G',
              stock: 0,
              price: {
                current: 79.9,
                original: 79.9,
              },
            },
            {
              size: 'GG',
              stock: 0,
              price: {
                current: 74.9,
                original: 79.9,
              },
            },
          ],
        },
      ],
    },
  ],
}
