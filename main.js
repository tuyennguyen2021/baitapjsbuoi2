//bài tập 1 tính tiền lương
//đầu vào: 
//luong1ngay: 100000
//songaylam: nguoi dung nhap vao

//xử lý: luongnhanvien= luong1ngay * songaylam

//đầu ra: show tienluongnhanvien

document.getElementById("btntienluong").onclick = function (){

    var ngayCong=document.getElementById("songaycong").value*1
    console.log(ngayCong);
    var luongNgay=100000;
    var LuongNhanVien = "Lương của Bạn là: " + ngayCong*luongNgay+" VND"
    console.log(LuongNhanVien);
    document.getElementById("thongbao").innerHTML=LuongNhanVien;
    document.getElementById("thongbao").classList.add("ketquain")

};


///bài tập 2: tính giá trị trung bình
//đầu vào: nhập 5 số thực
//người dùng nhập vào lần lượt 5 số thực
//xử lý: gTriTrungBinh = ((n1+n2+n3+n4+n5)/5)
//đầu ra: show gia trị trung bình
document.getElementById("btnTrungBinh").onclick = function(){
    var soThuc1=document.getElementById("n1").value*1;
    console.log(soThuc1);
    var soThuc2=document.getElementById("n2").value*1;
    console.log(soThuc2);
    var soThuc3=document.getElementById("n3").value*1;
    console.log(soThuc3);
    var soThuc4=document.getElementById("n4").value*1;
    console.log(soThuc4);
    var soThuc5=document.getElementById("n5").value*1;
    console.log(soThuc5);
    var trungBinhST = ((soThuc1+soThuc2+soThuc3+soThuc4+soThuc5)/5);
    var ketQua = "giá trị trung bình 5 số thực là: " + trungBinhST;
    console.log(ketQua);
    document.getElementById("thongbao2").innerHTML=ketQua;
    document.getElementById("thongbao2").classList.add("ketquain")
};



//bài tập 3: quy đổi tiền USD ->VND
//đầu vào: GiaUSD= 23500 VND
//số USD = người dùng nhập
//xử lý: tienDoi= số USD*GiaUSD

//đầu ra: show tiền việt


document.getElementById("btnDoiTien").onclick = function(){
    var nhapSoDo=document.getElementById("soDo").value*1;
    console.log(nhapSoDo);
    var usd=23500;
    var TienVnD = "Tiền đổi ra VND là: " + nhapSoDo*usd + " VND";
    console.log(TienVnD);
    document.getElementById("thongbao3").innerHTML=TienVnD;
    document.getElementById("thongbao3").classList.add("ketquain")
};



//bài tập 4 tính diện tích,chu vi hình chữ nhẩt
//đầu vào : 
//ChieuDai, ChieuRong người dùng nhập vô
//xử lý : DT= ChieuDai*ChieuRong; CV=(ChieuDai+ChieuRong)*2;
//đầu ra: show CHU VI DIEN TICH HCN

document.getElementById("btnTinhHCM").onclick = function (){
    var nhapDai=document.getElementById("chieuDai").value*1;
    console.log(nhapDai);
    var nhapRong=document.getElementById("chieuRong").value*1;
    console.log(nhapRong);
    var DT="Diện tích hình chữ nhật là: "+(nhapDai*nhapRong);
    console.log(DT);
    var CV="Chu Vi Hình Chữ Nhật là: "+ (nhapDai+nhapRong)*2;
    console.log(CV);
    document.getElementById("thongbao4").innerHTML=DT;
    document.getElementById("thongbao5").innerHTML=CV;
    document.getElementById("thongbao4").classList.add("ketquain")
    document.getElementById("thongbao5").classList.add("ketquain")
};

//bai tap 5 tính tong 2 ký số

//đầu vào:  n = người dùng nhập vô
//xử lý: lấy hàng đơn vị:  int dv = n%10;  lấy đơn vị hàng chục: int chuc = n/10;
//đầu ra: show tong 2 ky so

document.getElementById("btnTong").onclick = function(){
    var nhapKySo=document.getElementById("kySo").value*1;
    console.log(nhapKySo);
    var dv= nhapKySo%10;
    var chuc=Math.floor(nhapKySo/10);
    var tong2Kyso ="tong 2 ky so: " + (dv+chuc);
    console.log(tong2Kyso);
    document.getElementById("thongbao6").innerHTML=tong2Kyso;
    document.getElementById("thongbao6").classList.add("ketquain")
}




