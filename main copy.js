var array = [
    /*0*/[2, 0, 9, 0, 8, 0, 0, "E", 0, "F", 0, 0, 0, 0, 0, 0],
    /*1*/[0, 6, "C", 0, 0, "D", 2, 0, "E", "A", 1, "B", 4, 0, 0, 0],
    /*2*/[0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 2, 3, "B", "C", 0],
    /*3*/[3, 4, 8, 7, 0, "A", 0, "B", 6, 0, 0, 0, "E", 2, 1, "D"],
    /*4*/[4, 9, "F", 0, 0, 6, 0, 0, "A", 0, 0, 1, 0, 0, 7, 2],
    /*5*/["A", 0, 1, "C", 0, 0, 7, 0, 3, 0, 0, 0, 0, "G", 4, 8],
    /*6*/["D", 0, 0, 0, 2, 0, 0, 0, "F", 4, 0, 0, 0, 0, 6, 3],
    /*7*/[7, 0, 0, 6, 0, 3, 9, 0, "B", 2, 0, 0, "D", "F", "A", 0],
    /*8*/["F", "B", 0, 0, 5, 2, 0, 0, 0, 0, 0, 6, "A", 0, "E", 4],
    /*9*/[9, "C", 0, 0, 0, 0, 0, 7, 2, 5, "A", "F", "G", 0, 0, 0],
    /*10*/[0, 0, 2, "G", 3, 0, 0, 0, 0, 1, "E", 4, 0, 0, 0, 0],
    /*11*/[5, 0, "E", "A", "G", 0, "D", 0, 8, 0, 0, "C", 0, 0, 0, 0],
    /*12*/[0, 0, 7, 0, 0, 8, 0, 6, 0, "E", "G", 0, 0, 0, "B", 1],
    /*13*/[0, 0, 6, "E", 0, 0, "B", 0, 0, 0, 0, 0, 0, 0, "D", 7],
    /*14*/[1, 0, "D", 4, "F", 7, 0, 2, 0, 6, "B", 0, 8, 0, 0, "E"],
    /*15*/[0, 3, 5, 0, 1, 4, 0, 0, 0, 0, "F", 8, 0, "A", 2, "G"]
]
function chuyenarr(){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[0].length; j++){
            if (array[i][j] == "A"){
                array[i][j] = 10
            }
            else if(array[i][j] == "B"){
                array[i][j] = 11
            }
            else if(array[i][j] == "C"){
                array[i][j] = 12
            }
            else if(array[i][j] == "D"){
                array[i][j] = 13
            }
            else if(array[i][j] == "E"){
                array[i][j] = 14
            }
            else if(array[i][j] == "F"){
                array[i][j] = 15
            }
            else if(array[i][j] == "G"){
                array[i][j] = 16
            }
            
        }  
    }
}
chuyenarr()
var demdong  = 0
var demcot = 0
var listdong = []
function findMinListDong(ar){
    var ara = ar.filter(function(aa){
        return aa !== 0
    })
    let min_val = Math.min.apply(Math, ara)
    return min_val
}
function find(array){
    listdong = []
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[0].length; j++){
            if (array[i][j] == 0){
                demdong += 1
            }
        }
        listdong.push(demdong)
        demdong = 0
    } 
    for (let i= 0; i <  listdong.length ; i++){
        if (listdong[i] == findMinListDong(listdong)){
            return i 
        }
        // console.log(i)
    }    
}
// find(array)
// console.log(listdong.length)
// find(array)
var d 
function findNull (m){
    d = find(m)
    for (var c = 0; c < m[0].length;c++ ){
        if (m[d][c] == 0){
            //nếu tìm thấy trả về hai giá trị là (d:dòng, c:cột)
            return [d,c]
        }
    }
    return false
}



function check(m, gia_tri, dong, cot){
    // kiểm tra xem giá trị có trùng với các giá trị có trên dòng đó không
    for(var a = 0; a < m[0].length; a++){
        if (m[a][cot] == gia_tri && a != dong){
            return false
        }
    }
    // kiểm tra xem giá trị có trùng với các giá trị có trên cột đó không
    for (var b= 0; b< m.length; b++ ){
        if (m[dong][b] == gia_tri && b != cot){
            return false
        }
    }

    var x= Math.floor(cot / 4)
    var y= Math.floor(dong / 4)
    // vòng lặp này dùng để kiểm tra có trùng trong các khối nhỏ không
    for (var i = y*4; i <= y*4 + 2; i++ ){
        for (var j = x*4; j <= x*4 + 2; j++ ){
            if (m[i][j] == gia_tri && i != dong && j != cot){
                return false
            }
            
        }
    }
    // nếu không trùng với tất cả các trường hợp trên thì trả về true
    return true
}

function giai(m){   
    var tim_thay = findNull (m)
    if(!tim_thay){
        return true
    }else{
        var [d,c] = tim_thay
    }
    for (var i = 1; i<= 16; ++i ){
        if (check(m, i, d, c )){
            m[d][c] = i
            // alert(` cột ${c} dòng ${d}: ${i}`)
            if (giai(m)){
                return true
            }
            else{ 
                m[d][c] = 0
            }
        }
    }
    return false
}

giai(array)
// console.log(array)

// var abc = [0, 0, 0, 9, 1, 3, 4]
// var aaa=abc.filter(function(aa){
//     return aa !== 0
// })
array.forEach(function (aa){
    document.write(aa + "<br>")
})

