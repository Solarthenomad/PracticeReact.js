import React, {Component} from 'react';
import Swal from 'sweetalert2';

class R058_Sweetalert2Confirm extends Component {

    deletAlert=()=>{
        Swal.fire({
            title:'정말 삭제하시겠습니까?',
            icon:'question',
            showCancelButton : true,
            confirmButtonColor:'#48088A',
            confirmButtonText:'예',
            cancelButtonText:'아니오',
        

        }).then((result) => {
            if (result.value){
                document.getElementById('deletId').remove();
                Swal.fire(
                    'Deleted',
                    'sweetalert2 삭제 완료',
                    'success'
                )
            }
        })
    }
    render() {
        return(
            <>
            <h2>sweetalert2</h2>
            <button onClick={e=>this.deletAlert()}>삭제</button>
            </>
        )
    }

}

export default R058_Sweetalert2Confirm;