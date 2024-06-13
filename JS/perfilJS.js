let imagemField = document.getElementById('imagemField')
let imagemPreview= document.getElementById('imagemPreview')

let bannerField = document.getElementById('bannerField')
let bannerPreview= document.getElementById('bannerPreview')


let loadImagem = (e) =>{
    const filePath = e.target || window.event.srcElement;

    const file = filePath.files;
    const fileRender = new FileReader();
    fileRender.onload = () =>{
        imagemPreview.src = fileRender.result;
    };
    fileRender.readAsDataURL(file[0]);
}

imagemField.addEventListener('change', loadImagem);