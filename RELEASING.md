# Release Process

This document outlines the process for creating and publishing new releases of the Obsidian Hermetic Compass plugin.

## Table of Contents
- [Version Numbering](#version-numbering)
- [Release Preparation](#release-preparation)
- [Release Checklist](#release-checklist)
- [Publishing Process](#publishing-process)
- [Post-Release Tasks](#post-release-tasks)

## Version Numbering

Obsidian Hermetic Compass follows [Semantic Versioning](https://semver.org/):

- **Major version** (x.0.0): Incompatible API changes
- **Minor version** (0.x.0): New features in a backward-compatible manner
- **Patch version** (0.0.x): Backward-compatible bug fixes

## Release Preparation

Before creating a release:

1. Ensure all planned features for the release are complete
2. Verify all tests pass
3. Check that documentation is up to date
4. Review open issues to see if any should be addressed before release
5. Update the CHANGELOG.md with all notable changes

## Release Checklist

- [ ] Update version number in:
  - [ ] manifest.json
  - [ ] package.json
  - [ ] versions.json
- [ ] Update CHANGELOG.md with the new version and date
- [ ] Build the plugin with production settings
- [ ] Test the built version in a clean Obsidian vault
- [ ] Verify all features work as expected
- [ ] Create a git tag for the version (`git tag v1.0.0`)
- [ ] Push the tag to GitHub (`git push origin v1.0.0`)

## Publishing Process

1. **Create GitHub Release**:
   - Go to the "Releases" section in GitHub
   - Click "Draft a new release"
   - Select the version tag
   - Title the release with the version number
   - Include release notes (copy from CHANGELOG.md)
   - Attach the main.js, manifest.json, and styles.css files
   - Publish the release

2. **Update to Obsidian Community Plugins**:
   - Update the plugin entry in the [Obsidian community plugins repository](https://github.com/obsidianmd/obsidian-releases)
   - Submit a pull request with the updated versions.json

## Post-Release Tasks

After publishing a release:

1. Verify the plugin appears in the Obsidian Community Plugins catalog
2. Monitor for any immediate issues reported by users
3. Announce the release on relevant channels
4. Begin planning for the next release cycle

## Hotfix Process

For critical bugs that need immediate fixing:

1. Create a hotfix branch from the released tag
2. Fix the issue and test thoroughly
3. Increment the patch version
4. Follow the standard release process
5. Document the hotfix in CHANGELOG.md 