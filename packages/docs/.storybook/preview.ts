import type { Preview } from "@storybook/react"; 
import { themes} from '@storybook/theming'
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
   
    backgrounds: {
      default: 'dark'
    },
    
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    }
  },
};

export default preview;
