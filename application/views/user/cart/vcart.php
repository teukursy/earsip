<!DOCTYPE html>
<html lang="en">

<head>

	<?php $this->load->view("user/_partials/head.php") ?>
	<!-- Website Title -->
	<title>Arsip</title>

	<link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	
	<!-- <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> -->
	

</head>

<body data-spy="scroll" data-target=".fixed-top">
	<?php $this->load->view("user/_partials/navbar.php") ?>
		<div class="container">
		<?=$this->session->flashdata('notif')?>
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
								<div class="col-sm-2 hidden-xs"><img src="<?php echo base_url(); ?>images/paket.jpg" alt="..." class="img-responsive" /></div>
								<div class="col-sm-10">
									<h4 class="nomargin"> Paket <?= $paket ?> </h4>
									<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
								</div>
							</div>
						</td>
						<td data-th="Price"> Rp. <?= $harga ?> </td>
						<td data-th="Subtotal" class="text-center"> Rp. <?= $harga ?> </td>
					<!--	<td class="actions" data-th="">
							<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
							<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
						</td> -->
					</tr>
				</tbody>
				<tfoot>
					<tr class="visible-xs">
						<td class="text-center"><strong>Total Rp. <?= $harga ?></strong></td>
					</tr>
					<tr>
						<td><a href="<?php echo site_url("") ?>" class="btn btn-warning"><i class="fa fa-angle-left"></i> Back To Order</a></td>
						<td colspan="2" class="hidden-xs"></td>
						<td class="hidden-xs text-center"><strong>Total Rp. <?= $harga ?></strong></td>
						<td><button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#tambah-data">Checkout</button></td>
					
					</tr>
				</tfoot>
			</table>
		</div>

		<!-- Modal Tambah -->
		 <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="tambah-data" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
				<h4 class="modal-title">Tambah Data</h4>
				</div>
					<form class="form-horizontal" action="<?php echo site_url ("user/Cart/tambah") ?>" method="post" enctype="multipart/form-data" role="form">
					<div class="modal-body">
							<div class="form-group">
								<label class="col-lg-2 col-sm-2 control-label">Nama</label>
								<div class="col-lg-10">
									<input type="text" class="form-control" name="nama" placeholder="Tuliskan Nama">
								</div>
							</div>
							<div class="form-group">
								<label class="col-lg-2 col-sm-2 control-label">Alamat</label>
								<div class="col-lg-10">
								<textarea class="form-control" name="alamat" placeholder="Tuliskan Alamat"></textarea>
								</div>
							</div>
							<div class="form-group">
								<label class="col-lg-2 col-sm-2 control-label">Email</label>
								<div class="col-lg-10">
									<input type="text" class="form-control" name="email" placeholder="Tuliskan Email">
								</div>
							</div>
							<div class="form-group">
								<label class="col-lg-2 col-sm-2 control-label">Telp</label>
								<div class="col-lg-10">
									<input type="text" class="form-control" name="telp" placeholder="Tuliskan Telp">
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn btn-info" type="submit"> Simpan&nbsp;</button>
							<button type="button" class="btn btn-warning" data-dismiss="modal"> Batal</button>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div> 
		<!-- END Modal Tambah -->





		<!-- Footer -->
		<?php $this->load->view("user/_partials/footer.php") ?>
		<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

</body>

</html>