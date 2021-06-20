<style>
  /* Nodes */
  :global(h1) {
    font-size: 2rem;
  }
  :global(h2) {
    font-size: 1.5rem;
  }
  :global(h3) {
    font-size: 1.17rem;
  }
  :global(h4) {
    font-size: 1rem;
  }
  :global(h5) {
    font-size: 0.85rem;
  }
  :global(h6) {
    font-size: 0.67rem;
  }
  :global(p) {
    color: var(--on-secondary);
    font-size: 95%;
    font-weight: 400;
  }

  /* ---------------- */
  /* Content Classes  */
  /* ---------------- */
  :global(.bg-primary) {
    background-color: var(--primary);
  }
  :global(.bg-secondary) {
    background-color: var(--secondary);
  }
  :global(.bg-background) {
    background-color: var(--background);
  }
  :global(.text-meta) {
    color: var(--on-secondary);
    font-family: montserrat, sans-serif;
    font-size: 0.8rem;
  }
  :global(.text-meta a:hover) {
    color: var(--accent);
    font-family: montserrat, sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
  }
  :global(.content) {
    color: var(--on-secondary);
    line-height: 1.5;
  }
  :global(.header) {
    color: var(--on-primary);
    line-height: 1.2;
    font-family: montserrat, sans-serif;
    font-weight: 700;
  }
  :global(.header a:hover) {
    color: var(--accent);
    line-height: 1.2;
    font-family: montserrat, sans-serif;
    font-weight: 700;
  }
  :global(.content strong) {
    font-weight: 600;
  }
  :global(.content a) {
    color: var(--on-secondary);
    font-family: montserrat, sans-serif;
    line-height: 1.2;
  }
  :global(.content a:hover) {
    color: var(--accent);
    font-weight: 500;
    text-decoration: none;
  }
  :global(.content ul li) {
    font-size: 90%;
  }

  /* ---------------- */
  /* Surface Classes  */
  /* ---------------- */
  :global(.btn-round) {
    display: inline-flex;
    z-index: 1;
    transition: 0.2s ease;
    color: var(--on-surface);
    background-color: var(--surface);
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
    padding: 1px;
  }
  :global(.btn-round:hover) {
    color: var(--on-accent);
    background-color: var(--accent);
    text-decoration: none;
    font-weight: 700;
    opacity: 70%;
  }
  :global(.btn-round-active) {
    color: var(--on-accent);
    background-color: var(--accent);
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
    opacity: 70%;
  }
  :global(.btn-round-inactive) {
    color: var(--on-disabled);
    background-color: var(--surface);
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
    opacity: 70%;
  }
  :global(.disabled:hover) {
    color: var(--on-accent);
    background-color: var(--accent);
    text-decoration: none;
  }
  :global(.btn-outline) {
    color: var(--on-surface);
    background-color: var(--surface);
    border: 1px solid;
    border-color: var(--accent);
    border-radius: 50px;
    padding: 10px 25px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    z-index: 1;
    transition: 0.2s ease;
  }
  :global(.btn-outline:hover) {
    color: var(--on-accent);
    background-color: var(--accent);
    text-decoration: none;
    font-weight: 400;
    opacity: 70%;
  }
</style>
