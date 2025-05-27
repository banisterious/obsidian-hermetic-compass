/**
 * Settings interface for the Hermetic Compass plugin
 */
export interface OhcpSettings {
	fullName: string;
	birthMonth: number;
	birthDay: number;
	birthYear: number;
	birthTime: string;
	cardImagesPath: string;
	cardDescriptionsPath: string;
	customIconsPath: string;
}

/**
 * Default settings for the plugin
 */
export const DEFAULT_SETTINGS: OhcpSettings = {
	fullName: '',
	birthMonth: 1,
	birthDay: 1,
	birthYear: 1990,
	birthTime: '00:00',
	cardImagesPath: 'Tarot/Images',
	cardDescriptionsPath: 'Tarot/Card Descriptions',
	customIconsPath: 'Tarot/Icons'
}; 