const checkbox= document.getElementById('toggleCheckbox');

checkbox.addEventListener('change', () => {
    setTimeout(() => {
        document.querySelectorAll('*, .text-white, .text-black, .border-white, .border-black, .bg-black, .bg-white, .opacity-0, .opacity-1').forEach((element) => {
            const style = getComputedStyle(element);

            if (element.classList.contains('text-white')) {
                element.classList.remove('text-white');
                element.classList.add('text-black');
            } else if (element.classList.contains('text-black')) {
                element.classList.remove('text-black');
                element.classList.add('text-white');
            }

            if (element.classList.contains('border-white')) {
                element.classList.remove('border-white');
                element.classList.add('border-black');
            } else if (element.classList.contains('border-black')) {
                element.classList.remove('border-black');
                element.classList.add('border-white');
            }

            if (element.classList.contains('bg-black')) {
                element.classList.remove('bg-black');
                element.classList.add('bg-white');
            } else if (element.classList.contains('bg-white')) {
                element.classList.remove('bg-white');
                element.classList.add('bg-black');
            }

            if (element.classList.contains('opacity-0')) {
                element.classList.remove('opacity-0');
                element.classList.add('opacity-1');
            } else if (element.classList.contains('opacity-1')) {
                element.classList.remove('opacity-1');
                element.classList.add('opacity-0');
            }
        });
    }, 100);
});