<!-- rgba(var(--color), 0.8); -->
<style>
  /* ---------------- */
  /* Global styles    */
  /* ---------------- */
  :global(body) {
    color: var(--on-secondary);
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.95;
  }
  :global(code) {
    font-size: 0.85rem;
  }
  :global(p) {
    color: var(--on-secondary);
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.95;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  :global(p a) {
    text-decoration: underline;
  }
  :global(a) {
    opacity: 0.9;
  }
  :global(a:hover) {
    color: var(--accent);
    opacity: 0.95;
  }
  :global(table) {
    border-spacing: 0.5rem 0.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.8rem;
  }
  :global(table > caption) {
    font-size: 0.85rem;
    font-weight: 700;
  }
  :global(table > th) {
    font-size: 0.85rem;
  }
  :global(table > td) {
    font-size: 0.85rem;
  }
  :global(td) {
    border-spacing: 0.5rem;
    background-color: var(--background);
    border: 1px var(--on-surface) solid;
    padding: 0.5rem;
  }
  :global(th) {
    background-color: var(--accent);
    color: rgba(var(--on-accent), 1);
    border: 1px var(--on-surface) solid;
    border-spacing: 0.5rem;
    padding: 0.5rem;
  }
  :global(tr) {
    border-spacing: 0.5rem;
    background-color: var(--surface);
    color: var(--on-surface);
  }
  :global(blockquote) {
    font: 14px/22px normal helvetica, sans-serif;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: 3px solid var(--accent);
  }
  :global(caption) {
    font-weight: 600;
    font-size: 1.05rem;
    font-style: italic;
    color: var(--on-background);
  }
  :global(ol) {
    margin-left: 2rem;
    margin-bottom: 1.5rem;
  }
  :global(hr) {
    border-top: 1px solid var(--accent);
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  /* ---------------- */
  /* Typography    */
  /* ---------------- */
  :global(h1) {
    font-size: 2.4rem;
    font-family: montserrat, sans-serif;
    font-weight: 600;
    line-height: 1.2;
    opacity: 0.85;
    margin-bottom: 0.5rem;
  }
  :global(h2) {
    font-size: 2rem;
    font-family: montserrat, sans-serif;
    font-weight: 600;
    line-height: 1.2;
    opacity: 0.85;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
  :global(h3) {
    font-size: 1.6rem;
    font-family: montserrat, sans-serif;
    font-weight: 600;
    line-height: 1.2;
    opacity: 0.85;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
  :global(h4) {
    font-size: 1.25rem;
    font-family: montserrat, sans-serif;
    font-weight: 600;
    line-height: 1.2;
    opacity: 0.85;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
  :global(h5) {
    font-size: 1rem;
    font-family: montserrat, sans-serif;
    font-weight: 600;
    line-height: 1.2;
    opacity: 0.85;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
  :global(h6) {
    font-size: 0.8rem;
    font-family: montserrat, sans-serif;
    font-weight: 600;
    line-height: 1.2;
    opacity: 0.85;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  /* ---------------- */
  /* Layouts          */
  /* ---------------- */
  :global(.header) {
    color: var(--on-secondary);
  }
  :global(.menu) {
    font-family: montserrat, sans-serif;
    font-weight: 500;
    color: var(--on-primary);
    border-bottom: 4px solid transparent;
  }
  :global(.menu:hover) {
    border-bottom: 4px solid var(--accent);
    transition: all 0.25s ease-in;
  }
  :global(.menu.active) {
    border-bottom: 4px solid var(--accent);
  }

  :global(.tag) {
    color: var(--on-secondary);
    font-weight: 500;
  }
  :global(.text-aside) {
    color: var(--on-secondary);
    font-size: 0.95rem;
    opacity: 0.85;
  }
  :global(.text-meta) {
    color: var(--on-secondary);
    font-size: 0.8rem;
    opacity: 0.85;
  }
  :global(.text-meta a) {
    text-decoration: underline;
  }
  :global(pre) {
    height: auto;
    max-height: 60vh;
    overflow-y: auto;
  }
  :global(.tabset > .tabs) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }
  :global(.tabset > .tabs > label) {
    order: 1;
    cursor: pointer;
    display: block;
    background: var(--background);
    transition: background ease 0.2s;
    border: 0.1rem solid rgba(var(--on-accent), 0.3);
    border-top-width: 0.2rem;
    z-index: 10;
    position: relative;
    width: 8rem;
    padding: 0.5rem 0.3rem 0.5rem 0.3rem;
    color: var(--on-surface);
    text-decoration: none;
    text-align: center;
    margin-right: 0.2rem;
    margin-bottom: -0.1rem;
    font-size: 0.85rem;
    font-weight: 600;
  }
  :global(.tabset > .tabs > label:hover) {
    color: var(--accent);
  }
  :global(.tabset > .tabs > .tabcontent) {
    order: 99;
    height: auto;
    min-width: 100%;
    max-height: 65vh;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    display: none;
    background: var(--surface);
    padding: 1rem;
    border: 0.1rem solid rgba(var(--on-accent), 0.3);
    color: var(--on-surface);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  :global(.tabset > .tabs > .tabcontent > h4) {
    margin-top: 0.25rem;
  }
  :global(.tabset > .tabs > .radiomenu) {
    display: none;
  }
  :global(.tabset > .tabs > .radiomenu:checked + label) {
    background: var(--surface);
    border-top-color: var(--accent);
    border-top-width: 0.2rem;
    border-bottom: 0.1rem solid transparent;
  }
  :global(.tabset > .tabs > .radiomenu:checked + label + .tabcontent) {
    display: block;
  }
  :global(.tabcontent pre) {
    max-height: none;
  }
  :global(.footer) {
    color: var(--on-primary);
    line-height: 1.2;
    font-family: montserrat, sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    opacity: 0.85;
  }
  :global(.footer a) {
    text-decoration: underline;
  }

  /* ---------------- */
  /* Color Classes  */
  /* ---------------- */
  :global(.accent) {
    color: var(--accent);
  }
  :global(.accent-p) {
    color: var(--accent);
    background-color: var(--primary);
  }
  :global(.accent-b) {
    color: var(--accent);
    background-color: var(--background);
  }
  :global(.bg-primary) {
    background-color: var(--primary);
  }
  :global(.bg-secondary) {
    background-color: var(--secondary);
  }
  :global(.bg-main) {
    background-color: var(--background);
  }

  /* ---------------- */
  /* Surface Classes  */
  /* ---------------- */
  :global(.disabled:hover) {
    color: rgba(var(--on-accent), 1);
    background-color: var(--accent);
    text-decoration: none;
  }
  :global(.btn-round) {
    display: inline-flex;
    z-index: 1;
    transition: 0.2s ease;
    color: var(--on-surface);
    background-color: var(--surface);
    border: 1px solid;
    border-color: rgba(var(--on-accent), 0.3);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 700;
    height: 2.25rem;
    width: 2.25rem;
    padding: 1px;
  }
  :global(.btn-round:hover) {
    color: rgba(var(--on-accent), 1);
    background-color: var(--accent);
    border-color: var(--accent);
    text-decoration: none;
    font-weight: 700;
    opacity: 0.9;
  }
  :global(.btn-round-active) {
    color: rgba(var(--on-accent), 1);
    background-color: var(--accent);
    border-color: var(--accent);
    display: inline-flex;
    z-index: 1;
    transition: 0.2s ease;
    border: 1px solid;
    border-color: var(--accent);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 700;
    height: 2.25rem;
    width: 2.25rem;
    padding: 3px;
    opacity: 0.9;
  }
  :global(.btn-round-inactive) {
    color: rgba(var(--on-accent), 0.3);
    background-color: var(--surface);
    display: inline-flex;
    z-index: 1;
    transition: 0.2s ease;
    border: 1px solid;
    border-color: rgba(var(--on-accent), 0.3);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 700;
    height: 2.25rem;
    width: 2.25rem;
    padding: 3px;
    opacity: 0.9;
  }
  :global(.btn-outline) {
    color: var(--on-surface);
    background-color: var(--surface);
    border: 1px solid;
    border-color: rgba(var(--on-accent), 0.3);
    border-radius: 50px;
    padding: 10px 25px;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    z-index: 1;
    transition: 0.2s ease;
  }
  :global(.btn-outline:hover) {
    color: rgba(var(--on-accent), 1);
    background-color: var(--accent);
    border-color: var(--accent);
    text-decoration: none;
    opacity: 0.9;
  }
</style>
