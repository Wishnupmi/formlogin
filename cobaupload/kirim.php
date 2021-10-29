  <?php
  header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 604800");
header("Access-Control-Request-Headers: x-requested-with");
header("Access-Control-Allow-Headers: x-requested-with, x-requested-by, Origin, X-Requested-With, Accept");

echo "<pre>";
print_r($_FILES);
echo "</pre>";

// echo "df".$_POST['input'].$_FILES["file"]["name"];
  if(!empty($_FILES["files"]["name"]))
  {
   $nama_file = explode('.', $_FILES["files"]["name"]);
   $ext = end($nama_file);
   $nama_baru = mt_rand().".".$ext;
   $lokasi_file = 'images/' . $nama_baru;
   $move = move_uploaded_file($_FILES["files"]["tmp_name"], $lokasi_file);
   if($move){
    echo $lokasi_file;
  }else{
     echo "";
  }
 }
 ?>