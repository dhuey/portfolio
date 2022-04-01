(()=> {
        const theme = window.matchMedia("(prefers-color-scheme: dark)");
        if (theme.matches) {
          document.getElementById("faviconTag").href = "dalton-huey-logo-dark.svg";
        } else {
          document.getElementById("faviconTag").href = "dalton-huey-logo.svg";
        }
      })();