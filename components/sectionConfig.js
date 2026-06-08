import { colors } from './theme';

export const AGENDA_SECTIONS = [
  {
    id: 'goals',
    label: 'Objetivos',
    description: 'Metas pessoais e acadêmicas',
    accent: colors.primaryLight,
    placeholder: 'Ex: finalizar o projeto de React Native',
  },
  {
    id: 'shopping',
    label: 'Compras',
    description: 'Itens para comprar depois',
    accent: colors.cyan,
    placeholder: 'Ex: comprar caderno para a aula',
  },
  {
    id: 'appointments',
    label: 'Compromissos',
    description: 'Eventos, reuniões e prazos',
    accent: colors.green,
    placeholder: 'Ex: reunião às 15h',
  },
  {
    id: 'studies',
    label: 'Estudos',
    description: 'Conteúdos e tarefas de estudo',
    accent: colors.yellow,
    placeholder: 'Ex: revisar props e FlatList',
  },
  {
    id: 'ideas',
    label: 'Ideias',
    description: 'Insights e melhorias futuras',
    accent: colors.red,
    placeholder: 'Ex: criar uma tela de calendário',
  },
];

export const ALL_SECTION = {
  id: 'all',
  label: 'Tudo',
  description: 'Visão geral da agenda',
  accent: colors.primaryLight,
};
