// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withTamagui } = require('@tamagui/next-plugin');

process.env.TAMAGUI_TARGET = 'web';
process.env.IGNORE_TS_CONFIG_PATHS = 'true';
process.env.TAMAGUI_DISABLE_NO_THEME_WARNING = '1';

const disableExtraction = process.env.NODE_ENV === 'development';

if (disableExtraction) {
  console.log('Disabling static extraction in development mode for better HMR');
}

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  transpilePackages: [],
};

const plugins = [
  withTamagui({
    appDir: true,
    platform: 'web',
    config: './tamagui.config.ts',
    components: ['@shared/ui', 'tamagui'],
    logTimings: true,
    disableExtraction,
    useReactNativeWebLite: false,
    shouldExtract: (path) => {
      if (path.includes('libs/shared/ui') || path.includes('@shared/ui')) {
        return true;
      }
    },
    // exclude react-native-web exports from the bundle
    excludeReactNativeWebExports: [
      'Switch',
      'ProgressBar',
      'Picker',
      'Modal',
      'PressResponder',
      'VirtualizedList',
      'VirtualizedSectionList',
      'AnimatedFlatList',
      'FlatList',
      'CheckBox',
      'Touchable',
      'SectionList',
    ],
  }),
  withNx,
];

module.exports = composePlugins(...plugins, function debug(config) {
  console.log({ config });
  return config;
})(nextConfig);
