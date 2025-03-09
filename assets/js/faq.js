document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.question__btn-answer')

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const answer =
                this.closest('.faq__question').querySelector('.question__answer')
            const icon = this.querySelector('img')

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null
                answer.style.opacity = 0
                answer.style.marginBottom = '0'
                icon.src = 'assets/images/faq/Vector.svg'
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px'
                answer.style.opacity = 1
                answer.style.marginBottom = '0px'
                icon.src = 'assets/images/faq/Iconopen.svg';
            }
        })
    })
})