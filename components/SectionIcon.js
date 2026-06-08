import {
  BookOpen,
  CalendarClock,
  Layers3,
  Lightbulb,
  ShoppingCart,
  Target,
} from 'lucide-react-native';

import { colors } from './theme';

const iconMap = {
  all: Layers3,
  goals: Target,
  shopping: ShoppingCart,
  appointments: CalendarClock,
  studies: BookOpen,
  ideas: Lightbulb,
};

export default function SectionIcon({
  sectionId,
  color = colors.text,
  size = 20,
  strokeWidth = 2.6,
}) {
  const Icon = iconMap[sectionId] || Layers3;

  return <Icon size={size} color={color} strokeWidth={strokeWidth} />;
}
