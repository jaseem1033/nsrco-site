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

  const img = document.querySelector('#pd-image');
  if (img) {
    img.src = product.image;
    img.alt = product.name;
  }

  // Gallery setup with repeated images when alternates aren't available
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
          currentIndex = idx;
          img.src = galleryImages[currentIndex];
          thumbsContainer.querySelectorAll('.pd-thumb').forEach(el => el.classList.remove('active'));
          t.classList.add('active');
        }
      }
    });
  }

  const prevBtn = document.querySelector('#pd-prev');
  const nextBtn = document.querySelector('#pd-next');
  function updateImage(indexDelta){
    currentIndex = (currentIndex + indexDelta + galleryImages.length) % galleryImages.length;
    img.src = galleryImages[currentIndex];
    if (thumbsContainer){
      const thumbs = thumbsContainer.querySelectorAll('.pd-thumb');
      thumbs.forEach(el => el.classList.remove('active'));
      if (thumbs[currentIndex]) thumbs[currentIndex].classList.add('active');
    }
  }
  if (prevBtn) prevBtn.addEventListener('click', () => updateImage(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateImage(1));

  const featuresEl = document.querySelector('#pd-features');
  if (featuresEl && Array.isArray(product.features)) {
    featuresEl.innerHTML = product.features.map(f => (
      `<li class="mb-2 d-flex align-items-start"><span class="text-primary me-2">•</span><span>${f}</span></li>`
    )).join('');
  }

  const specsTbody = document.querySelector('#pd-specs');
  if (specsTbody && product.specs) {
    specsTbody.innerHTML = Object.entries(product.specs).map(([k,v]) => (
      `<tr><th scope="row">${k}</th><td>${v}</td></tr>`
    )).join('');
  }
})();
