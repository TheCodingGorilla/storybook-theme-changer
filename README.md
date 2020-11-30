# Storybook Theme Changer

A Storybook react addon to change the theme used by an Emotion theme provider.

## Usage

```typescript
// main.ts
import '@codinggorilla/storybook-theme-changer/dist/register';

export default {
    addons: ['@codinggorilla/storybook-theme-changer/dist']
}
```

```typescript
// preview.tsx
import { Theme } from '@emotion/react';
import { Story, StoryContext } from '@storybook/react';
import { WithThemesProvider } from '@codinggorilla/storybook-theme-changer';

// Themes
import standardTheme from '../themes/standard';
import darkTheme from '../themes/dark';

function ThemeDecorator(Story: Story, Context: StoryContext) {
    const themes: Theme[] = [
        standardTheme,
        darkTheme
    ]

    return WithThemesProvider(themes, Story, Context);
}

export const decorators = [ThemeDecorator];
```
