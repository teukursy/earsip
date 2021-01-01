<!DOCTYPE html>
<html lang="en">
<head>
    
    <?php $this->load->view("user/_partials/head.php") ?>
    <!-- Website Title -->
    <title>Arsip</title>

    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    
</head>
<body data-spy="scroll" data-target=".fixed-top">
<?php $this->load->view("user/_partials/navbar.php") ?>
<form action="<?php echo base_url('user/Cart/ubah_cart')?>" method="post" name="frmShopping" id="frmShopping" class="form-horizontal" enctype="multipart/form-data">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
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
									<div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>
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
							<td><a href="<?php echo site_url("Welcome/index") ?>" class="btn btn-warning"><i class="fa fa-angle-left"></i> Back To Order</a></td>
							<td colspan="2" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong>Total Rp. <?= $harga ?></strong></td>
							<td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
						</tr>
					</tfoot>
				</table>
</div>

    

    
    

    <!-- Footer -->
    <?php $this->load->view("user/_partials/footer.php") ?>



</body>
</html>