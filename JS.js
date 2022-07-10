const panels = document.querySelectorAll('.panel');

console.log(panels);

panels.forEach((panel) => {
    panel.addEventListener('mouseover', () => {
        removeActiveClass();
        panel.classList.add("active");
        panel.children[0].style.display = "block";
    });
});

const removeActiveClass = () => {
    panels.forEach((panel) => {
        panel.children[0].style.display = "none";
        panel.classList.remove("active");
    })
};