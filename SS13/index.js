const userAuth = [
    { username: "quang_huy", password: "quang_huy_001", status: "active" },
    { username: "nhat_minh", password: "nhat_minh_02", status: "inactive" }]

function handelShowAlert(message, type) {

    let htmlRender = `<div class="alert alert-${type} alert-dismissible" role="alert">
                    <div>${message}</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`
    let divAlert = document.getElementById("liveAlertPlaceholder")
    divAlert.innerHTML = htmlRender

}

handelShowAlert("Ko ai tuong tac voi mentor", "danger")
function handleClickLogin() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value


    let result = {message:"", type:""}
    result.type ="danger"
    if (!username || !password) { // check acc ko dc null
        result.message =  "username or params it not empty"
    } else {

        //kiem tra user name
        let userValid = userAuth.find((user) => user.username === username)

        //kiem tra password
        if (!userValid || userValid.password !== password) {
            result.message  = "username or password not match"
            //kiem tra trang thai user
        } else if (userValid.status === "active") {
            result.message =  "Login success"
            result.type ="success"

        } else {
            result.message  = "Login failed"
        }
    }
    handelShowAlert( result.message, result.type)

    if(result.type=="success"){
        document.location.href="./success.html"
    }else{
        document.location.href="./failed.html"

    }

}




// function handleClickToast(){
//     const toastTrigger = document.getElementById('liveToastBtn')
//     const toastLiveExample = document.getElementById('liveToast')
//     if (toastTrigger) {
//       const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//       toastTrigger.addEventListener('click', () => {
//         toastBootstrap.show()
//       })
//     }
// }