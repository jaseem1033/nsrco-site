(function(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = productsData[id] || productsData['pressure-fryer'];

  // Header breadcrumb and title
  const crumb = document.querySelector('#pd-breadcrumb-current');
  if (crumb) crumb.textContent = product.category || product.name;
  const title = document.querySelector('#pd-title');
  if (title) title.textContent = product.name;
  const desc = document.querySelector('#pd-desc');
  if (desc) desc.textContent = product.description;

  const mainImg = document.querySelector('#pd-image');
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.name;
  }

  // Gallery setup
  const galleryImages = Array.isArray(product.images) && product.images.length
    ? product.images
    : [product.image, product.image, product.image];
  let currentIndex = 0;

  const thumbsContainer = document.querySelector('#pd-thumbs');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = galleryImages.map((src, i) => (
      `<img src="${src}" class="pd-thumb${i===0?' active':''}" data-index="${i}" alt="thumb ${i+1}">`
    )).join('');

    thumbsContainer.addEventListener('click', (e) => {
      const t = e.target;
      if (t && t.classList.contains('pd-thumb')) {
        const idx = parseInt(t.getAttribute('data-index'), 10);
        if (!Number.isNaN(idx)) {
          updateImage(idx);
        }
      }
    });
  }

  function updateImage(newIndex) {
    currentIndex = newIndex;
    
    // Add a quick fade out/in effect
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = galleryImages[currentIndex];
      mainImg.style.opacity = '1';
    }, 200);

    if (thumbsContainer) {
      const thumbs = thumbsContainer.querySelectorAll('.pd-thumb');
      thumbs.forEach(el => el.classList.remove('active'));
      if (thumbs[currentIndex]) thumbs[currentIndex].classList.add('active');
    }
  }

  // Zoom Logic
  const zoomContainer = document.getElementById('pd-zoom-container');
  const zoomLens = document.getElementById('pd-zoom-lens');
  const zoomResult = document.getElementById('pd-zoom-result');

  if (zoomContainer && zoomLens && zoomResult) {
    zoomContainer.addEventListener('mousemove', moveLens);
    zoomContainer.addEventListener('mouseenter', () => {
      zoomLens.style.display = 'block';
      zoomResult.style.display = 'block';
      zoomResult.style.backgroundImage = `url('${mainImg.src}')`;
    });
    zoomContainer.addEventListener('mouseleave', () => {
      zoomLens.style.display = 'none';
      zoomResult.style.display = 'none';
    });

    function moveLens(e) {
      const pos = getCursorPos(e);
      let x = pos.x - (zoomLens.offsetWidth / 2);
      let y = pos.y - (zoomLens.offsetHeight / 2);

      if (x > zoomContainer.offsetWidth - zoomLens.offsetWidth) x = zoomContainer.offsetWidth - zoomLens.offsetWidth;
      if (x < 0) x = 0;
      if (y > zoomContainer.offsetHeight - zoomLens.offsetHeight) y = zoomContainer.offsetHeight - zoomLens.offsetHeight;
      if (y < 0) y = 0;

      zoomLens.style.left = x + "px";
      zoomLens.style.top = y + "px";

      const cx = zoomResult.offsetWidth / zoomLens.offsetWidth;
      const cy = zoomResult.offsetHeight / zoomLens.offsetHeight;

      zoomResult.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
      zoomResult.style.backgroundSize = (zoomContainer.offsetWidth * cx) + "px " + (zoomContainer.offsetHeight * cy) + "px";
    }

    function getCursorPos(e) {
      const a = zoomContainer.getBoundingClientRect();
      const x = e.pageX - a.left - window.pageXOffset;
      const y = e.pageY - a.top - window.pageYOffset;
      return {x: x, y: y};
    }
  }

  // Populate Features and Specs
  const featuresEl = document.querySelector('#pd-features');
  if (featuresEl && Array.isArray(product.features)) {
    featuresEl.innerHTML = product.features.map(f => (
      `<li class="mb-3 d-flex align-items-center"><span class="badge rounded-pill bg-primary me-3 text-primary bg-opacity-10" style="width: 8px; height: 8px; padding: 0;"> </span><span>${f}</span></li>`
    )).join('');
  }

  const specsTbody = document.querySelector('#pd-specs');
  if (specsTbody && product.specs) {
    specsTbody.innerHTML = Object.entries(product.specs).map(([k,v]) => (
      `<tr class="border-bottom border-secondary border-opacity-10"><th scope="row" class="py-3 fw-normal text-muted">${k}</th><td class="py-3 text-end fw-medium">${v}</td></tr>`
    )).join('');
  }
})();
