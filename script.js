<<<<<<< Updated upstream

        const nodes = document.querySelectorAll('.node-wrapper');
        const cards = document.querySelectorAll('.card');

       
        function setActive(index) {
            
            nodes.forEach(node => node.classList.remove('active'));
            cards.forEach(card => card.classList.remove('active'));

           
=======
const nodes = document.querySelectorAll('.node-wrapper');
        const cards = document.querySelectorAll('.card');

        function setActive(index) {
            nodes.forEach(node => node.classList.remove('active'));
            cards.forEach(card => card.classList.remove('active'));

>>>>>>> Stashed changes
            if (nodes[index]) nodes[index].classList.add('active');
            if (cards[index]) cards[index].classList.add('active');
        }

<<<<<<< Updated upstream
       
=======
>>>>>>> Stashed changes
        nodes.forEach(node => {
            node.addEventListener('click', () => {
                const index = node.getAttribute('data-index');
                setActive(index);
            });
        });

<<<<<<< Updated upstream
        
=======
>>>>>>> Stashed changes
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const index = card.getAttribute('data-index');
                setActive(index);
            });
        });