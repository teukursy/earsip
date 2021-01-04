<!DOCTYPE html>
<html lang="en">

<style type="text/css">
    .contoh2 {
        font-size: 16px;
        line-height: 1.5em;
    }
</style>
<p class="contoh2">
    <h3>
        <center>PEMERINTAHAN KABUPATEN MALANG</center>
        <center>KECAMATAN SINGOSARI</center>
    </h3>
    <h2>
        <center>DESA TUNJUNGTIRTO</center>
    </h2>
    <h5>
        <center>sekretariat : Jl. Kantor Desa No. 5 Bunut, Tunjungtirto Tlp.405785</center>
    </h5>
    <HR SIZE="4" NOSHADE>
</p>

<h2>
    <center>Laporan Surat Masuk</center>
</h2>
<hr />
<table border="1" width="100%" style="text-align:center;">
    <tr>
        <th>No</th>
        <th>Nomor Surat</th>
        <th>Alamat</th>
        <th>Tanggal</th>
        <th>Perihal</th>
    </tr>
    <?php

    foreach ($suratmasuk as $row) {
    ?>
        <tr>
            <td><?php echo $row->nourut; ?></td>
            <td><?php echo $row->noberkas; ?></td>
            <td><?php echo $row->alamatpengirim; ?></td>
            <td><?php echo $row->tanggalmasuk; ?></td>
            <td><?php echo $row->perihalmasuk; ?></td>
        </tr>
    <?php
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