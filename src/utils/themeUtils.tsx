export const applyTheme = (theme: string) => {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
  
    if (theme === 'dark') {
      themeLink.href = '/src/theme-styles/dark-theme.css';
    } else {
      themeLink.href = '/src/theme-styles/light-theme.css';
    }
  };
  