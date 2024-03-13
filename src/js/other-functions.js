export { showAdded };

const showAdded = async () => {
    const addedElement = document.querySelector(".confirm-wrapper");
    addedElement.style.display = "block";
    setTimeout(function() {
        addedElement.style.display = "none";
    }, 2500)
}