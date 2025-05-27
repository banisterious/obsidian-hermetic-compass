import { App, Plugin, Notice } from 'obsidian';
import { OhcpSettings, DEFAULT_SETTINGS } from './models/settings';
import { OhcpSettingTab } from './ui/settings/SettingsTab';
import { generateTarotProfile } from './services/profile/profileGenerator';

export default class OhcpPlugin extends Plugin {
	settings: OhcpSettings;

	async onload() {
		await this.loadSettings();

		// Add commands to command palette
		this.addCommand({
			id: 'generate-tarot-profile',
			name: 'Generate Tarot Profile',
			callback: () => {
				this.generateTarotProfile();
			}
		});

		this.addCommand({
			id: 'view-growth-chart',
			name: 'View Growth Chart',
			callback: () => {
				this.viewGrowthChart();
			}
		});

		// Add settings tab
		this.addSettingTab(new OhcpSettingTab(this.app, this));
	}

	onunload() {
		// Clean up resources if needed
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	// Generate Tarot profile using the profile service
	generateTarotProfile() {
		const { fullName, birthMonth, birthDay, birthYear } = this.settings;
		
		if (!fullName) {
			// Show notification if name is not set
			new Notice('Please enter your name in the plugin settings');
			return;
		}
		
		const profile = generateTarotProfile(fullName, birthMonth, birthDay, birthYear);
		console.log('Generated profile:', profile);
		
		// TODO: Display profile in a modal or create a note with the profile
	}

	// View Growth Chart (to be implemented)
	viewGrowthChart() {
		// TODO: Implement growth chart view
		console.log('Viewing Growth Chart...');
	}
} 