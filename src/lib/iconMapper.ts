import * as Icons from "lucide-react"

export const getIconComponentByIconName = (iconName: string):Icons.LucideIcon => {
 const  IconComponent = Icons[iconName as keyof typeof Icons];

 if(!IconComponent) {
  return Icons.HelpCircle
 }
  return IconComponent as Icons.LucideIcon
}