/**
 * Observações:
 * - Optei por criar as lógicas de onSale, withoutStock, valores com desconto e parcelamento
 *   diretamente no componente de preço. Em um caso real, essas lógicas poderiam ser retornadas
 *   já calculadas pelo backend para otimização de performance e manutenção.
 */

// ─── Mock de Dados da Loja ──────────────────────────────────────────────────

import type { IEcommerceData } from '@/types/ecommerce'

export const ecommerce: IEcommerceData = {
  // ─── Detalhes da Loja ─────────────────────────────────────────────────────
  store: {
    name: 'QuickShop',
    logo: '/logo_full.png',
    description: 'Crie sua loja, divulgue, lucre e seja feliz!',
    pricing: {
      installment: {
        quantity: 3,
        interestFree: true,
      },
      pixDiscount: 0.1,
    },
  },

  // ─── Categorias ───────────────────────────────────────────────────────────
  categories: [
    {
      id: 'camisetas',
      name: 'Camisetas',
      slug: 'camisetas',
    },
  ],

  // ─── Produtos ─────────────────────────────────────────────────────────────
  products: [
    {
      id: 'camiseta-esportiva',
      categoryId: 'camisetas',
      name: 'Camiseta de Treino com Tecido Dry Fit + Proteção UV',
      slug: 'camiseta-esportiva',
      description:
        'Perfeita para seus treinos, esta camiseta combina conforto e desempenho com tecido Dry Fit que mantém o corpo seco e arejado. Além disso, conta com proteção UV, ideal para atividades ao ar livre, oferecendo estilo, leveza e segurança em qualquer momento do seu dia.',
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
