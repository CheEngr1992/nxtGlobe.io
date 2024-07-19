
let imgBox = document.querySelectorAll('.imgBox');
let define = document.querySelectorAll('.definition');
let selectCircles = document.querySelectorAll('.select-circle');

imgBox.forEach(box => {
    box.addEventListener('click', function () {

        define.forEach(def => def.classList.remove('active'));
        imgBox.forEach(box => box.classList.remove('active'));

        document.getElementById(this.dataset.id).classList.add('active');
        this.classList.add('active');

        selectCircles.forEach(circle => circle.classList.remove('active'));

        let targetCircle = document.querySelector(`.select-circle[data-id="select-${this.dataset.id}"]`);
        if (targetCircle) {
            targetCircle.classList.add('active');
        }
    });
});
