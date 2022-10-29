import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
export const alertConfirm = (msg='')=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Exitó',
        text:msg
      })

}

export const alertWarning = (msg = '')=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'warning',
        title: 'Cuidado',
        text:msg
      })
}


export const modalError = (outOfStock)=>{
  let outProductStock = ''
  outOfStock.forEach(producto => {
    outProductStock += producto.name + ','
  })
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `Los siguientes productos no tienen stock: ${outProductStock} `,
  })
}