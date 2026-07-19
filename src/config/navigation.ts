import {
	BookOpen,
	Crosshair,
	Gamepad2,
	Gift,
	RefreshCw,
	Scale,
	Swords,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// Knife Duels 导航配置：7 个内容分类（community 已按要求剔除）
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'codes', path: '/codes', icon: Gift, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'weapons', path: '/weapons', icon: Swords, isContentType: true },
	{ key: 'values', path: '/values', icon: Scale, isContentType: true },
	{ key: 'crosshair', path: '/crosshair', icon: Crosshair, isContentType: true },
	{ key: 'modes', path: '/modes', icon: Gamepad2, isContentType: true },
	{ key: 'updates', path: '/updates', icon: RefreshCw, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/'

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
