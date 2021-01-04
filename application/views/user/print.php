<!DOCTYPE html>
<html lang="en">

<img src="<?php echo base_url(); ?>images/logo2.jpeg" style="width: 120px;height:auto;position:absolute;">
<table border="0" style="width: 100%;">
	<tr>
		<td align="right">
			<span style="line-height: 1.6; font-size: 40">
				Invoice
			</span>
		</td>
	</tr>

</table>

<body data-spy="scroll" data-target=".fixed-top">
	<div class="container">
		<table id="cart" class="table table-hover table-condensed">
			<thead>
				<tr>
					<th style="width:50%">Product</th>
					<th style="width:10%">Price</th>
					<th style="width:22%" class="text-center">Subtotal</th>
					<th style="width:10%"></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td data-th="Product">
						<div class="row">
							<div class="col-sm-2 hidden-xs"><img src="<?php echo base_url(); ?>images/paket1.jpg" alt="..." class="img-responsive" /></div>
							<div class="col-sm-10">
								<h4 class="nomargin"> Paket <?= $paket ?> </h4>
								<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</td>
					<td data-th="Price"> Rp. <?= $harga ?> </td>
					<td data-th="Subtotal" class="text-center"> Rp. <?= $harga ?> </td>
					<td class="actions" data-th="">
						<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
						<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr class="visible-xs">
					<td class="text-center"><strong>Total Rp. <?= $harga ?></strong></td>
				</tr>
				<tr>
					<td colspan="2" class="hidden-xs"></td>
					<td class="hidden-xs text-center"><strong>Total Rp. <?= $harga ?></strong></td>

				</tr>
			</tfoot>
		</table>
	</div>
	<div id="contact" class="form-2">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h2>Informasi Kontak</h2>
					<ul class="list-unstyled li-space-lg">
						<li class="address">Jangan takut untuk hubungi kami </li>
						<li><i class="fas fa-map-marker-alt"></i>Jl. Pesanggaran No.13 Banyuwangi 69499, Jawa Timur</li>
						<li><i class="fas fa-phone"></i><a class="turquoise" href="tel:003024630820">0341 - 417510</a></li>
						<li><i class="fas fa-envelope"></i><a class="turquoise" href="mailto:office@evolo.com">admin@earsip.com</a></li>
					</ul>
				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of form-2 -->
	<!-- end of contact -->

</body>
<div align=right>
<?php
$tanggal = mktime(date('m'), date("d"), date('Y'));
echo "Tanggal : <b> " . date("d-m-Y", $tanggal) . "</b>";
date_default_timezone_set("Asia/Jakarta");
$jam = date("H:i:s");
echo " | Pukul : <b> " . $jam . " " . " </b> ";
$a = date("H");
if (($a >= 6) && ($a <= 11)) {
	echo " <b>, Selamat Pagi !! </b>";
} else if (($a >= 11) && ($a <= 15)) {
	echo " , Selamat  Pagi !! ";
} elseif (($a > 15) && ($a <= 18)) {
	echo ", Selamat Siang !!";
} else {
	echo ", <b> Selamat Malam </b>";
}
?>
</div>

</html>