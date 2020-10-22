var welcom = document.getElementById("account");
if (getCookie("用户名")) {
    welcom.innerHTML = getCookie("用户名");
} else {
    window.location.href = "./login.html";
}

window.onload = function() {
    $.ajax({
        url: '../admin/showlist.php',
        dataType: 'json',
        success: function(res) {
            if (res.code == 1) {
                document.getElementById('id').innerHTML = res.data[0]['product_id'];
                document.getElementById('name').setAttribute('index', res.data[0]['product_id']);
                document.getElementById('name').innerHTML = res.data[0]['product_name'];
                document.getElementById('img').src = res.data[0]['product_img'];
                document.getElementById('number').innerHTML = res.data[0]['product_num'];
                document.getElementById('price').innerHTML = res.data[0]['product_price'];
            } else {
                $('.empty').show().next('.good').hide();
            }
        }
    })
}

//update
$('.addSub').click(function() {
    let bookId = $('#name').attr('index');
    let type = $(this).attr('id')
    $.ajax({
        url: "../admin/updatewq.php",
        data: `id=${bookId}&type=${type}`,
        dataType: 'json',
        success: function(res) {
            if (res.num > 0) {
                $.ajax({
                    url: '../admin/showlist.php',
                    dataType: 'json',
                    success: function(res) {
                        document.getElementById('id').innerHTML = res.data[0]['product_id'];
                        document.getElementById('name').innerHTML = res.data[0]['product_name'];
                        document.getElementById('img').src = res.data[0]['product_img'];
                        document.getElementById('number').innerHTML = res.data[0]['product_num'];
                        document.getElementById('price').innerHTML = res.data[0]['product_price'];
                    }
                })
            } else {
                $.ajax({
                    url: '../admin/delwq.php',
                    data: `id=${bookId}`,
                    dataType: 'json',
                    success: function(res) {
                        $('.empty').show().next('.good').hide();
                    }
                })
            }
        }
    })
})

//delete
$('#del').click(function() {
    let bookId = $('#name').attr('index');
    console.log(bookId);
    $.ajax({
        url: "../admin/delwq.php",
        data: `id=${bookId}`,
        dataType: 'json',
        success: function(res) {

            $('.empty').show().next('.good').hide();
        }
    })
})

$('.empty p a').click(function() {
    window.location.href = "./index.html"
})