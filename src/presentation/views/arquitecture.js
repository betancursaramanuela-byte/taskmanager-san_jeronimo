export function showArquitecture (container,navigate) {
  
  
  container.innerHTML = ` 

 <p class="h1">h1. La arquitectura es muy importante</p>
<p class="h2">h2. Juliana </p>
<p class="h3">h3. Sara</p>
<p class="h4">h4. Juli</p>
<p class="h5">h5. Sarita</p>
<p class="h6">h6. Muchas Gracias</p>

` ;

container.addEventListener("click",(event) => {
    
    const link = event.target.closest ("[data-view]");

    if (!link) return;

    event.preventDefault();

    navigate(link.dataset.view);
});


}