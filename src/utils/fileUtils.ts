import { TFile, Vault } from 'obsidian';

/**
 * Get all files in a directory
 * @param vault Obsidian vault
 * @param directoryPath Path to directory
 * @returns Array of TFile objects
 */
export async function getFilesInDirectory(vault: Vault, directoryPath: string): Promise<TFile[]> {
    // Remove leading/trailing slashes
    const normalizedPath = directoryPath.replace(/^\/|\/$/g, '');
    
    // Get all files in the vault
    const allFiles = vault.getFiles();
    
    // Filter files by directory path
    return allFiles.filter(file => {
        const filePath = file.path;
        return filePath.startsWith(normalizedPath + '/') || filePath === normalizedPath;
    });
}

/**
 * Check if a file exists in the vault
 * @param vault Obsidian vault
 * @param filePath Path to file
 * @returns Boolean indicating if file exists
 */
export async function fileExists(vault: Vault, filePath: string): Promise<boolean> {
    const abstractFile = vault.getAbstractFileByPath(filePath);
    return abstractFile instanceof TFile;
}

/**
 * Create a directory if it doesn't exist
 * @param vault Obsidian vault
 * @param directoryPath Path to directory
 */
export async function createDirectoryIfNotExists(vault: Vault, directoryPath: string): Promise<void> {
    const folderExists = vault.getAbstractFileByPath(directoryPath);
    if (!folderExists) {
        await vault.createFolder(directoryPath);
    }
} 