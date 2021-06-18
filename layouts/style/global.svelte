<style>
  /* Words */
  :global(p) {
    color: #696c6d;
    font-size: 95%;
    font-weight: 400;
  }
  :global(.text-meta) {
    font-family: montserrat, sans-serif;
	font-size: 0.8rem;
  }
  :global(.h1) {
	font-size: 2rem;
  }
  :global(.h2) {
	font-size: 1.5rem;
  }
  :global(.h3) {
	font-size: 1.17rem;
  }
  :global(.h4) {
	font-size: 1rem;
  }
  :global(.h5) {
	font-size: 0.85rem;
  }
  :global(.h6) {
	font-size: 0.67rem;
  }

  /* Content settings */
  :global(.content) {
    color: rgba(28, 29, 31, 0.8);
    line-height: 1.2;
  }
  :global(.content .h1, .h2, .h3, .h4, .h5, .h6) {
    font-family: montserrat, sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }
  :global(.content strong) {
    font-weight: 600;
  }
  :global(.content a) {
    color: rgba(28, 29, 31, 0.8);
    font-family: montserrat, sans-serif;
    line-height: 1.2;
  }
  :global(.content a:hover) {
    color: rgba(180, 83, 9);
    font-weight: 500;
    text-decoration: none;
  }
    :global(.content ul li) {
    font-size: 90%;
  }
  
  /* Buttons */
  :global(.btn-round) {
    display: inline-flex;
    z-index: 1;
    transition: 0.2s ease;
    color: #1c1d1f;
    background-color: #ffffff;
    border: 1px solid;
    border-color: rgba(180, 83, 9);
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
    color: #ffffff;
    background-color: rgba(180, 83, 9);
    text-decoration: none;
    font-weight: 700;
    opacity: 70%;
  }
  :global(.btn-round-active) {
    color: #ffffff;
    background-color: rgba(180, 83, 9);
    display: inline-flex;
    z-index: 1;
    transition: 0.2s ease;
    border: 1px solid;
    border-color: rgba(180, 83, 9);
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
    color: #1c1d1f;
    background-color: #ffffff;
    text-decoration: none;
  }
  :global(.btn-outline) {
    color: #1c1d1f;
    background-color: #ffffff;
    border: 1px solid;
    border-color: rgba(180, 83, 9);
    border-radius: 50px;
    padding: 10px 25px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    z-index: 1;
    transition: 0.2s ease;
  }
  :global(.btn-outline:hover) {
    color: #ffffff;
    background-color: rgba(180, 83, 9);
    text-decoration: none;
    font-weight: 400;
    opacity: 70%;
  }
</style>
