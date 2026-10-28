// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // Troque para o dominio final quando publicar.
  site: 'https://paratisaber.com.br',
  integrations: [
    starlight({
      title: 'ParaTISaber',
      description:
        'Plataforma aberta e gratuita de estudos de TI e Informatica, em portugues, para estudantes e curiosos de todos os niveis.',
      // Idioma padrao do site.
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Portugues',
          lang: 'pt-BR',
        },
      },
      // Link do repositorio (ajuste para o seu quando criar no GitHub).
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ruanlcs/paratisaber',
        },
      ],
      // Mensagem de "edite esta pagina" apontando para o repo (ajuste depois).
      editLink: {
        baseUrl: 'https://github.com/ruanlcs/paratisaber/edit/main/',
      },
      // Estrutura da barra lateral, baseada em topicos.md.
      sidebar: [
        {
          label: 'Inicio',
          link: '/',
        },
        {
          label: 'Computação em Nuvem',
          items: [
            { label: 'Visão geral', link: '/nuvem/' },
            { label: 'Conceitos básicos', link: '/nuvem/conceitos/' },
            { label: 'Características essenciais', link: '/nuvem/caracteristicas/' },
            { label: 'Modelos de serviço (IaaS, PaaS, SaaS)', link: '/nuvem/modelos-de-servico/' },
            { label: 'Modelos de implantação', link: '/nuvem/modelos-de-implantacao/' },
          ],
        },
        {
          label: 'Programação',
          items: [
            { label: 'Lógica de programação', link: '/programacao/logica/' },
            { label: 'Python', link: '/programacao/python/' },
            { label: 'Linguagem R', link: '/programacao/r/' },
          ],
        },
        {
          label: 'Análise de Informações',
          items: [
            { label: 'Fluência de dados', link: '/analise/fluencia-de-dados/' },
            { label: 'Dados, atributos e métricas', link: '/analise/dados-atributos-metricas/' },
            { label: 'Governança de dados', link: '/analise/governanca-de-dados/' },
            { label: 'Mineração de dados', link: '/analise/mineracao-de-dados/' },
          ],
        },
        {
          label: 'Banco de Dados',
          items: [
            { label: 'Modelagem relacional', link: '/banco-de-dados/modelagem-relacional/' },
            { label: 'Principais SGBDs', link: '/banco-de-dados/sgbds/' },
          ],
        },
        {
          label: 'BI e Data Warehouse',
          items: [{ label: 'Visao geral', link: '/bi-dw/' }],
        },
        {
          label: 'Machine Learning',
          items: [{ label: 'Visao geral', link: '/machine-learning/' }],
        },
        {
          label: 'PLN',
          items: [{ label: 'Visao geral', link: '/pln/' }],
        },
        {
          label: 'Big Data',
          items: [
            { label: 'Visão geral', link: '/big-data/' },
            { label: 'Hadoop', link: '/big-data/hadoop/' },
            { label: 'Spark', link: '/big-data/spark/' },
          ],
        },
      ],
    }),
  ],
});
