import packageInfo from './package.json'

module.exports = {
    expo: {
        name: 'Neuland Next',
        slug: 'neuland-app-native',
        scheme: 'neuland',
        owner: 'neuland-ingolstadt',
        version: packageInfo.version,
        githubUrl: 'https://github.com/neuland-ingolstadt/neuland.app-native/',
        orientation: 'portrait',
        userInterfaceStyle: 'automatic',
        ios: {
            bundleIdentifier: 'de.neuland-ingolstadt.neuland-app',
            buildNumber: '1',
            supportsTablet: true,
            userInterfaceStyle: 'automatic',
            associatedDomains: [
                'webcredentials:neuland.app',
                'activitycontinuation:neuland.app',
            ],
            config: {
                usesNonExemptEncryption: false,
            },
            infoPlist: {
                RCTAsyncStorageExcludeFromBackup: false,
                CFBundleAllowMixedLocalizations: true,
                CFBundleLocalizations: ['en', 'de'],
                CFBundleDevelopmentRegion: 'en',
            },
            splash: {
                image: './src/assets/splash.png',
                resizeMode: 'contain',
                backgroundColor: '#ffffff',
                dark: {
                    backgroundColor: '#000000',
                },
            },
        },
        android: {
            package: 'app.neuland',
            userInterfaceStyle: 'automatic',
            versionCode: 48,
            splash: {
                image: './src/assets/splash.png',
                resizeMode: 'contain',
                backgroundColor: '#ffffff',
                dark: {
                    backgroundColor: '#000000',
                },
            },
        },
        sdkVersion: '49.0.0',
        experiments: {
            tsconfigPaths: true,
        },
        plugins: [
            [
                'expo-router',
                {
                    origin: 'https://neuland.app',
                },
            ],
            ['expo-localization'],
            [
                'expo-local-authentication',
                {
                    faceIDPermission: 'Allow $(PRODUCT_NAME) to use Face ID.',
                },
            ],
            [
                'expo-build-properties',
                {
                    ios: {
                        deploymentTarget: '15.0',
                    },
                },
            ],
        ],
    },
}
