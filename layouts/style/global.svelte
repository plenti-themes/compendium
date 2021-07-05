<!-- rgba(var(--color), 0.8); -->
<style>
  /* ---------------- */
  /* Global styles    */
  /* ---------------- */
  :global(body, p) {
    color: var(--on-secondary);
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.95;
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

  /* ---------------- */
  /* Typography    */
  /* ---------------- */
  :global(h1, h2, h3, h4, h5, h6) {
    font-family: montserrat, sans-serif;
    font-weight: 600;
    line-height: 1.2;
    opacity: 0.85;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
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
    /* font-weight: 500; */
    opacity: 0.9;
  }
</style>
