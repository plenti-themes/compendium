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
  :global(.accent) {
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
  :global(.bg-background) {
    background-color: var(--background);
  }
  :global(.text-meta) {
    color: var(--on-secondary);
    font-family: montserrat, sans-serif;
    font-size: 0.8rem;
  }
  :global(.text-meta a) {
	opacity: 75%;
	text-decoration: underline;
  }
  :global(.text-meta a:hover) {
    color: var(--accent);
	opacity: 100%;
  }
  :global(.header) {
    color: var(--on-secondary);
    line-height: 1.2;
    font-family: montserrat, sans-serif;
    font-weight: 700;
	opacity: 80%;
  }
  :global(.header a) {
    color: var(--on-secondary);
	opacity: 80%;
  }
  :global(.header a:hover) {
	opacity: 95%;
  }
  :global(.menu) {
    color: var(--on-primary);
    font-weight: 500;
    line-height: 1.5;
  }
  :global(.menu a) {
    color: var(--on-primary);
    font-family: montserrat, sans-serif;
    line-height: 1.2;
  }
  :global(.menu a:hover) {
    color: var(--accent);
    text-decoration: none;
  }
  :global(.footer) {
    color: var(--on-primary);
    line-height: 1.2;
    font-family: montserrat, sans-serif;
    font-weight: 500;
	font-size: 0.9rem;
	opacity: 90%;
  }
  :global(.footer a) {
	opacity: 90%;
	text-decoration: underline;
  }
  :global(.footer a:hover) {
    color: var(--accent);
	opacity: 100%;
	text-decoration: underline;
  }
  :global(.content) {
    color: var(--on-secondary);
    line-height: 1.5;
  }
  :global(.content a) {
    color: var(--on-secondary);
    font-family: montserrat, sans-serif;
    line-height: 1.2;
  }
  :global(.content a:hover) {
    color: var(--accent);
    text-decoration: none;
  }
  :global(.content ul li) {
    font-size: 90%;
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
    opacity: 90%;
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
    opacity: 90%;
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
    opacity: 90%;
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
    opacity: 90%;
  }
</style>

<!-- rgba(var(--color), 0.8); -->