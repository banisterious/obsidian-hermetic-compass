import { App, PluginSettingTab, Setting } from 'obsidian';
import OhcpPlugin from '../../main';

export class OhcpSettingTab extends PluginSettingTab {
	plugin: OhcpPlugin;

	constructor(app: App, plugin: OhcpPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		containerEl.createEl('h2', { text: 'Hermetic Compass Settings' });

		containerEl.createEl('h3', { text: 'Personal Information' });

		new Setting(containerEl)
			.setName('Full Name')
			.setDesc('Your full name (first, middle, last)')
			.addText(text => text
				.setPlaceholder('Enter your full name')
				.setValue(this.plugin.settings.fullName)
				.onChange(async (value) => {
					this.plugin.settings.fullName = value;
					await this.plugin.saveSettings();
				}));

		const birthDateContainer = containerEl.createDiv();
		birthDateContainer.createEl('h4', { text: 'Birth Date' });

		new Setting(birthDateContainer)
			.setName('Month')
			.addDropdown(dropdown => dropdown
				.addOptions({
					'1': 'January', '2': 'February', '3': 'March', '4': 'April',
					'5': 'May', '6': 'June', '7': 'July', '8': 'August',
					'9': 'September', '10': 'October', '11': 'November', '12': 'December'
				})
				.setValue(this.plugin.settings.birthMonth.toString())
				.onChange(async (value) => {
					this.plugin.settings.birthMonth = parseInt(value);
					await this.plugin.saveSettings();
				}));

		new Setting(birthDateContainer)
			.setName('Day')
			.addDropdown(dropdown => {
				for (let i = 1; i <= 31; i++) {
					dropdown.addOption(i.toString(), i.toString());
				}
				dropdown.setValue(this.plugin.settings.birthDay.toString())
				dropdown.onChange(async (value) => {
					this.plugin.settings.birthDay = parseInt(value);
					await this.plugin.saveSettings();
				});
			});

		new Setting(birthDateContainer)
			.setName('Year')
			.addText(text => text
				.setPlaceholder('YYYY')
				.setValue(this.plugin.settings.birthYear.toString())
				.onChange(async (value) => {
					const year = parseInt(value);
					if (!isNaN(year) && year > 0) {
						this.plugin.settings.birthYear = year;
						await this.plugin.saveSettings();
					}
				}));

		new Setting(birthDateContainer)
			.setName('Time of Birth (Optional)')
			.setDesc('Format: HH:MM (24-hour)')
			.addText(text => text
				.setPlaceholder('00:00')
				.setValue(this.plugin.settings.birthTime)
				.onChange(async (value) => {
					this.plugin.settings.birthTime = value;
					await this.plugin.saveSettings();
				}));

		containerEl.createEl('h3', { text: 'File Paths' });

		new Setting(containerEl)
			.setName('Card Images Path')
			.setDesc('Path to Thoth card images folder in your vault')
			.addText(text => text
				.setPlaceholder('Tarot/Images')
				.setValue(this.plugin.settings.cardImagesPath)
				.onChange(async (value) => {
					this.plugin.settings.cardImagesPath = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Card Descriptions Path')
			.setDesc('Path to card description notes folder in your vault')
			.addText(text => text
				.setPlaceholder('Tarot/Card Descriptions')
				.setValue(this.plugin.settings.cardDescriptionsPath)
				.onChange(async (value) => {
					this.plugin.settings.cardDescriptionsPath = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Custom Icons Path (Optional)')
			.setDesc('Path to custom card icons folder in your vault')
			.addText(text => text
				.setPlaceholder('Tarot/Icons')
				.setValue(this.plugin.settings.customIconsPath)
				.onChange(async (value) => {
					this.plugin.settings.customIconsPath = value;
					await this.plugin.saveSettings();
				}));
	}
} 