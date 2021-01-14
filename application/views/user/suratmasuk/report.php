<!DOCTYPE html>
<html lang="en">

<img src="<?php echo base_url(); ?>images/logokab.png" style="width: 85px;height:auto;position:absolute;">
<table border="0" style="width: 100%;">
    <tr>
        <td align="center">
            <span style="line-height: 1.6;font-size:12">
                PEMERINTAHAN KABUPATEN MALANG
                KECAMATAN SINGOSARI
            </span>
            <br>
            <span style="line-height: 1.6; font-weight:bold; font-size:xx-large">
                DESA TUNJUNGTIRTO
                </span>
                <br>
                <span style="line-height: 1.6;">
                sekretariat : Jl. Kantor Desa No. 5 Bunut, Tunjungtirto Tlp.405785
                </span>
        </td>
    </tr>

</table>

<HR SIZE="4" NOSHADE>

<h2>
    <center>Laporan Surat Masuk</center>
</h2>

<table border="0.5" width="100%" style="text-align:center; border-style:none; border-collapse:collapse">
    <tr>
        <th>No</th>
        <th>Nomor Surat</th>
        <th>Alamat</th>
        <th>Tanggal</th>
        <th>Perihal</th>
    </tr>
    <?php
$i=1;
    foreach ($suratmasuk as $row) {
        
    ?>
        <tr>
            <td><?php echo $i; ?></td>
            <td><?php echo $row->noberkas; ?></td>
            <td><?php echo $row->alamatpengirim; ?></td>
            <td><?php echo $row->tanggalmasuk; ?></td>
            <td><?php echo $row->perihalmasuk; ?></td>
        </tr>
       
    <?php
     $i++;
    }
    ?>
</table>
<br>
<br>
<br>
<CENTEr>
    <table border="0" width="100%" style="text-align:center;">

        <tr>
            <th>MENGETAHUI
                <br>
                KEPALA DESA
                <br>
                <br>
                <br>
                <br>
                <br>
                HANIK DWI MARTA P.,S,Farm.,M,Ap.
            </th>
            <th>Tunjungtirto, ....,.........,...
                <br>
                SEKRETARIS DESA TUNJUNGTIRTO
                <br>
                <br>
                <br>
                <br>
                <br>
                MUH. MUSTHOFA
            </th>
        </tr>

    </table>
</CENTEr>

</html>