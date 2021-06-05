<style>
  /* Structure */
  :global(.overlay-image) {
    position: relative;
    width: 100%;
  }
  :global(.section-sm) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  :global(.nav-link) {
    color: rgba(28, 29, 31);
    font-family: montserrat, sans-serif;
    font-weight: 300;
    line-height: 1.7;
    vertical-align: middle;
  }
  :global(.nav-link:hover) {
    color: rgba(180, 83, 9);
    text-decoration: none;
  }



  /* Defaults */
  :global(.body) {
    color: #696c6d;
    font-family: open sans, sans-serif;
    font-size: 1rem;
    line-height: 1.7;
  }
  :global(p, .paragraph) {
    color: #696c6d;
    font-size: 95%;
    font-weight: 200;
  }
  :global(.list-inline-item .svg-inline--fa i) {
    font-size: 90%;
  }

  /* Content settings */
  :global(.content) {
    color: rgba(28, 29, 31, 0.8);
    padding-left: 0;
  }
  :global(.content strong) {
    font-weight: 600;
  }
  :global(.content h1 h2 h3 h4 h5 h6) {
    color: rgba(28, 29, 31, 0.8);
    font-weight: 500;
    line-height: 1.2;
  }
  :global(.content a) {
    color: rgba(28, 29, 31);
    font-family: montserrat, sans-serif;
    font-weight: 500;
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
  :global(.content-meta) {
    font-size: 80%;
    opacity: 80%;
    line-height: 1.7;
  }
  :global(.content-meta a) {
    color: #1c1d1f;
    font-weight: 500;
  }
  :global(.content-meta a:hover) {
    color: rgba(180, 83, 9);
    font-weight: 500;
  }

  /* Buttons */
  :global(.btn-round) {
    color: #1c1d1f;
    background-color: #cccfcf;
	border-radius: 50%;
    text-align: center;
	text-decoration: none;
    font-size: 14px;
	padding: 8px;
	display: inline-block;
    z-index: 1;
    transition: 0.2s ease;
  }
  :global(.btn-round:hover) {
    color: #fff;
    background-color: rgba(180, 83, 9);
    text-decoration: none;
    font-weight: 400;
    opacity: 70%;
  }
  :global(.btn-outline) {
    color: #1c1d1f;
    background-color: #fff;
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
    color: #fff;
    background-color: rgba(180, 83, 9);
    text-decoration: none;
    font-weight: 400;
    opacity: 70%;
  }
</style>
