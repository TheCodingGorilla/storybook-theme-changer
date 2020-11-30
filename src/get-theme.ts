import { Theme } from '@emotion/react';

function getTheme(themeName: string, themes: Theme[]): Theme {
    const theme = themes.find((theme) => theme.name === themeName);

    return theme as Theme;
}

export default getTheme;
