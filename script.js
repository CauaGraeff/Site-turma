
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

const nodes = document.querySelectorAll('.node-wrapper');
        const cards = document.querySelectorAll('.card');

        function setActive(index) {
            nodes.forEach(node => node.classList.remove('active'));
            cards.forEach(card => card.classList.remove('active'));

            if (nodes[index]) nodes[index].classList.add('active');
            if (cards[index]) cards[index].classList.add('active');
        }

        nodes.forEach(node => {
            node.addEventListener('click', () => {
                const index = node.getAttribute('data-index');
                setActive(index);
            });
        });

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const index = card.getAttribute('data-index');
                setActive(index);
            });
        });
