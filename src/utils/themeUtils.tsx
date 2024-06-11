export const applyTheme = (theme: string) => {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
  
    if (theme === 'dark') {
      themeLink.href = '/styles/dark-theme.css';
    } else {
      themeLink.href = '/styles/light-theme.css';
    }
  };
  